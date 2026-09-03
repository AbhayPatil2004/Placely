import { getChannel, QUEUE_NAME } from "../config/rabbitmq.js";

export const publishEmail = async ( data ) => {

    const channel = getChannel();

    // const data = {
    //     type: "WELCOME_EMAIL",

    //     to: "patilabhay484@gmail.com",

    //     subject: "Placely Test Email",

    //     data: {
    //         name: "Abhay"
    //     }
    // };

    channel.sendToQueue(
        QUEUE_NAME,
        Buffer.from(JSON.stringify(data)),
        {
            persistent: true
        }
    );

    console.log(" Test email event published");
};