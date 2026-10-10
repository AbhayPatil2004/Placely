
import { randomUUID } from "node:crypto";

import Problem from "../models/problem.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import { GetStudentId } from "../../utils/studentDetails.js";

import {
    CODE_RUN_QUEUE_NAME,
    getChannel
} from "../../config/rabbitmq.js";

import {
    cppBoilerCode,
    javaBoilerCode,
    javascriptBoilerCode,
    pythonBoilerCode
} from "../utils/boilerCodes.js";

const SUPPORTED_LANGUAGES = {
    cpp: {
        boilerplate: cppBoilerCode,
        driverKey: "cpp"
    },
    java: {
        boilerplate: javaBoilerCode,
        driverKey: "java"
    },
    javascript: {
        boilerplate: javascriptBoilerCode,
        driverKey: "javascript"
    },
    python: {
        boilerplate: pythonBoilerCode,
        driverKey: "python"
    },
    js: {
        boilerplate: javascriptBoilerCode,
        driverKey: "javascript"
    },
    py: {
        boilerplate: pythonBoilerCode,
        driverKey: "python"
    }
};

const RunCode = async (req, res) => {
    try {
        // 1. Validate student authentication
        const studentId = GetStudentId(req);

        if (!studentId) {
            return res.status(401).json(
                new ApiError(
                    401,
                    "Authentication required to execute code.",
                    {}
                )
            );
        }

        // 2. Validate request body
        const { studentCode, language, problemId } = req.body ?? {};

        if (
            typeof studentCode !== "string" ||
            !studentCode.trim() ||
            typeof problemId !== "string" ||
            !problemId.trim() ||
            typeof language !== "string" ||
            !language.trim()
        ) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "studentCode, problemId, and language are required.",
                    {}
                )
            );
        }

        // 3. Validate language
        const languageConfig = SUPPORTED_LANGUAGES[language];

        if (!languageConfig) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Unsupported language. Use cpp, java, javascript, or python.",
                    {}
                )
            );
        }

        // 4. Fetch problem
        const problem = await Problem.findById(problemId).select("+driverCode");

        if (!problem) {
            return res.status(404).json(
                new ApiError(
                    404,
                    "Problem not found.",
                    {}
                )
            );
        }

        // 5. Validate driver code
        const driverCode = problem.driverCode?.[languageConfig.driverKey];

        if (typeof driverCode !== "string" || !driverCode.trim()) {
            console.error(
                `Driver code is missing for problem ${problemId}, language ${language}.`
            );

            return res.status(500).json(
                new ApiError(
                    500,
                    "Code execution is not configured for this language.",
                    {}
                )
            );
        }

        // 6. Generate complete execution code
        const code = [
            languageConfig.boilerplate,
            studentCode,
            driverCode
        ]
            .filter((part) => typeof part === "string" && part.length > 0)
            .join("\n");

        // 7. Create execution job
        const jobId = randomUUID();

        const job = {
            jobId,
            code,
            studentId: studentId.toString(),
            problemId: problem._id.toString(),
            language
        };

        // 8. Publish job to RabbitMQ
        const channel = getChannel();

        if (!channel) {
            console.error("RabbitMQ channel is unavailable.");

            return res.status(503).json(
                new ApiError(
                    503,
                    "Code execution service is temporarily unavailable. Please try again.",
                    {}
                )
            );
        }

        const published = channel.sendToQueue(
            CODE_RUN_QUEUE_NAME,
            Buffer.from(JSON.stringify(job)),
            {
                persistent: true,
                contentType: "application/json",
                messageId: jobId
            }
        );

        if (!published) {
            console.error(`RabbitMQ write buffer is full for job ${jobId}.`);

            return res.status(503).json(
                new ApiError(
                    503,
                    "Code execution queue is busy. Please try again.",
                    {}
                )
            );
        }

        console.log("========== CODE EXECUTION QUEUED ==========");
        console.log("Job ID:", jobId);
        console.log("Problem ID:", problem._id.toString());
        console.log("Student ID:", studentId.toString());
        console.log("Language:", language);
        console.log("Queue:", CODE_RUN_QUEUE_NAME);
        console.log("============================================");

        // 9. Return queued response
        return res.status(202).json(
            new ApiResponse(
                202,
                "Code execution has been queued successfully.",
                {
                    jobId,
                    problemId: problem._id.toString(),
                    language,
                    status: "QUEUED"
                }
            )
        );
    } catch (error) {
        console.error("RunCode controller error:", error);

        return res.status(500).json(
            new ApiError(
                500,
                "An unexpected error occurred while queuing code execution.",
                {}
            )
        );
    }
};

export {
    RunCode
}