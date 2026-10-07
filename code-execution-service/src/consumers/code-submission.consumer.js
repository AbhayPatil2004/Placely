
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

const createFailureResult = (job, errorMessage) => ({
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
  stderr: errorMessage,
  exitCode: -1,
  executionTime: null,
  memoryUsed: null,

  errorMessage,
  completedAt: new Date().toISOString(),
});

const classifyExecution = (execution) => {
  const executionStatus = String(
    execution?.status ?? ""
  ).toLowerCase();

  let verdict = "RUNTIME_ERROR";
  let totalTestCases = 0;
  let passedTestCases = 0;
  let testCasesResult = [];

  let errorMessage = String(
    execution?.stderr ?? execution?.errorMessage ?? ""
  );

  console.log("========== CLASSIFY EXECUTION ==========");
  console.log("status:", execution?.status);
  console.log("status lowercase:", executionStatus);
  console.log("exitCode:", execution?.exitCode);
  console.log("stdout:", execution?.stdout);
  console.log(
    "stdout JSON.stringify:",
    JSON.stringify(execution?.stdout ?? "")
  );
  console.log("========================================");

  // 1. Time limit exceeded
  if (
    executionStatus === "timeout" ||
    executionStatus === "time_limit_exceeded"
  ) {
    verdict = "TIME_LIMIT_EXCEEDED";
    errorMessage ||= "Execution time limit exceeded";
  }

  // 2. Memory limit exceeded
  else if (
    executionStatus === "memory_limit_exceeded"
  ) {
    verdict = "MEMORY_LIMIT_EXCEEDED";
    errorMessage ||= "Memory limit exceeded";
  }

  // 3. Compilation error
  else if (
    executionStatus === "compile_error" ||
    executionStatus === "compilation_error"
  ) {
    verdict = "COMPILATION_ERROR";
    errorMessage ||= "Compilation failed";
  }

  // 4. Runtime error
  else if (
    executionStatus === "runtime_error" ||
    executionStatus === "error" ||
    (
      executionStatus === "success" &&
      execution.exitCode !== 0
    )
  ) {
    verdict = "RUNTIME_ERROR";
    errorMessage ||= "Program execution failed";
  }

  // 5. Successful execution
  else if (
    executionStatus === "success" &&
    execution.exitCode === 0
  ) {
    try {
      console.log("[CLASSIFY] Entered successful execution");

      const stdout = String(
        execution.stdout ?? ""
      ).trim();

      console.log("[CLASSIFY] stdout length:", stdout.length);
      console.log(
        "[CLASSIFY] stdout:",
        stdout
      );
      console.log(
        "[CLASSIFY] stdout JSON.stringify:",
        JSON.stringify(stdout)
      );

      if (!stdout) {
        throw new Error(
          "Driver produced empty output"
        );
      }

      console.log(
        "[CLASSIFY] Before JSON.parse"
      );

      const driverResult = JSON.parse(stdout);

      console.log(
        "[CLASSIFY] JSON.parse SUCCESS"
      );

      console.log(
        "[CLASSIFY] driverResult:",
        driverResult
      );

      // Extract summary
      totalTestCases = Number(
        driverResult.totalTestCases
      );

      passedTestCases = Number(
        driverResult.passedTestCases
      );

      testCasesResult = Array.isArray(
        driverResult.testCasesResult
      )
        ? driverResult.testCasesResult
        : [];

      console.log(
        "[CLASSIFY] totalTestCases:",
        totalTestCases
      );

      console.log(
        "[CLASSIFY] passedTestCases:",
        passedTestCases
      );

      console.log(
        "[CLASSIFY] testCasesResult length:",
        testCasesResult.length
      );

      // Validate test-case summary
      if (
        !Number.isInteger(totalTestCases) ||
        !Number.isInteger(passedTestCases) ||
        totalTestCases < 1 ||
        passedTestCases < 0 ||
        passedTestCases > totalTestCases
      ) {
        throw new Error(
          `Invalid test-case summary: total=${totalTestCases}, passed=${passedTestCases}`
        );
      }

      console.log(
        "[CLASSIFY] Summary validation passed"
      );

      // Validate test-case result count
      if (
        testCasesResult.length !== totalTestCases
      ) {
        throw new Error(
          `Invalid testCasesResult count: ${testCasesResult.length} !== ${totalTestCases}`
        );
      }

      console.log(
        "[CLASSIFY] Test case count validation passed"
      );

      // Driver explicitly reports runtime error
      if (driverResult.runtimeError) {
        console.log(
          "[CLASSIFY] Driver reported runtime error"
        );

        verdict = "RUNTIME_ERROR";

        errorMessage = String(
          driverResult.runtimeError
        );
      }

      // All test cases passed
      else if (
        passedTestCases === totalTestCases
      ) {
        console.log(
          "[CLASSIFY] All test cases passed"
        );

        verdict = "ACCEPTED";
        errorMessage = "";
      }

      // Some test cases failed
      else {
        console.log(
          "[CLASSIFY] Some test cases failed"
        );

        verdict = "WRONG_ANSWER";
        errorMessage = "";
      }

      console.log(
        "[CLASSIFY] Final verdict:",
        verdict
      );
    } catch (error) {
      console.error(
        "[CLASSIFY ERROR]",
        error
      );

      console.error(
        "[CLASSIFY ERROR MESSAGE]",
        error.message
      );

      verdict = "RUNTIME_ERROR";

      errorMessage =
        `Invalid driver output: ${error.message}`;
    }
  }

  // 6. Unexpected execution status
  else {
    verdict = "RUNTIME_ERROR";

    errorMessage ||=
      `Unexpected execution status: ${
        executionStatus || "unknown"
      }`;
  }

  const result = {
    status: executionStatus || "error",

    verdict,

    totalTestCases,

    passedTestCases,

    testCasesResult,

    stdout: execution?.stdout ?? "",

    stderr: execution?.stderr ?? "",

    exitCode: execution?.exitCode ?? -1,

    executionTime:
      execution?.executionTime ?? null,

    memoryUsed:
      execution?.memoryUsed ?? null,

    errorMessage,
  };

  console.log(
    "========== CLASSIFY RESULT =========="
  );
  console.log(
    "verdict:",
    result.verdict
  );
  console.log(
    "passed:",
    `${result.passedTestCases}/${result.totalTestCases}`
  );
  console.log(
    "errorMessage:",
    result.errorMessage
  );
  console.log(
    "=====================================" 
  );

  return result;
};

