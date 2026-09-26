import "dotenv/config";

import { connectRabbitMQ } from "./config/rabbitmq.js";

import { startEmailConsumer } from "./consumers/email.consumer.js";


const startEmailService = async () => {

    try {

        await connectRabbitMQ();

        await startEmailConsumer();

        console.log(
            "Email service started successfully"
        );

    } catch (error) {

        console.error(
            "Failed to start email service:",
            error.message
        );

        process.exit(1);
    }
};


startEmailService();