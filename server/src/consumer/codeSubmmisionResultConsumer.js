
import { getChannel } from "../config/rabbitmq.js";

import Submission from "../DSA/models/submission.model.js";
import { SendToStudent } from "../websocket/webManager.js";

const CODE_SUBMISSION_RESULT_QUEUE_NAME =
  "code-submission-result.queue";

const FINAL_STATUSES = [
  "ACCEPTED",
  "WRONG_ANSWER",
  "COMPILATION_ERROR",
  "RUNTIME_ERROR",
  "TIME_LIMIT_EXCEEDED",
  "MEMORY_LIMIT_EXCEEDED",
  "SYSTEM_ERROR",
];

const ALLOWED_VERDICTS = [
  "ACCEPTED",
  "WRONG_ANSWER",
  "COMPILATION_ERROR",
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
    { durable: true }
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

      // Parse the RabbitMQ message.
      try {
        result = JSON.parse(message.content.toString());
      } catch (error) {
        console.error("Invalid result JSON:", error.message);
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
          failedTestCases,
          stderr,
          exitCode,
          executionTime,
          memoryUsed,
          errorMessage,
          completedAt,
        } = result;

        // Validate required identifiers.
        if (!submissionId || !studentId) {
          console.error(
            "Result is missing submissionId or studentId"
          );

          channel.nack(message, false, false);
          return;
        }

        // Find the submission without using jobId.
        const submission = await Submission.findOne({
          _id: submissionId,
          studentId,
        });

        if (!submission) {
          console.error(
            "Matching submission not found:",
            submissionId
          );

          // Acknowledge to avoid repeatedly processing this message.
          channel.ack(message);
          return;
        }

        // Ignore duplicate results for finalized submissions.
        if (FINAL_STATUSES.includes(submission.status)) {
          console.log(
            "Submission already finalized:",
            submissionId
          );

          channel.ack(message);
          return;
        }

        // Validate the execution verdict.
        if (!ALLOWED_VERDICTS.includes(verdict)) {
          throw new Error("Invalid submission verdict");
        }

        const total = Number(totalTestCases);
        const passed = Number(passedTestCases);

        if (
          !Number.isInteger(total) ||
          !Number.isInteger(passed) ||
          total < 0 ||
          passed < 0 ||
          passed > total
        ) {
          throw new Error("Invalid test-case counts");
        }

        if (
          verdict === "ACCEPTED" &&
          (total < 1 || passed !== total)
        ) {
          throw new Error("Inconsistent ACCEPTED result");
        }

        // Only expose failed-test details explicitly marked public.
        const safeFailedTestCases = Array.isArray(failedTestCases)
          ? failedTestCases
              .filter(
                (testCase) => testCase?.isPublic === true
              )
              .map((testCase) => ({
                testCase: testCase.testCase,
                expectedOutput: String(
                  testCase.expectedOutput ?? ""
                ),
                actualOutput: String(
                  testCase.actualOutput ?? ""
                ),
              }))
          : [];

        // Save the result in MongoDB.
        const updatedSubmission =
          await Submission.findOneAndUpdate(
            {
              _id: submissionId,
              studentId,
              status: { $nin: FINAL_STATUSES },
            },
            {
              status: verdict,
              totalTestCases: total,
              passedTestCases: passed,
              failedTestCases: safeFailedTestCases,

              // Never save raw driver stdout: it may contain
              // hidden test-case information.
              stdout: "",
              stderr: stderr ?? "",
              exitCode: exitCode ?? -1,
              executionTime: executionTime ?? null,
              memoryUsed: memoryUsed ?? null,
              errorMessage: errorMessage ?? "",
              completedAt: completedAt
                ? new Date(completedAt)
                : new Date(),
            },
            {
              new: true,
              runValidators: true,
            }
          );

        // Another result may have finalized the submission first.
        if (!updatedSubmission) {
          console.log(
            "Submission was already finalized:",
            submissionId
          );

          channel.ack(message);
          return;
        }

        // Send the sanitized result to the student over WebSocket.
        const websocketResult = {
          type: "CODE_SUBMISSION_RESULT",
          submissionId: updatedSubmission._id.toString(),
          problemId: updatedSubmission.problemId.toString(),
          language: updatedSubmission.language,
          status: updatedSubmission.status,
          totalTestCases: updatedSubmission.totalTestCases,
          passedTestCases: updatedSubmission.passedTestCases,
          failedTestCases: safeFailedTestCases,
          stderr: updatedSubmission.stderr,
          exitCode: updatedSubmission.exitCode,
          executionTime: updatedSubmission.executionTime,
          memoryUsed: updatedSubmission.memoryUsed,
          errorMessage: updatedSubmission.errorMessage,
          completedAt: updatedSubmission.completedAt,
        };

        SendToStudent(studentId, websocketResult);

        console.log(
          "\n========== SUBMISSION FINALIZED =========="
        );
        console.log("Submission ID:", submissionId);
        console.log("Student ID:", studentId);
        console.log("Verdict:", updatedSubmission.status);

        console.log(
          `Passed: ${updatedSubmission.passedTestCases}/${updatedSubmission.totalTestCases}`
        );

        // Acknowledge after processing the result.
        channel.ack(message);
      } catch (error) {
        console.error(
          "Failed to process submission result:",
          error.message
        );

        // Configure a dead-letter queue for rejected messages.
        channel.nack(message, false, false);
      }
    },
    { noAck: false }
  );
};

export default StartCodeSubmissionResultConsumer;
