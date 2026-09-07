import {
    getChannel,
    QUEUE_NAME,
    RESULT_QUEUE_NAME
} from "../config/rabbitmq.js";

import executeCpp from "../services/docker.cpp.service.js";
import executeJava from "../services/docker.java.service.js";
import executeJs from "../services/docker.js.service.js";
import executePy from "../services/docker.py.service.js";

export const startCodeExecutionConsumer = async () => {

    const channel = getChannel();

    await channel.prefetch(1);

    console.log(
        `Waiting for jobs from ${QUEUE_NAME}...`
    );

    channel.consume(
        QUEUE_NAME,
        async (message) => {

            if (!message) {
                return;
            }

            let job;

            try {

                job = JSON.parse(
                    message.content.toString()
                );

                console.log(
                    "\n========== CODE EXECUTION JOB =========="
                );

                console.log(
                    "Job ID:",
                    job.jobId
                );

                console.log(
                    "Language:",
                    job.language
                );

                console.log("Executing code...");

                let result;

                const language = job.language.toLowerCase();

                if (language === "cpp") {

                    result = await executeCpp(
                        job.code,
                        job.input
                    );

                } else if (language === "java") {

                    result = await executeJava(
                        job.code,
                        job.input
                    );

                } else if (language === "js") {

                    result = await executeJs(
                        job.code,
                        job.input
                    );

                } else if (language === "py") {

                    result = await executePy(
                        job.code,
                        job.input
                    );

                } else {

                    throw new Error(
                        `Unsupported language: ${job.language}`
                    );
                }

                console.log(
                    "Execution completed:",
                    job.jobId
                );

                /*
                 * Send result back to Main Server
                 */

                const executionResult = {

                    jobId: job.jobId,

                    status: "completed",

                    language: job.language,

                    result: result
                };

                channel.sendToQueue(
                    RESULT_QUEUE_NAME,

                    Buffer.from(
                        JSON.stringify(executionResult)
                    ),

                    {
                        persistent: true,
                        contentType: "application/json"
                    }
                );

                console.log(
                    "Result pushed to:",
                    RESULT_QUEUE_NAME
                );

                /*
                 * ACK only after result
                 * has been pushed.
                 */

                channel.ack(message);

            } catch (error) {

                console.error(
                    "Code execution failed:",
                    error.message
                );

                /*
                 * Even errors should be sent
                 * back to Main Server.
                 */

                const errorResult = {

                    jobId: job?.jobId,

                    status: "failed",

                    error: error.message
                };

                channel.sendToQueue(
                    RESULT_QUEUE_NAME,

                    Buffer.from(
                        JSON.stringify(errorResult)
                    ),

                    {
                        persistent: true,
                        contentType: "application/json"
                    }
                );

                channel.ack(message);
            }
        },
        {
            noAck: false
        }
    );
};