import amqp from "amqplib";
import dotenv from "dotenv";

dotenv.config();

let connection;
let channel;

const CODE_EXECUTION_QUEUE_NAME = "code-execution.queue";
const CODE_RESULT_QUEUE_NAME = "code-result.queue";

export const connectRabbitMQ = async () => {
    try {

        connection = await amqp.connect(
            process.env.RABBITMQ_URL
        );

        channel = await connection.createChannel();

        await channel.assertQueue(CODE_EXECUTION_QUEUE_NAME, {
            durable: true
        });

        await channel.assertQueue( CODE_RESULT_QUEUE_NAME , {
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

export {
    CODE_EXECUTION_QUEUE_NAME,
    CODE_RESULT_QUEUE_NAME
};