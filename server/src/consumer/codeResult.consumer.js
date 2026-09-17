import { getChannel } from "../config/rabbitmq.js";

const CODE_RESULT_QUEUE_NAME = "code-result.queue";

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