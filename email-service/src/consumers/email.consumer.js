import { getChannel, QUEUE_NAME } from "../config/rabbitmq.js";

import transporter from "../config/mail.js";

import {
    welcomeEmailTemplate
} from "../templates/welcome.template.js";


export const startEmailConsumer = async () => {

    const channel = getChannel();

    console.log(
        `Listening for messages on ${QUEUE_NAME}...`
    );


    await channel.consume(
        QUEUE_NAME,

        async (message) => {

            if (!message) {
                return;
            }


            try {

                

                const emailData = JSON.parse(
                    message.content.toString()
                );


                console.log(
                    "Email event received:",
                    emailData
                );


                let html;


                

                switch (emailData.type) {

                    case "WELCOME_EMAIL":

                        html = welcomeEmailTemplate(
                            emailData.data.name
                        );

                        break;


                    default:

                        throw new Error(
                            `Unknown email type: ${emailData.type}`
                        );
                }


                

                await transporter.sendMail({

                    from: process.env.EMAIL_USER,

                    to: emailData.to,

                    subject: emailData.subject,

                    html: html

                });


                console.log(
                    `Email sent to ${emailData.to}`
                );


                

                channel.ack(message);


            } catch (error) {

                console.error(
                    " Email processing failed:",
                    error.message
                );


                

                channel.nack(
                    message,
                    false,
                    true
                );

            }

        }
    );
};