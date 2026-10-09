import {
  getChannel,
  CODE_SUBMISSION_RESULT_QUEUE_NAME,
} from "../config/rabbitmq.js";

import Submission from "../DSA/models/submission.model.js";
import { SendToStudent } from "../websocket/webManager.js";
import Solved from "../DSA/models/solved.model.js";

// These must match the enum in the Submission Mongoose schema.
const FINAL_STATUSES = [
  "ACCEPTED",
  "WRONG_ANSWER",
  "COMPILE_ERROR",
  "RUNTIME_ERROR",
  "TIME_LIMIT_EXCEEDED",
  "MEMORY_LIMIT_EXCEEDED",
  "SYSTEM_ERROR",
];

const MAX_TEXT = 10_000;

// =============================================================
// Helpers
// =============================================================

const truncate = (value, max = MAX_TEXT) => {
  const text = String(value ?? "");
  return text.length > max
    ? `${text.slice(0, max)}\n...[truncated ${text.length - max} chars]`
    : text;
};

const makeLogger = (submissionId) => (stage, message, data) => {
  const prefix = `[RESULT][${new Date().toISOString()}][sub:${submissionId ?? "n/a"}][${stage}]`;
  if (data === undefined) console.log(prefix, message);
  else console.log(prefix, message, data);
};

// Errors that will never succeed on retry.
class ResultValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ResultValidationError";
  }
}

const isPermanentError = (error) =>
  error instanceof ResultValidationError ||
  ["CastError", "ValidationError"].includes(error?.name);

// Normalize execution-service verdicts to database statuses.
const VERDICT_ALIASES = {
  ACCEPTED: "ACCEPTED",
  WRONG_ANSWER: "WRONG_ANSWER",
  COMPILATION_ERROR: "COMPILE_ERROR",
  COMPILE_ERROR: "COMPILE_ERROR",
  RUNTIME_ERROR: "RUNTIME_ERROR",
  TIME_LIMIT_EXCEEDED: "TIME_LIMIT_EXCEEDED",
  MEMORY_LIMIT_EXCEEDED: "MEMORY_LIMIT_EXCEEDED",
  SYSTEM_ERROR: "SYSTEM_ERROR",
};

const normalizeVerdict = (verdict) =>
  VERDICT_ALIASES[String(verdict ?? "").toUpperCase()] ?? null;

const normalizeTestCases = (rawList) =>
  (Array.isArray(rawList) ? rawList : []).map((testCase) => ({
    testCase: truncate(testCase?.testCase, 2000),
    expectedOutput: truncate(testCase?.expectedOutput, 2000),
    actualOutput: truncate(testCase?.actualOutput, 2000),
    logs: truncate(testCase?.logs, 2000),
    status: testCase?.status === "passed" ? "passed" : "wrong_answer",
  }));

// =============================================================
// Validation (per-verdict rules)
// =============================================================

const validateResult = (result, log) => {
  const { submissionId, studentId, verdict: incomingVerdict } = result;

  if (!submissionId || !studentId) {
    throw new ResultValidationError("Result is missing submissionId or studentId");
  }

  const verdict = normalizeVerdict(incomingVerdict);

  if (!verdict) {
    throw new ResultValidationError(`Unsupported submission verdict: ${incomingVerdict}`);
  }

  const total = Number(result.totalTestCases ?? 0);
  const passed = Number(result.passedTestCases ?? 0);

  if (
    !Number.isInteger(total) ||
    !Number.isInteger(passed) ||
    total < 0 ||
    passed < 0 ||
    passed > total
  ) {
    throw new ResultValidationError(`Invalid test-case counts: passed=${passed}, total=${total}`);
  }

  const testCasesResult = normalizeTestCases(result.testCasesResult);

  log("VALIDATE", `incoming="${incomingVerdict}" -> db status="${verdict}"`);
  log("VALIDATE", `passed=${passed} total=${total} testCasesResult=${testCasesResult.length}`);

  switch (verdict) {
    case "ACCEPTED":
      if (total === 0 || passed !== total) {
        throw new ResultValidationError(
          `Inconsistent ACCEPTED result: passed=${passed}, total=${total}`
        );
      }
      if (testCasesResult.length !== total) {
        throw new ResultValidationError(
          `ACCEPTED result count mismatch: expected ${total}, received ${testCasesResult.length}`
        );
      }
      break;

    case "WRONG_ANSWER":
      if (total === 0 || passed >= total) {
        throw new ResultValidationError(
          `Inconsistent WRONG_ANSWER result: passed=${passed}, total=${total}`
        );
      }
      if (testCasesResult.length !== total) {
        throw new ResultValidationError(
          `WRONG_ANSWER result count mismatch: expected ${total}, received ${testCasesResult.length}`
        );
      }
      break;

    case "COMPILE_ERROR":
    case "SYSTEM_ERROR":
      // Nothing was executed, so nothing can have passed.
      if (passed !== 0) {
        throw new ResultValidationError(
          `Inconsistent ${verdict} result: passed test cases must be zero`
        );
      }
      break;

    // RUNTIME_ERROR / TIME_LIMIT_EXCEEDED / MEMORY_LIMIT_EXCEEDED:
    // the run may stop part-way, so a partial (or empty) per-test list is valid.
    default:
      break;
  }

  return { verdict, total, passed, testCasesResult };
};

