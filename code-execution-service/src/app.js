import dotenv from "dotenv";
import { connectRabbitMQ } from "./config/rabbitmq.js";
import {
    startCodeExecutionConsumer
} from "./consumers/code-execution.consumer.js";
import {
    startCodeSubmissionConsumer
} from './consumers/code-submission.consumer.js'

dotenv.config();

const startCodeExecutionService = async () => {

    try {

        await connectRabbitMQ();

        await startCodeExecutionConsumer();

        await startCodeSubmissionConsumer() ;

        console.log(
            "Placely Code Execution Service is running"
        );

    } catch (error) {

        console.error(
            "Error starting Code Execution Service:",
            error.message
        );

        process.exit(1);
    }
};

startCodeExecutionService();