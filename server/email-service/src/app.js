import "dotenv/config";

import {
    connectRabbitMQ
} from "./config/rabbitmq.js";

import {
    startEmailConsumer
} from "./consumers/email.consumer.js";


const startEmailService = async () => {

    try {

      

        await connectRabbitMQ();


       

        await startEmailConsumer();


        console.log(
            "Placely Email Service is running"
        );


    } catch (error) {

        console.error(
            " Email Service failed:",
            error.message
        );

        process.exit(1);
    }
};


startEmailService();