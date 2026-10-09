
import amqp from "amqplib";
import dotenv from "dotenv";

dotenv.config();

let connection;
let channel;

// Email service queue
export const QUEUE_NAME = "email.queue";

// Code execution queues
export const CODE_EXECUTION_QUEUE_NAME = "code-execution.queue";

export const CODE_RESULT_EXCHANGE_NAME = "code-result.exchange";
export const CODE_RESULT_QUEUE_NAME = "code-result.queue";

// Code submission queues
export const CODE_SUBMISSION_QUEUE_NAME = "code-submission.queue";
export const CODE_SUBMISSION_RESULT_QUEUE_NAME =
    "code-submission-result.queue";

// Connect to RabbitMQ
export const connectRabbitMQ = async () => {
    try {
        connection = await amqp.connect(process.env.RABBITMQ_URL);

        channel = await connection.createChannel();

        // Email queue
        await channel.assertQueue(QUEUE_NAME, {
            durable: true,
        });

        // Code execution queue
        await channel.assertQueue(CODE_EXECUTION_QUEUE_NAME, {
            durable: true,
        });

        // Code result exchange
        await channel.assertExchange(
            CODE_RESULT_EXCHANGE_NAME,
            "fanout",
            {
                durable: true,
            }
        );

        // Code result queue
        await channel.assertQueue(CODE_RESULT_QUEUE_NAME, {
            durable: true,
        });

        // Code submission queue
        await channel.assertQueue(CODE_SUBMISSION_QUEUE_NAME, {
            durable: true,
        });

        // Code submission result queue
        await channel.assertQueue(CODE_SUBMISSION_RESULT_QUEUE_NAME, {
            durable: true,
        });

        // Bind code result queue to the fanout exchange
        await channel.bindQueue(
            CODE_RESULT_QUEUE_NAME,
            CODE_RESULT_EXCHANGE_NAME,
            ""
        );

        console.log("RabbitMQ connected successfully");
        console.log(`Email queue ready: ${QUEUE_NAME}`);
        console.log(
            `Code execution queue ready: ${CODE_EXECUTION_QUEUE_NAME}`
        );
        console.log(
            `Code result queue ready: ${CODE_RESULT_QUEUE_NAME}`
        );
        console.log(
            `Code submission queue ready: ${CODE_SUBMISSION_QUEUE_NAME}`
        );
        console.log(
            `Code submission result queue ready: ${CODE_SUBMISSION_RESULT_QUEUE_NAME}`
        );

        return channel;
    } catch (error) {
        console.error(
            "RabbitMQ connection failed:",
            error.message
        );

        throw error;
    }
};

// Get initialized RabbitMQ channel
export const getChannel = () => {
    if (!channel) {
        throw new Error(
            "RabbitMQ channel is not initialized"
        );
    }

    return channel;
};

