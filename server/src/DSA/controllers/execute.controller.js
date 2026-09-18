import ApiResponse from "../../utils/apiResponse.js";
import ApiError from "../../utils/apiError.js";
import crypto from "crypto";
import { getChannel } from "../../config/rabbitmq.js";

const CODE_EXECUTION_QUEUE_NAME = "code-execution.queue";


const ExecuteCode = async (req, res) => {

    try {

        const { code, input, language } = req.body;

        // Validate code
        if (!code) {
            return res.status(400).json(
                new ApiError(400, "Code is required", {})
            );
        }

        // Validate language
        if (!["cpp", "java", "js", "py"].includes(language)) {
            return res.status(400).json(
                new ApiError(400, "Please choose correct language", {})
            );
        }

        const channel = getChannel();

        const job = {
            jobId: crypto.randomUUID(),
            code,
            language,
            input
        };

        channel.sendToQueue(
            CODE_EXECUTION_QUEUE_NAME,
            Buffer.from(JSON.stringify(job)),
            {
                persistent: true,
                contentType: "application/json"
            }
        );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Code execution request has been sent successfully",
                {
                    jobId: job.jobId
                }
            )
        );

    } catch (error) {

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                error
            )
        );
    }
};



export {
    ExecuteCode
}