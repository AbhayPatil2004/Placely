import {
  getChannel,
  CODE_RUN_QUEUE_NAME,
  CODE_RUN_RESULT_QUEUE_NAME,
} from "../config/rabbitmq.js";

import executeCpp from "../services/docker.cpp.service.js";
import executeJava from "../services/docker.java.service.js";
import executeJs from "../services/docker.js.service.js";
import executePy from "../services/docker.py.service.js";

import { classifyExecution } from "./code-submission.consumer.js";

const executors = {
  cpp: executeCpp,
  java: executeJava,
  js: executeJs,
  py: executePy,
};

// "Run" only reports the first N test cases (change to 2 if you prefer).
const RUN_TEST_CASE_LIMIT = 3;

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

const makeLogger = (jobId) => (stage, message, data) => {
  const prefix = `[CODE RUN][${new Date().toISOString()}][job:${jobId ?? "n/a"}][${stage}]`;
  if (data === undefined) console.log(prefix, message);
  else console.log(prefix, message, data);
};

// Keeps only the first N test cases and recomputes the summary so it stays
// consistent with the list (the result consumer validates passed/total vs list).
const limitTestCases = (classified, limit = RUN_TEST_CASE_LIMIT) => {
  const all = Array.isArray(classified.testCasesResult)
    ? classified.testCasesResult
    : [];

  if (all.length === 0) return classified;

  const testCasesResult = all.slice(0, limit);

  // Runtime error / TLE / MLE: just trim the list, keep the original counts.
  if (classified.verdict !== "ACCEPTED" && classified.verdict !== "WRONG_ANSWER") {
    return { ...classified, testCasesResult };
  }

  const totalTestCases = testCasesResult.length;
  const passedTestCases = testCasesResult.filter((t) => t?.status === "passed").length;

  return {
    ...classified,
    testCasesResult,
    totalTestCases,
    passedTestCases,
    verdict: passedTestCases === totalTestCases ? "ACCEPTED" : "WRONG_ANSWER",
  };
};

// =============================================================
// Publishing
// =============================================================

const publishRunResult = (channel, result) => {
  const ok = channel.sendToQueue(
    CODE_RUN_RESULT_QUEUE_NAME,
    Buffer.from(JSON.stringify(result)),
    {
      persistent: true,
      contentType: "application/json",
      messageId: result.jobId,
    }
  );

  console.log(
    `[CODE RUN][publish] job=${result.jobId} verdict=${result.verdict} sendToQueue returned ${ok}`
  );
};

const createRunFailureResult = (job, errorMessage) => ({
  jobId: job.jobId,
  studentId: job.studentId,
  problemId: job.problemId,
  language: job.language,

  status: "error",
  verdict: "SYSTEM_ERROR",

  totalTestCases: 0,
  passedTestCases: 0,
  testCasesResult: [],

  stdout: "",
  stderr: truncate(errorMessage),
  exitCode: -1,
  executionTime: null,
  memoryUsed: null,

  errorMessage: truncate(errorMessage),
  completedAt: new Date().toISOString(),
});

// =============================================================
// Consumer
// =============================================================

export const startCodeRunConsumer = async () => {
  const channel = await getChannel();

  if (!channel) {
    throw new Error("RabbitMQ channel is unavailable");
  }

  await channel.assertQueue(CODE_RUN_QUEUE_NAME, { durable: true });
  await channel.assertQueue(CODE_RUN_RESULT_QUEUE_NAME, { durable: true });

  channel.prefetch(1);

  console.log(`[CODE RUN] Waiting for jobs from ${CODE_RUN_QUEUE_NAME}...`);

  await channel.consume(
    CODE_RUN_QUEUE_NAME,
    async (message) => {
      if (!message) return;

      const startedAt = Date.now();
      let job;
      let log = makeLogger(null);

      try {
        job = JSON.parse(message.content.toString());
        log = makeLogger(job?.jobId);

        // Job shape: { jobId, code, studentId, problemId, language }
        const { jobId, studentId, problemId, language, code } = job;

        if (
          !jobId ||
          !studentId ||
          !problemId ||
          typeof code !== "string" ||
          !code.trim()
        ) {
          throw new Error("Invalid code run job");
        }

        const normalizedLanguage = String(language ?? "").toLowerCase();
        const execute = executors[normalizedLanguage];

        if (!execute) {
          throw new Error(`Unsupported language: ${language}`);
        }

        log("JOB", `student=${studentId} problem=${problemId} language=${normalizedLanguage} codeLength=${code.length}`);

        const execution = await execute(code);

        log("JOB", `docker execution finished in ${Date.now() - startedAt}ms`);

        const classified = limitTestCases(classifyExecution(execution, { jobId }));

        const result = {
          jobId,
          studentId,
          problemId,
          language: normalizedLanguage,
          ...classified,
          completedAt: new Date().toISOString(),
        };

        publishRunResult(channel, result);

        log("JOB", `verdict=${result.verdict} passed=${result.passedTestCases}/${result.totalTestCases} (${Date.now() - startedAt}ms)`);

        channel.ack(message);
      } catch (error) {
        log("JOB", `FAILED: ${error.message}`);
        console.error(error);

        if (job?.jobId && job?.studentId && job?.problemId) {
          try {
            publishRunResult(channel, createRunFailureResult(job, error.message));
          } catch (publishError) {
            log("JOB", `Failed to publish failure result: ${publishError.message}`);
          }
        } else {
          log("JOB", "Job has no identifiers, cannot publish a failure result");
        }

        channel.ack(message);
      }
    },
    { noAck: false }
  );
};