export const startCodeSubmissionConsumer = async () => {
  const channel = await getChannel();

  if (!channel) {
    throw new Error("RabbitMQ channel is unavailable");
  }

  await channel.assertQueue(CODE_SUBMISSION_QUEUE_NAME, {
    durable: true,
  });

  await channel.assertQueue(
    CODE_SUBMISSION_RESULT_QUEUE_NAME,
    { durable: true }
  );

  channel.prefetch(1);

  console.log(
    `Waiting for submissions from ${CODE_SUBMISSION_QUEUE_NAME}...`
  );

  await channel.consume(
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

        const normalizedLanguage = String(
          language ?? ""
        ).toLowerCase();

        const execute = executors[normalizedLanguage];

        if (!execute) {
          throw new Error(
            `Unsupported language: ${language}`
          );
        }

        console.log("\n========== EXECUTING SUBMISSION ==========");
        console.log("Job ID:", jobId);
        console.log("Student ID:", studentId);
        console.log("Submission ID:", submissionId);
        console.log("Language:", normalizedLanguage);

        // Test cases are included in the trusted driver.
        const execution = await execute(code);

        console.log("Execution :" , execution )
        const classified = classifyExecution(execution);

        const result = {
          jobId,
          submissionId,
          studentId,
          problemId,
          language: normalizedLanguage,
          ...classified,
          completedAt: new Date().toISOString(),
        };

        publishResult(channel, result);

        console.log("Verdict:", result.verdict);
        console.log(
          `Passed test cases: ${result.passedTestCases}/${result.totalTestCases}`
        );

        channel.ack(message);
      } catch (error) {
        console.error(
          "Submission execution failed:",
          error.message
        );

        if (
          job?.jobId &&
          job?.submissionId &&
          job?.studentId &&
          job?.problemId
        ) {
          try {
            publishResult(
              channel,
              createFailureResult(job, error.message)
            );
          } catch (publishError) {
            console.error(
              "Failed to publish submission failure:",
              publishError.message
            );
          }
        }

        channel.ack(message);
      }
    },
    { noAck: false }
  );
};