// =============================================================
// Solved / attempted tracking (never blocks result delivery)
// =============================================================

const updateSolvedStatus = async ({ studentId, problemId, verdict, total, passed, log }) => {
  try {
    if (verdict === "ACCEPTED") {
      await Solved.findOneAndUpdate(
        { studentId, problemId },
        { $set: { status: "SOLVED" } },
        { upsert: true, returnDocument: "after" }
      );
      log("SOLVED", "Problem marked as SOLVED");
      return;
    }

    if (verdict === "COMPILE_ERROR" || verdict === "SYSTEM_ERROR") {
      log("SOLVED", `No solved/attempted change for ${verdict}`);
      return;
    }

    const existing = await Solved.findOne({ studentId, problemId }).select("status");
    const currentStatus = existing?.status;

    const shouldMarkAttempted =
      currentStatus !== "SOLVED" &&
      ((total > 0 && passed > total / 2) ||
        verdict === "TIME_LIMIT_EXCEEDED" ||
        verdict === "MEMORY_LIMIT_EXCEEDED");

    log(
      "SOLVED",
      `currentStatus=${currentStatus ?? "none"} verdict=${verdict} passed=${passed}/${total} -> markAttempted=${shouldMarkAttempted}`
    );

    if (shouldMarkAttempted) {
      await Solved.findOneAndUpdate(
        { studentId, problemId },
        { $set: { status: "ATTEMPTED" } },
        { upsert: true, returnDocument: "after" }
      );
      log("SOLVED", "Problem marked as ATTEMPTED");
    }
  } catch (error) {
    // The submission is already saved; do not lose the student's result.
    log("SOLVED", `FAILED to update Solved collection: ${error.message}`);
    console.error(error);
  }
};

// =============================================================
// WebSocket notification
// =============================================================

const notifyStudent = async (studentId, submission, log) => {
  const payload = {
    type: "CODE_SUBMISSION_RESULT",
    submissionId: submission._id.toString(),
    problemId: submission.problemId?.toString(),
    language: submission.language,

    status: submission.status,
    verdict: submission.status,

    totalTestCases: submission.totalTestCases,
    passedTestCases: submission.passedTestCases,
    testCasesResult: submission.testCasesResult,

    stdout: submission.stdout,
    stderr: submission.stderr,
    exitCode: submission.exitCode,
    executionTime: submission.executionTime,
    memoryUsed: submission.memoryUsed,
    errorMessage: submission.errorMessage,
    completedAt: submission.completedAt,
  };

  log("WS", `Sending result to student=${studentId} status=${payload.status}`);

  try {
    const sendResult = await SendToStudent(studentId, payload);
    log("WS", "SendToStudent returned:", sendResult);
  } catch (error) {
    log("WS", `Failed to send result: ${error.message}`);
  }
};

// =============================================================
// Last-resort: never leave a submission stuck as "pending"
// =============================================================

const markSystemError = async ({ submissionId, studentId, reason, log }) => {
  if (!submissionId || !studentId) return;

  try {
    const updated = await Submission.findOneAndUpdate(
      { _id: submissionId, studentId, status: { $nin: FINAL_STATUSES } },
      {
        $set: {
          status: "SYSTEM_ERROR",
          totalTestCases: 0,
          passedTestCases: 0,
          testCasesResult: [],
          stdout: "",
          stderr: "",
          exitCode: -1,
          executionTime: 0,
          memoryUsed: null,
          errorMessage: truncate(reason),
          completedAt: new Date(),
        },
      },
      { returnDocument: "after", runValidators: true }
    );

    if (updated) {
      log("FALLBACK", `Submission marked SYSTEM_ERROR: ${reason}`);
      await notifyStudent(studentId, updated, log);
    } else {
      log("FALLBACK", "Submission not found or already finalized, nothing to mark");
    }
  } catch (error) {
    log("FALLBACK", `Could not mark SYSTEM_ERROR: ${error.message}`);
  }
};

// =============================================================
// Consumer
// =============================================================

