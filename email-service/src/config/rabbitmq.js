import amqp from "amqplib";
import dotenv from "dotenv";

dotenv.config();

let connection;
let channel;

export const QUEUE_NAME = "email.queue";

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
        console.log(`Email queue ready: ${QUEUE_NAME}`);

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