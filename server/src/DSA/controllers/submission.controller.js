import { randomUUID } from "node:crypto";

import Submission from "../models/submission.model.js";
import Problem from "../models/problem.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import ApiError from "../../utils/apiError.js";
import { GetStudentId } from "../../utils/studentDetails.js";
import { getChannel } from "../../config/rabbitmq.js";

import {
    cppBoilerCode,
    javaBoilerCode,
    javascriptBoilerCode,
    pythonBoilerCode
} from "../utils/boilerCodes.js";

const CODE_SUBMISSION_QUEUE_NAME =
    process.env.CODE_SUBMISSION_QUEUE_NAME ||
    "code-submission.queue";

// API language -> language key used in the Problem model
const languageMap = {
    cpp: "cpp",
    java: "java",
    js: "javascript",
    py: "python"
};

// Boilerplate mapping
const boilerplateMap = {
    cpp: cppBoilerCode,
    java: javaBoilerCode,
    js: javascriptBoilerCode,
    py: pythonBoilerCode
};

const SubmitCode = async (req, res) => {
    let submission;

    try {
        console.log("\n========== CODE SUBMISSION START ==========");

        const studentId = GetStudentId(req);
        const { problemId, studentCode, language } = req.body;

        console.log("Student ID:", studentId);
        console.log("Problem ID:", problemId);
        console.log("Language:", language);
        console.log("Student Id", studentId)

        // Validate required fields
        if (
            !studentId ||
            !problemId ||
            typeof studentCode !== "string" ||
            !studentCode.trim() ||
            !language
        ) {
            console.log("Validation failed: Required fields missing");

            return res.status(400).json(
                new ApiError(
                    400,
                    "Required fields are missing",
                    {}
                )
            );
        }

        // Validate language
        if (!Object.hasOwn(boilerplateMap, language)) {
            console.log("Validation failed: Unsupported language");

            return res.status(400).json(
                new ApiError(
                    400,
                    "Please choose a valid language",
                    {}
                )
            );
        }

        console.log("Request validation successful");

        // Fetch active problem and explicitly include trusted driver code
        const problem = await Problem.findOne({
            _id: problemId,
            isActive: true
        }).select("+driverCode");

        if (!problem) {
            console.log("Problem not found or inactive");

            return res.status(404).json(
                new ApiError(404, "Problem not found", {})
            );
        }

        console.log("Problem fetched:", problem.slug);

        // Check whether this language is supported by the problem
        const modelLanguage = languageMap[language];

        if (
            !problem.supportedLanguages?.includes(modelLanguage)
        ) {
            console.log("Language not supported for this problem");

            return res.status(400).json(
                new ApiError(
                    400,
                    "This language is not supported for this problem",
                    {}
                )
            );
        }

        // Validate trusted driver code
        const driverCode = problem.driverCode?.[modelLanguage];

        if (
            typeof driverCode !== "string" ||
            !driverCode.trim()
        ) {
            console.error("Driver code missing for:", modelLanguage);

            return res.status(500).json(
                new ApiError(
                    500,
                    "Problem execution configuration is incomplete",
                    {}
                )
            );
        }

        // Validate test cases
        if (
            !Array.isArray(problem.testCases) ||
            problem.testCases.length === 0
        ) {
            console.error("No test cases configured for:", problem.slug);

            return res.status(500).json(
                new ApiError(
                    500,
                    "Problem has no configured test cases",
                    {}
                )
            );
        }

        console.log("Total test cases:", problem.testCases.length);

        // Combine boilerplate + student solution + trusted driver
        const boilerplate = boilerplateMap[language];

        const code = [
            boilerplate,
            studentCode,
            driverCode
        ].join("\n");

        const existingSubmission = await Submission.findOne({
            studentId,
            problemId: problem._id,
            code: studentCode
        });

        if (existingSubmission) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Please modify the code before submitting it again",
                    {}
                )
            );
        }


        console.log("Execution code generated successfully");

        // Generate unique job ID
        const jobId = randomUUID();

        console.log("Job ID:", jobId);

        // Create submission record
        submission = await Submission.create({
            studentId,
            problemId: problem._id,
            language,
            code: studentCode,
            status: "QUEUED",
            totalTestCases: problem.testCases.length,
            passedTestCases: 0
        });

        console.log("========== SUBMISSION DB DEBUG ==========");
        console.log("Input studentId:", studentId);
        console.log("Input studentId type:", typeof studentId);
        console.log("Mongoose saved studentId:", submission.studentId);
        console.log("Mongoose saved document:", submission.toObject());

        const rawSubmission = await Submission.collection.findOne({
            _id: submission._id,
        });

        console.log("Raw MongoDB studentId:", rawSubmission?.studentId);
        console.log("Raw MongoDB document:", rawSubmission);
        console.log("==========================================");

        console.log("Submission created:", submission._id.toString());

        // Build execution job
        const job = {
            jobId,
            submissionId: submission._id.toString(),
            studentId: studentId.toString(),
            problemId: problem._id.toString(),
            code,
            language,
            testCases: problem.testCases.map((testCase) => ({
                input: testCase.input,
                expectedOutput: testCase.expectedOutput
            }))
        };

        // Get RabbitMQ channel
        const channel = await getChannel();

        if (!channel) {
            throw new Error("RabbitMQ channel is unavailable");
        }

        console.log("RabbitMQ channel obtained");

        // Publish execution job
        const published = channel.sendToQueue(
            CODE_SUBMISSION_QUEUE_NAME,
            Buffer.from(JSON.stringify(job)),
            {
                persistent: true,
                contentType: "application/json",
                messageId: jobId
            }
        );

        if (!published) {
            throw new Error("RabbitMQ write buffer is full");
        }

        console.log("Job published to queue:", CODE_SUBMISSION_QUEUE_NAME);
        console.log("Submission status: QUEUED");
        console.log("========== CODE SUBMISSION END ==========\n");

        return res.status(202).json(
            new ApiResponse(
                202,
                "Submission queued successfully",
                {
                    submissionId: submission._id,
                    jobId,
                    status: "QUEUED"
                }
            )
        );

    } catch (error) {
        console.error("========== SUBMISSION ERROR ==========");
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);

        // Mark submission as failed if it was already created
        if (submission) {
            try {
                await Submission.findByIdAndUpdate(
                    submission._id,
                    {
                        status: "SYSTEM_ERROR",
                        errorMessage: "Failed to queue code execution",
                        completedAt: new Date()
                    }
                );

                console.log(
                    "Submission marked as SYSTEM_ERROR:",
                    submission._id.toString()
                );
            } catch (updateError) {
                console.error(
                    "Failed to update submission:",
                    updateError.message
                );
            }
        }

        console.error("======================================");

        return res.status(500).json(
            new ApiError(
                500,
                "Failed to submit code",
                {}
            )
        );
    }
};