const StartCodeSubmissionResultConsumer = async () => {
  const channel = await getChannel();

  if (!channel) {
    throw new Error("RabbitMQ channel is unavailable");
  }

  await channel.assertQueue(CODE_SUBMISSION_RESULT_QUEUE_NAME, { durable: true });

  channel.prefetch(1);

  console.log(`[RESULT] Waiting for results from ${CODE_SUBMISSION_RESULT_QUEUE_NAME}...`);

  channel.consume(
    CODE_SUBMISSION_RESULT_QUEUE_NAME,
    async (message) => {
      if (!message) return;

      const startedAt = Date.now();

      // 1. Parse the incoming RabbitMQ message.
      let result;

      try {
        result = JSON.parse(message.content.toString());
      } catch (error) {
        console.error("[RESULT] Invalid result JSON:", error.message);
        channel.nack(message, false, false);
        return;
      }

      const { submissionId, studentId } = result ?? {};
      const log = makeLogger(submissionId);

      log("RECEIVE", "========== RESULT RECEIVED ==========");
      log(
        "RECEIVE",
        `job=${result?.jobId} student=${studentId} verdict=${result?.verdict} redelivered=${message.fields?.redelivered}`
      );

      try {
        // 2. Validate + normalize according to the verdict.
        const { verdict, total, passed, testCasesResult } = validateResult(result, log);

        // 3. Find the student's submission.
        const submission = await Submission.findOne({ _id: submissionId, studentId });

        if (!submission) {
          throw new ResultValidationError(`Matching submission not found: ${submissionId}`);
        }

        log("DB", `Found submission, current status=${submission.status}`);

        // 4. Handle duplicate messages.
        if (FINAL_STATUSES.includes(submission.status)) {
          log("DB", `Already finalized (${submission.status}), acking duplicate`);
          channel.ack(message);
          return;
        }

        // 5. Persist the result FIRST (atomic: only if not finalized yet).
        const updatedSubmission = await Submission.findOneAndUpdate(
          { _id: submissionId, studentId, status: { $nin: FINAL_STATUSES } },
          {
            $set: {
              status: verdict,
              totalTestCases: total,
              passedTestCases: passed,
              testCasesResult,

              // The executor now sends only the student's own output
              // (driver JSON is stripped), so it is safe to store.
              stdout: truncate(result.stdout),
              stderr: truncate(result.stderr),
              exitCode: result.exitCode ?? -1,
              executionTime: result.executionTime ?? 0,
              memoryUsed: result.memoryUsed ?? null,
              errorMessage: truncate(result.errorMessage ?? result.stderr ?? ""),
              completedAt: result.completedAt ? new Date(result.completedAt) : new Date(),
            },
          },
          { returnDocument: "after", runValidators: true }
        );

        if (!updatedSubmission) {
          log("DB", "Submission was finalized by another result, acking");
          channel.ack(message);
          return;
        }

        log("DB", "Result saved", {
          status: verdict,
          passed,
          total,
          exitCode: updatedSubmission.exitCode,
          executionTime: updatedSubmission.executionTime,
          memoryUsed: updatedSubmission.memoryUsed,
        });

        // 6. Update solved / attempted (failures here are logged, not fatal).
        await updateSolvedStatus({
          studentId,
          problemId: updatedSubmission.problemId,
          verdict,
          total,
          passed,
          log,
        });

        // 7. Notify the frontend only after the result is saved.
        await notifyStudent(studentId, updatedSubmission, log);

        log("DONE", `========== SUBMISSION FINALIZED: ${verdict} ${passed}/${total} (${Date.now() - startedAt}ms) ==========`);

        // 8. Acknowledge after processing.
        channel.ack(message);
      } catch (error) {
        log("ERROR", `Failed to process result: ${error.message}`);
        console.error(error);

        if (isPermanentError(error)) {
          // Retrying cannot help. Tell the student instead of leaving
          // the submission "pending" forever, then drop the message.
          await markSystemError({
            submissionId,
            studentId,
            reason: `Result processing failed: ${error.message}`,
            log,
          });
          channel.nack(message, false, false);
        } else if (!message.fields?.redelivered) {
          // Probably transient (DB/network). Retry once.
          log("ERROR", "Transient failure, requeueing once");
          channel.nack(message, false, true);
        } else {
          // Failed twice. Give up (configure a dead-letter queue to keep it).
          await markSystemError({
            submissionId,
            studentId,
            reason: `Result processing failed after retry: ${error.message}`,
            log,
          });
          channel.nack(message, false, false);
        }
      }
    },
    { noAck: false }
  );
};

export default StartCodeSubmissionResultConsumer;