import { getChannel } from "../config/rabbitmq.js";

import {
    SendToStudent
} from "../websocket/webManager.js";

const CODE_RESULT_QUEUE_NAME =
    "code-result.queue";


const StartCodeResultConsumer = async () => {

    try {

        const channel = getChannel();

        console.log(
            `Waiting for results from ${CODE_RESULT_QUEUE_NAME}...`
        );

        channel.consume(
            CODE_RESULT_QUEUE_NAME,

            async (message) => {

                if (!message) {
                    return;
                }

                try {

                    const job = JSON.parse(
                        message.content.toString()
                    );

                    console.log(
                        "\n========== CODE EXECUTION RESULT =========="
                    );

                    console.log(
                        "Job ID:",
                        job.jobId
                    );

                    console.log(
                        "Student Id:",
                        job.studentId
                    );

                    console.log(
                        "Status:",
                        job.status
                    );

                    console.log(
                        "Language:",
                        job.language
                    );

                    console.log(
                        "Result:",
                        job.result
                    );

                    console.log(
                        "==========================================\n"
                    );


                    // Send result to student's WebSocket

                    const sent = SendToStudent(
                        job.studentId,
                        {
                            type: "CODE_EXECUTION_RESULT",

                            jobId: job.jobId,

                            status: job.status,

                            language: job.language,

                            result: job.result
                        }
                    );


                    console.log(
                        "WebSocket result sent:",
                        sent
                    );


                    channel.ack(message);

                } catch (error) {

                    console.error(
                        "Failed to process result:",
                        error.message
                    );

                    channel.ack(message);
                }
            },

            {
                noAck: false
            }
        );

    } catch (error) {

        console.error(
            "Failed to start code result consumer:",
            error.message
        );

        throw error;
    }
};


export default StartCodeResultConsumer;