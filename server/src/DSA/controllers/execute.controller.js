
import ApiResponse from "../../utils/apiResponse.js";
import ApiError from "../../utils/apiError.js";
import crypto from "crypto";
import { GetStudentId } from "../../utils/studentDetails.js";
import { getChannel } from "../../config/rabbitmq.js";
// import { CODE_EXECUTION_QUEUE_NAME } from "../../../../code-execution-service/src/config/rabbitmq.js";

const CODE_EXECUTION_QUEUE_NAME = "code-execution.queue";

const ExecuteCode = async (req, res) => {
    try {
        const { code, input, language } = req.body;

        if (typeof code !== "string" || !code.trim()) {
            return res.status(400).json(
                new ApiError(400, "Code is required", {})
            );
        }

        if (!["cpp", "java", "js", "py"].includes(language)) {
            return res.status(400).json(
                new ApiError(400, "Please choose a correct language", {})
            );
        }

        const channel = getChannel();
        const studentId = GetStudentId(req);

        const job = {
            jobId: crypto.randomUUID(),
            studentId,
            code,
            language,
            input: input ?? "",
        };

        channel.sendToQueue(
            CODE_EXECUTION_QUEUE_NAME,
            Buffer.from(JSON.stringify(job)),
            {
                persistent: true,
                contentType: "application/json",
                messageId: job.jobId,
            }
        );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Code execution request has been sent successfully",
                { jobId: job.jobId }
            )
        );
    } catch (error) {
        console.error("ExecuteCode error:", error.message);

        return res.status(500).json(
            new ApiError(500, "Internal Server Error", {})
        );
    }
};

export { ExecuteCode };