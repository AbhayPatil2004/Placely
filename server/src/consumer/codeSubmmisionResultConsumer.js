import { getChannel } from "../config/rabbitmq.js";

import Submission from "../DSA/models/submission.model.js";
import { SendToStudent } from "../websocket/webManager.js";
import Solved from "../DSA/models/solved.model.js";
import Problem from "../DSA/models/problem.model.js";

const CODE_SUBMISSION_RESULT_QUEUE_NAME =
  "code-submission-result.queue";

const FINAL_STATUSES = [
  "ACCEPTED",
  "WRONG_ANSWER",
  "COMPILE_ERROR",
  "RUNTIME_ERROR",
  "TIME_LIMIT_EXCEEDED",
  "MEMORY_LIMIT_EXCEEDED",
  "SYSTEM_ERROR",
];

const ALLOWED_VERDICTS = [
  "ACCEPTED",
  "WRONG_ANSWER",
  "COMPILE_ERROR",
  "RUNTIME_ERROR",
  "TIME_LIMIT_EXCEEDED",
  "MEMORY_LIMIT_EXCEEDED",
];

const StartCodeSubmissionResultConsumer = async () => {
  const channel = await getChannel();

  if (!channel) {
    throw new Error("RabbitMQ channel is unavailable");
  }

  await channel.assertQueue(
    CODE_SUBMISSION_RESULT_QUEUE_NAME,
    {
      durable: true,
    }
  );

  channel.prefetch(1);

  console.log(
    `Waiting for results from ${CODE_SUBMISSION_RESULT_QUEUE_NAME}...`
  );

  channel.consume(
    CODE_SUBMISSION_RESULT_QUEUE_NAME,
    async (message) => {
      if (!message) return;

      let result;

      // Parse RabbitMQ message
      try {
        result = JSON.parse(
          message.content.toString()
        );
      } catch (error) {
        console.error(
          "Invalid result JSON:",
          error.message
        );

        channel.nack(message, false, false);
        return;
      }

      try {
        const {
          submissionId,
          studentId,
          verdict,
          totalTestCases,
          passedTestCases,
          testCasesResult,
          stdout,
          stderr,
          exitCode,
          executionTime,
          memoryUsed,
          errorMessage,
          completedAt,
        } = result;

        // Validate required identifiers
        if (!submissionId || !studentId) {
          console.error(
            "Result is missing submissionId or studentId"
          );

          channel.nack(message, false, false);
          return;
        }

        console.log(
          "Student Id before Saving Code:",
          studentId
        );

        // Find submission
        const submission = await Submission.findOne({
          _id: submissionId,
          studentId,
        });

        if (!submission) {
          console.error(
            "Matching submission not found:",
            submissionId
          );

          channel.ack(message);
          return;
        }

        // Ignore duplicate results
        if (
          FINAL_STATUSES.includes(
            submission.status
          )
        ) {
          console.log(
            "Submission already finalized:",
            submissionId
          );

          channel.ack(message);
          return;
        }

        // Validate verdict
        if (
          !ALLOWED_VERDICTS.includes(verdict)
        ) {
          throw new Error(
            `Invalid submission verdict: ${verdict}`
          );
        }

        const total = Number(
          totalTestCases
        );

        const passed = Number(
          passedTestCases
        );

        // Validate test-case counts
        if (
          !Number.isInteger(total) ||
          !Number.isInteger(passed) ||
          total < 0 ||
          passed < 0 ||
          passed > total
        ) {
          throw new Error(
            "Invalid test-case counts"
          );
        }

        // Validate testCasesResult
        const safeTestCasesResult =
          Array.isArray(testCasesResult)
            ? testCasesResult.map(
              (testCase) => ({
                testCase: String(
                  testCase?.testCase ?? ""
                ),

                expectedOutput: String(
                  testCase?.expectedOutput ?? ""
                ),

                actualOutput: String(
                  testCase?.actualOutput ?? ""
                ),

                logs: String(
                  testCase?.logs ?? ""
                ),

                status:
                  testCase?.status ===
                    "passed"
                    ? "passed"
                    : "wrong_answer",
              })
            )
            : [];

        // Validate result count
        if (
          safeTestCasesResult.length !==
          total
        ) {
          throw new Error(
            "Invalid testCasesResult count"
          );
        }

        // ACCEPTED must pass every test case
        if (
          verdict === "ACCEPTED" &&
          (total < 1 ||
            passed !== total)
        ) {
          throw new Error(
            "Inconsistent ACCEPTED result"
          );
        }

        const problem = await Submission.findById( submissionId );

        console.log("Submission found:", problem);

        if (!problem) {
          console.log("❌ Submission not found:", submissionId);
          return;
        }

        const { problemId } = problem;

        console.log("📌 Problem ID:", problemId);
        console.log("👤 Student ID:", studentId);
        console.log("🏆 Verdict:", verdict);
        console.log("🧪 Passed Test Cases:", passedTestCases);
        console.log("🧪 Total Test Cases:", totalTestCases);

        const solvedStatus = await Solved.findOne({
          studentId,
          problemId
        }).select("status");

        const currentStatus = solvedStatus?.status;

        console.log("📊 Existing Solved Status:", currentStatus);

        if (verdict === "ACCEPTED" && currentStatus !== "SOLVED") {

          console.log("✅ Marking problem as SOLVED");

          await Solved.findOneAndUpdate(
            {
              studentId,
              problemId
            },
            {
              status: "SOLVED"
            },
            {
              upsert: true,
              new: true
            }
          );

          console.log("✅ Solved status updated successfully");

        } else if (
          currentStatus !== "SOLVED" &&
          (
            passedTestCases > totalTestCases / 2 ||
            verdict === "TIME_LIMIT_EXCEEDED" ||
            verdict === "MEMORY_LIMIT_EXCEEDED"
          )
        ) {

          console.log("⚠️ Marking problem as ATTEMPTED");

          console.log(
            "Reason:",
            passedTestCases > totalTestCases / 2
              ? "More than 50% test cases passed"
              : verdict
          );

          await Solved.findOneAndUpdate(
            {
              studentId,
              problemId
            },
            {
              status: "ATTEMPTED"
            },
            {
              upsert: true,
              new: true
            }
          );

          console.log("⚠️ Attempted status updated successfully");

        } else {

          console.log("ℹ️ No status update required");
        }
        // Save result in MongoDB
        const updatedSubmission =
          await Submission.findOneAndUpdate(
            {
              _id: submissionId,
              studentId,
              status: {
                $nin: FINAL_STATUSES,
              },
            },
            {
              status: verdict,

              totalTestCases: total,

              passedTestCases: passed,

              testCasesResult:
                safeTestCasesResult,

              // Do not store raw driver stdout
              stdout: "",

              stderr: stderr ?? "",

              exitCode:
                exitCode ?? -1,

              executionTime:
                executionTime ?? 0,

              memoryUsed:
                memoryUsed ?? 0,

              errorMessage:
                errorMessage ?? "",

              completedAt:
                completedAt
                  ? new Date(completedAt)
                  : new Date(),
            },
            {
              new: true,
              runValidators: true,
            }
          );

        // Another consumer/result may have
        // finalized the submission first
        if (!updatedSubmission) {
          console.log(
            "Submission was already finalized:",
            submissionId
          );

          channel.ack(message);
          return;
        }

        console.log(
          "\n========== FINALIZATION DB DEBUG =========="
        );

        console.log(
          "Updated studentId:",
          updatedSubmission.studentId
        );

        console.log(
          "Total test cases:",
          updatedSubmission.totalTestCases
        );

        console.log(
          "Passed test cases:",
          updatedSubmission.passedTestCases
        );

        console.log(
          "Test cases result:",
          updatedSubmission.testCasesResult
        );

        console.log(
          "=========================================="
        );

        // Send result to student
        const websocketResult = {
          type: "CODE_SUBMISSION_RESULT",

          submissionId:
            updatedSubmission._id.toString(),

          problemId:
            updatedSubmission.problemId.toString(),

          language:
            updatedSubmission.language,

          status:
            updatedSubmission.status,

          totalTestCases:
            updatedSubmission.totalTestCases,

          passedTestCases:
            updatedSubmission.passedTestCases,

          testCasesResult:
            updatedSubmission.testCasesResult,

          stderr:
            updatedSubmission.stderr,

          exitCode:
            updatedSubmission.exitCode,

          executionTime:
            updatedSubmission.executionTime,

          memoryUsed:
            updatedSubmission.memoryUsed,

          errorMessage:
            updatedSubmission.errorMessage,

          completedAt:
            updatedSubmission.completedAt,
        };

        SendToStudent(
          studentId,
          websocketResult
        );

        console.log(
          "\n========== SUBMISSION FINALIZED =========="
        );

        console.log(
          "Submission ID:",
          submissionId
        );

        console.log(
          "Student ID:",
          studentId
        );

        console.log(
          "Verdict:",
          updatedSubmission.status
        );

        console.log(
          `Passed: ${updatedSubmission.passedTestCases}/${updatedSubmission.totalTestCases}`
        );

        channel.ack(message);
      } catch (error) {
        console.error(
          "Failed to process submission result:",
          error.message
        );

        channel.nack(
          message,
          false,
          false
        );
      }
    },
    {
      noAck: false,
    }
  );
};

export default StartCodeSubmissionResultConsumer;