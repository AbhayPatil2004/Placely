import "dotenv/config";
import amqp from "amqplib";

const connection = await amqp.connect(
    process.env.RABBITMQ_URL
);

const channel = await connection.createChannel();

await channel.assertQueue("email.queue", {
    durable: true
});

const message = {
    type: "WELCOME_EMAIL",

    to: "abhayramkrushnapatil@gmail.com",

    subject: "Placely Test Email 🚀",

    data: {
        name: "Abhay"
    }
};

channel.sendToQueue(
    "email.queue",
    Buffer.from(JSON.stringify(message)),
    {
        persistent: true
    }
);

console.log("📤 Test email event published");

setTimeout(() => {
    connection.close();
}, 500);