const GetStudentProblemSubmissions = async (req, res) => {
    try {

        const studentId = GetStudentId(req);
        const { problemId } = req.params;

        console.log("studentId:", studentId);
        console.log("problemId:", problemId);

        const submissions = await Submission.find({
            studentId,
            problemId
        });

        return res.status(200).json(
            new ApiResponse(
                200,
                "Submissions fetched successfully",
                {
                    total: submissions.length,
                    submissions,
                }
            )
        );

    } catch (error) {

        console.error("GetStudentProblemSubmissions Error:", error);

        return res.status(500).json(
            new ApiError(
                500,
                error.message,
                {}
            )
        );
    }
};

const GetAllSubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find()
            .sort({ createdAt: -1 })
            .populate("studentId", "name email")
            .populate("problemId", "title titleSlug")
            .lean();

        console.log("\n========== ALL SUBMISSIONS ==========");
        console.log("Total submissions:", submissions.length);

        submissions.forEach((submission, index) => {
            console.log(`\nSubmission ${index + 1}`);
            console.log("Submission ID:", submission._id);
            console.log("Student ID:", submission.studentId?._id);
            console.log("Problem:", submission.problemId?.titleSlug);
            console.log("Language:", submission.language);
            console.log("Status:", submission.status);
            console.log(
                "Passed Test Cases:",
                `${submission.passedTestCases}/${submission.totalTestCases}`
            );
            console.log("Execution Time:", submission.executionTime);
            console.log("Memory Used:", submission.memoryUsed);
            console.log("Exit Code:", submission.exitCode);
            console.log("Error:", submission.errorMessage);
            console.log("Created At:", submission.createdAt);
            console.log("Completed At:", submission.completedAt);
        });

        return res.status(200).json(
            new ApiResponse(
                200,
                "Submissions fetched successfully",
                {
                    total: submissions.length,
                    submissions,
                }
            )
        );
    } catch (error) {
        console.error("GetAllSubmissions error:", error.message);

        return res.status(500).json(
            new ApiError(
                500,
                "Failed to fetch submissions",
                {}
            )
        );
    }
};

const DeleteAllSubmissions = async (req, res) => {
    try {
        const result = await Submission.deleteMany({});

        console.log("\n========== DELETE ALL SUBMISSIONS ==========");
        console.log("Total submissions deleted:", result.deletedCount);

        return res.status(200).json(
            new ApiResponse(
                200,
                "All submissions deleted successfully",
                {
                    deletedCount: result.deletedCount,
                }
            )
        );
    } catch (error) {
        console.error("DeleteAllSubmissions error:", error.message);

        return res.status(500).json(
            new ApiError(
                500,
                "Failed to delete submissions",
                {}
            )
        );
    }
};



export {
    SubmitCode,
    GetAllSubmissions,
    DeleteAllSubmissions,
    GetStudentProblemSubmissions
}