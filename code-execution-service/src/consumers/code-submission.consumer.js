
import {
  getChannel,
  CODE_SUBMISSION_QUEUE_NAME,
  CODE_SUBMISSION_RESULT_QUEUE_NAME,
} from "../config/rabbitmq.js";

import executeCpp from "../services/docker.cpp.service.js";
import executeJava from "../services/docker.java.service.js";
import executeJs from "../services/docker.js.service.js";
import executePy from "../services/docker.py.service.js";

const executors = {
  cpp: executeCpp,
  java: executeJava,
  js: executeJs,
  py: executePy,
};

const publishResult = (channel, result) => {
  channel.sendToQueue(
    CODE_SUBMISSION_RESULT_QUEUE_NAME,
    Buffer.from(JSON.stringify(result)),
    {
      persistent: true,
      contentType: "application/json",
      messageId: result.jobId,
    }
  );
};

export const startCodeSubmissionConsumer = async () => {
  const channel = await getChannel();

  if (!channel) {
    throw new Error("RabbitMQ channel is unavailable");
  }

  await channel.assertQueue(CODE_SUBMISSION_QUEUE_NAME, {
    durable: true,
  });

  

  channel.prefetch(1);

  console.log(
    `Waiting for submissions from ${CODE_SUBMISSION_QUEUE_NAME}...`
  );

  channel.consume(
    CODE_SUBMISSION_QUEUE_NAME,
    async (message) => {
      if (!message) return;

      let job;

      try {
        job = JSON.parse(message.content.toString());

        const {
          jobId,
          submissionId,
          studentId,
          problemId,
          language,
          code,
        } = job;

        if (
          !jobId ||
          !submissionId ||
          !studentId ||
          !problemId ||
          typeof code !== "string" ||
          !code.trim()
        ) {
          throw new Error("Invalid submission job");
        }

        const execute = executors[language?.toLowerCase()];

        if (!execute) {
          throw new Error(`Unsupported language: ${language}`);
        }

        console.log("\n========== EXECUTING SUBMISSION ==========");
        console.log("Job ID:", jobId);
        console.log("Submission ID:", submissionId);
        console.log("Language:", language);

        // The driver contains its own test inputs.
        const execution = await execute(code);

        const executionStatus = String(
          execution.status ?? ""
        ).toLowerCase();

        let verdict = "RUNTIME_ERROR";
        let totalTestCases = 0;
        let passedTestCases = 0;
        let failedTestCases = [];
        let errorMessage = execution.stderr ?? "";

        if (
          executionStatus === "timeout" ||
          executionStatus === "time_limit_exceeded"
        ) {
          verdict = "TIME_LIMIT_EXCEEDED";
        } else if (
          executionStatus === "memory_limit_exceeded"
        ) {
          verdict = "MEMORY_LIMIT_EXCEEDED";
        } else if (
          executionStatus === "compilation_error"
        ) {
          verdict = "COMPILATION_ERROR";
        } else if (
          executionStatus === "success" &&
          execution.exitCode === 0
        ) {
          try {
            const driverResult = JSON.parse(
              String(execution.stdout ?? "").trim()
            );

            totalTestCases = Number(driverResult.totalTestCases);
            passedTestCases = Number(driverResult.passedTestCases);

            failedTestCases = Array.isArray(
              driverResult.failedTestCases
            )
              ? driverResult.failedTestCases
              : [];

            if (
              !Number.isInteger(totalTestCases) ||
              !Number.isInteger(passedTestCases) ||
              totalTestCases < 1 ||
              passedTestCases < 0 ||
              passedTestCases > totalTestCases
            ) {
              throw new Error("Invalid test-case summary");
            }

            verdict =
              passedTestCases === totalTestCases
                ? "ACCEPTED"
                : "WRONG_ANSWER";

            errorMessage = "";
          } catch (error) {
            verdict = "RUNTIME_ERROR";
            errorMessage = `Invalid driver output: ${error.message}`;
          }
        }

        const result = {
          jobId,
          submissionId,
          studentId,
          problemId,
          language,

          status: executionStatus,
          verdict,

          totalTestCases,
          passedTestCases,
          failedTestCases,

          stdout: execution.stdout ?? "",
          stderr: execution.stderr ?? "",
          exitCode: execution.exitCode ?? -1,
          executionTime: execution.executionTime ?? null,
          memoryUsed: execution.memoryUsed ?? null,

          errorMessage,
          completedAt: new Date().toISOString(),
        };

        publishResult(channel, result);

        console.log("Verdict:", verdict);
        console.log(
          `Passed test cases: ${passedTestCases}/${totalTestCases}`
        );

        channel.ack(message);
      } catch (error) {
        console.error("Submission execution failed:", error.message);

        // Send a failure result when the job has enough identifiers.
        if (
          job?.jobId &&
          job?.submissionId &&
          job?.studentId &&
          job?.problemId
        ) {
          publishResult(channel, {
            jobId: job.jobId,
            submissionId: job.submissionId,
            studentId: job.studentId,
            problemId: job.problemId,
            language: job.language,

            status: "error",
            verdict: "RUNTIME_ERROR",

            totalTestCases: 0,
            passedTestCases: 0,
            failedTestCases: [],

            stdout: "",
            stderr: error.message,
            exitCode: -1,
            executionTime: null,
            memoryUsed: null,

            errorMessage: error.message,
            completedAt: new Date().toISOString(),
          });
        }

        channel.ack(message);
      }
    },
    { noAck: false }
  );
};