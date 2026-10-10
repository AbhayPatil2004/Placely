import { getChannel, QUEUE_NAME } from "../config/rabbitmq.js";

export const publishEmail = async ( data ) => {

    const channel = getChannel();
    

    channel.sendToQueue(
        QUEUE_NAME,
        Buffer.from(JSON.stringify(data)),
        {
            persistent: true
        }
    );

    // console.log(" Test email event published");
};