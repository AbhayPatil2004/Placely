import {
    getChannel,
    CODE_RESULT_EXCHANGE_NAME,
    CODE_RESULT_QUEUE_NAME
} from "../config/rabbitmq.js";
import { SendToStudent } from "../websocket/webManager.js";


const StartCodeResultConsumer = async () => {

    try {

        const channel = getChannel();
        await channel.assertExchange(CODE_RESULT_EXCHANGE_NAME, "fanout", {
            durable: true
        });
        await channel.assertQueue(CODE_RESULT_QUEUE_NAME, {
            durable: true
        });
        const { queue } = await channel.assertQueue("", {
            exclusive: true,
            autoDelete: true
        });
        await channel.bindQueue(queue, CODE_RESULT_EXCHANGE_NAME, "");

        console.log(
            `Waiting for results from ${CODE_RESULT_EXCHANGE_NAME} and legacy ${CODE_RESULT_QUEUE_NAME}...`
        );

        channel.consume(
            queue,

            (message) => {

                if (!message) {
                    return;
                }

                let job;

                try {
                    job = JSON.parse(
                        message.content.toString()
                    );
                } catch (error) {
                    console.error(
                        "Failed to parse code execution result:",
                        error.message
                    );
                    channel.ack(message);
                    return;
                }

                try {
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


                    if (!job?.studentId || !job?.jobId) {
                        console.error("Received invalid code execution result");
                        channel.ack(message);
                        return;
                    }

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

                    if (sent) {
                        console.log("WebSocket result sent:", true);
                    }

                    channel.ack(message);

                } catch (error) {

                    console.error(
                        "Failed to process code execution result:",
                        error.message
                    );

                    channel.nack(message, false, true);
                }
            },

            {
                noAck: false
            }
        );

        channel.consume(
            CODE_RESULT_QUEUE_NAME,
            (message) => {
                if (!message) {
                    return;
                }

                let job;

                try {
                    job = JSON.parse(message.content.toString());

                    if (!job?.studentId || !job?.jobId) {
                        console.error("Received invalid legacy code execution result");
                        channel.ack(message);
                        return;
                    }
                } catch (error) {
                    console.error(
                        "Failed to parse legacy code execution result:",
                        error.message
                    );
                    channel.ack(message);
                    return;
                }

                try {
                    channel.publish(
                        CODE_RESULT_EXCHANGE_NAME,
                        "",
                        message.content,
                        {
                            persistent: true,
                            contentType: "application/json"
                        }
                    );
                    channel.ack(message);
                } catch (error) {
                    console.error(
                        "Failed to rebroadcast legacy code execution result:",
                        error.message
                    );
                    channel.nack(message, false, true);
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