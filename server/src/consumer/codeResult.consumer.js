
import {
    getChannel,
    CODE_RESULT_QUEUE_NAME,
} from "../config/rabbitmq.js";

import { SendToStudent } from "../websocket/webManager.js";

const StartCodeResultConsumer = async () => {
    try {
        const channel = getChannel();

        console.log(`Waiting for results from ${CODE_RESULT_QUEUE_NAME}...`);

        channel.consume(
            CODE_RESULT_QUEUE_NAME,
            (message) => {
                if (!message) return;

                let job;

                try {
                    job = JSON.parse(message.content.toString());
                } catch (error) {
                    console.error("Failed to parse execution result:", error.message);
                    channel.ack(message);
                    return;
                }

                if (!job?.studentId || !job?.jobId) {
                    console.error("Received invalid code execution result");
                    channel.ack(message);
                    return;
                }

                try {
                    console.log("\n========== CODE EXECUTION RESULT ==========");
                    console.log("Job ID:", job.jobId);
                    console.log("Student ID:", job.studentId);
                    console.log("Status:", job.status);
                    console.log("Language:", job.language);
                    console.log("Result:", job.result);
                    console.log("===========================================\n");

                    const sent = SendToStudent(job.studentId, {
                        type: "CODE_EXECUTION_RESULT",
                        jobId: job.jobId,
                        status: job.status,
                        language: job.language,
                        result: job.result,
                        error: job.error ?? null,
                    });

                    if (!sent) {
                        console.warn(
                            "Student WebSocket is unavailable:",
                            job.studentId
                        );
                    }

                    channel.ack(message);
                } catch (error) {
                    console.error(
                        "Failed to process execution result:",
                        error.message
                    );

                    // Avoid repeatedly requeuing the same failed message.
                    channel.nack(message, false, false);
                }
            },
            { noAck: false }
        );
    } catch (error) {
        console.error("Failed to start code result consumer:", error.message);
        throw error;
    }
};

export default StartCodeResultConsumer;