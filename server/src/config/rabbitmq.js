import amqp from "amqplib";

let connection;
let channel;

const QUEUE_NAME = "email.queue";
const CODE_RESULT_EXCHANGE_NAME = "code-result.exchange";
const CODE_RESULT_QUEUE_NAME = "code-result.queue";

export const connectRabbitMQ = async () => {
    try {
        connection = await amqp.connect(
            process.env.RABBITMQ_URL
        );

        channel = await connection.createChannel();

        await channel.assertQueue(QUEUE_NAME, {
            durable: true
        });

        console.log("RabbitMQ connected successfully");

        return channel;

    } catch (error) {
        console.error(
            "RabbitMQ connection failed:",
            error.message
        );

        throw error;
    }
};

export const getChannel = () => {
    if (!channel) {
        throw new Error(
            "RabbitMQ channel is not initialized"
        );
    }

    return channel;
};

export { QUEUE_NAME, CODE_RESULT_EXCHANGE_NAME, CODE_RESULT_QUEUE_NAME };