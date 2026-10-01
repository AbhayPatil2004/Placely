
import { randomUUID } from "node:crypto";

import Submission from "../models/submission.model.js";
import Problem from "../models/problem.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import ApiError from "../../utils/apiError.js";
import { GetStudentId } from "../../utils/studentDetails.js";
import { getChannel } from "../../config/rabbitmq.js";

const CODE_SUBMISSION_QUEUE_NAME =
    process.env.CODE_SUBMISSION_QUEUE_NAME || "code-submission.queue";

const SubmitCode = async (req, res) => {
    let submission;

    try {
        const studentId = GetStudentId(req);
        const { problemId, code, language } = req.body;

        // Validate required fields
        if (!studentId || !problemId || !code || !language) {
            return res.status(400).json(
                new ApiError(400, "Required fields are missing", {})
            );
        }

        // Validate language
        if (!["cpp", "java", "js", "py"].includes(language)) {
            return res.status(400).json(
                new ApiError(400, "Please choose a valid language", {})
            );
        }

        // Fetch problem
        const problem = await Problem.findById(problemId);

        if (!problem) {
            return res.status(404).json(
                new ApiError(404, "Problem not found", {})
            );
        }

        // Validate test cases
        if (
            !Array.isArray(problem.testCases) ||
            problem.testCases.length === 0
        ) {
            return res.status(400).json(
                new ApiError(400, "Problem has no test cases", {})
            );
        }

        // Generate unique identifiers
        const jobId = randomUUID();

        // Create submission record first
        submission = await Submission.create({
            studentId,
            problemId,
            language,
            code,
            status: "QUEUED",
            totalTestCases: problem.testCases.length,
            passedTestCases: 0,
        });

        // Build execution job
        const job = {
            jobId,
            submissionId: submission._id.toString(),
            studentId: studentId.toString(),
            problemId: problem._id.toString(),
            code,
            language,
            testCases: problem.testCases,
        };

        // Get RabbitMQ channel
        const channel = await getChannel();

        if (!channel) {
            throw new Error("RabbitMQ channel is unavailable");
        }

        // Publish job to execution queue
        const published = channel.sendToQueue(
            CODE_SUBMISSION_QUEUE_NAME,
            Buffer.from(JSON.stringify(job)),
            {
                persistent: true,
                contentType: "application/json",
                messageId: jobId,
            }
        );

        if (!published) {
            throw new Error("RabbitMQ write buffer is full");
        }

        return res.status(202).json(
            new ApiResponse(
                202,
                "Submission queued successfully",
                {
                    submissionId: submission._id,
                    jobId,
                    status: "QUEUED",
                }
            )
        );
    } catch (error) {
        console.error("SubmitCode Error:", error);

        // Mark a created submission as failed if publishing fails.
        if (submission) {
            try {
                await Submission.findByIdAndUpdate(submission._id, {
                    status: "SYSTEM_ERROR",
                    errorMessage: "Failed to queue code execution",
                    completedAt: new Date(),
                });
            } catch (updateError) {
                console.error(
                    "Failed to update submission:",
                    updateError.message
                );
            }
        }

        return res.status(500).json(
            new ApiError(500, "Failed to submit code", {})
        );
    }
};

export default SubmitCode;