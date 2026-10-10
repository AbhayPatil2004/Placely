import {
  getChannel,
  CODE_RUN_RESULT_QUEUE_NAME,
} from "../config/rabbitmq.js";

import { SendToStudent } from "../websocket/webManager.js";

const MAX_TEXT = 10_000;
const MAX_CASE_TEXT = 2_000;
const MAX_TEST_CASES_TO_SEND = 2; // only the first 2 test cases go to the frontend

// =============================================================
// Helpers
// =============================================================

const truncate = (value, max = MAX_TEXT) => {
  const text = String(value ?? "");
  return text.length > max
    ? `${text.slice(0, max)}\n...[truncated ${text.length - max} chars]`
    : text;
};

const makeLogger = (jobId) => (stage, message, data) => {
  const prefix = `[RUN RESULT][${new Date().toISOString()}][job:${jobId ?? "n/a"}][${stage}]`;
  if (data === undefined) console.log(prefix, message);
  else console.log(prefix, message, data);
};

class ResultValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ResultValidationError";
  }
}

// Execution service verdicts -> frontend verdicts.
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
    testCase: truncate(testCase?.testCase, MAX_CASE_TEXT),
    expectedOutput: truncate(testCase?.expectedOutput, MAX_CASE_TEXT),
    actualOutput: truncate(testCase?.actualOutput, MAX_CASE_TEXT),
    logs: truncate(testCase?.logs, MAX_CASE_TEXT),
    status: testCase?.status === "passed" ? "passed" : "wrong_answer",
  }));

// =============================================================
// Validation
// =============================================================

const validateResult = (result, log) => {
  const { jobId, studentId, problemId, verdict: incomingVerdict } = result;

  if (!jobId || !studentId || !problemId) {
    throw new ResultValidationError("Result is missing jobId, studentId or problemId");
  }

  const verdict = normalizeVerdict(incomingVerdict);

  if (!verdict) {
    throw new ResultValidationError(`Unsupported verdict: ${incomingVerdict}`);
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
    throw new ResultValidationError(
      `Invalid test-case counts: passed=${passed}, total=${total}`
    );
  }

  const testCasesResult = normalizeTestCases(result.testCasesResult);

  log("VALIDATE", `incoming="${incomingVerdict}" -> "${verdict}"`);
  log("VALIDATE", `passed=${passed} total=${total} testCasesResult=${testCasesResult.length}`);

  switch (verdict) {
    case "ACCEPTED":
      if (total === 0 || passed !== total || testCasesResult.length !== total) {
        throw new ResultValidationError(
          `Inconsistent ACCEPTED result: passed=${passed}, total=${total}, cases=${testCasesResult.length}`
        );
      }
      break;

    case "WRONG_ANSWER":
      if (total === 0 || passed >= total || testCasesResult.length !== total) {
        throw new ResultValidationError(
          `Inconsistent WRONG_ANSWER result: passed=${passed}, total=${total}, cases=${testCasesResult.length}`
        );
      }
      break;

    case "COMPILE_ERROR":
    case "SYSTEM_ERROR":
      if (passed !== 0) {
        throw new ResultValidationError(
          `Inconsistent ${verdict} result: passed test cases must be zero`
        );
      }
      break;

    default:
      // RUNTIME_ERROR / TLE / MLE: partial or empty per-test list is valid.
      break;
  }

  return { verdict, total, passed, testCasesResult };
};

// =============================================================
// WebSocket notification
// =============================================================

const notifyStudent = async (studentId, payload, log) => {
  log("WS", `Sending result to student=${studentId} status=${payload.status}`);

  try {
    const sendResult = await SendToStudent(studentId, payload);
    log("WS", "SendToStudent returned:", sendResult);
  } catch (error) {
    log("WS", `Failed to send result: ${error.message}`);
  }
};

const buildPayload = (result, { verdict, total, passed, testCasesResult }) => ({
  type: "CODE_RUN_RESULT",
  jobId: result.jobId,
  problemId: String(result.problemId),
  language: result.language,

  status: verdict,
  verdict,

  // Counts describe the whole run...
  totalTestCases: total,
  passedTestCases: passed,
  // ...but only the first 2 test cases are sent to the frontend.
  testCasesResult: testCasesResult.slice(0, MAX_TEST_CASES_TO_SEND),

  stdout: truncate(result.stdout),
  stderr: truncate(result.stderr),
  exitCode: result.exitCode ?? -1,
  executionTime: result.executionTime ?? null,
  memoryUsed: result.memoryUsed ?? null,
  errorMessage: truncate(result.errorMessage),
  completedAt: result.completedAt ?? new Date().toISOString(),
});

// Used when the result is unusable, so the UI never waits forever.
const buildSystemErrorPayload = (result, reason) => ({
  type: "CODE_RUN_RESULT",
  jobId: result?.jobId,
  problemId: result?.problemId ? String(result.problemId) : undefined,
  language: result?.language,

  status: "SYSTEM_ERROR",
  verdict: "SYSTEM_ERROR",

  totalTestCases: 0,
  passedTestCases: 0,
  testCasesResult: [],

  stdout: "",
  stderr: "",
  exitCode: -1,
  executionTime: null,
  memoryUsed: null,
  errorMessage: truncate(reason),
  completedAt: new Date().toISOString(),
});

// =============================================================
// Consumer
// =============================================================

const StartCodeRunResultConsumer = async () => {
  const channel = await getChannel();

  if (!channel) {
    throw new Error("RabbitMQ channel is unavailable");
  }

  await channel.assertQueue(CODE_RUN_RESULT_QUEUE_NAME, { durable: true });

  channel.prefetch(1);

  console.log(`[RUN RESULT] Waiting for results from ${CODE_RUN_RESULT_QUEUE_NAME}...`);

  await channel.consume(
    CODE_RUN_RESULT_QUEUE_NAME,
    async (message) => {
      if (!message) return;

      const startedAt = Date.now();

      // 1. Parse the message.
      let result;

      try {
        result = JSON.parse(message.content.toString());
      } catch (error) {
        console.error("[RUN RESULT] Invalid result JSON:", error.message);
        channel.nack(message, false, false);
        return;
      }

      const log = makeLogger(result?.jobId);
      const studentId = result?.studentId;

      log("RECEIVE", `student=${studentId} verdict=${result?.verdict}`);

      try {
        // 2. Validate + normalize.
        const normalized = validateResult(result, log);

        // 3. Send only the first 2 test cases to the frontend.
        const payload = buildPayload(result, normalized);
        await notifyStudent(studentId, payload, log);

        log(
          "DONE",
          `${normalized.verdict} ${normalized.passed}/${normalized.total}, sent ${payload.testCasesResult.length} test case(s) (${Date.now() - startedAt}ms)`
        );

        channel.ack(message);
      } catch (error) {
        log("ERROR", `Failed to process result: ${error.message}`);
        console.error(error);

        // Code runs are not persisted, so there is nothing to retry:
        // tell the student something went wrong and drop the message.
        if (studentId) {
          await notifyStudent(
            studentId,
            buildSystemErrorPayload(result, `Result processing failed: ${error.message}`),
            log
          );
        }

        channel.nack(message, false, false);
      }
    },
    { noAck: false }
  );
};

export default StartCodeRunResultConsumer;