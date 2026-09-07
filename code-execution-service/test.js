import dotenv from "dotenv";
import amqp from "amqplib";
import crypto from "crypto";

dotenv.config();

const QUEUE_NAME = "code-execution.queue";

const testCode = {
    jobId: crypto.randomUUID(),

    language: "cpp",

    code: `
#include <iostream>
using namespace std;

int main() {

    int a, b;

    cin >> a >> b;

    cout << "Sum = " << a + b << endl;

    return 0;
}
`,

    input: "10 20"
};

const testProducer = async () => {

    try {

        console.log("Connecting to RabbitMQ...");

        const connection = await amqp.connect(
            process.env.RABBITMQ_URL
        );

        const channel = await connection.createChannel();

        await channel.assertQueue(QUEUE_NAME, {
            durable: true
        });

        channel.sendToQueue(
            QUEUE_NAME,
            Buffer.from(JSON.stringify(testCode)),
            {
                persistent: true,
                contentType: "application/json"
            }
        );

        console.log("\n========== TEST JOB SENT ==========");
        console.log("Job ID:", testCode.jobId);
        console.log("Language:", testCode.language);
        console.log("Input:", testCode.input);
        console.log("===================================\n");

        await channel.close();
        await connection.close();

    } catch (error) {

        console.error(
            "Test producer failed:",
            error.message
        );
        console.error(error);
    }
};

testProducer();