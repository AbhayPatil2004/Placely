import {
    getChannel,
    CODE_EXECUTION_QUEUE_NAME,
    CODE_RESULT_QUEUE_NAME
} from "../config/rabbitmq.js";

import executeCpp from "../services/docker.cpp.service.js";
import executeJava from "../services/docker.java.service.js";
import executeJs from "../services/docker.js.service.js";
import executePy from "../services/docker.py.service.js";

export const startCodeExecutionConsumer = async () => {

    const channel = getChannel();

    channel.prefetch(1);

    console.log(
        `Waiting for jobs from ${CODE_EXECUTION_QUEUE_NAME}...`
    );

    channel.consume(
        CODE_EXECUTION_QUEUE_NAME,

        async (message) => {

            if (!message) {
                return;
            }

            let job = null;

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

                const executionResult = {
                    jobId: job.jobId,
                    status: "completed",
                    language: job.language,
                    result: result,
                    error: null
                };

                channel.sendToQueue(
                    CODE_RESULT_QUEUE_NAME,

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
                    CODE_RESULT_QUEUE_NAME
                );

                channel.ack(message);

            } catch (error) {

                console.error(
                    "Code execution failed:",
                    error.message
                );

                const errorResult = {
                    jobId: job?.jobId,
                    status: "failed",
                    language: job?.language,
                    result: null,
                    error: error.message
                };

                channel.sendToQueue(
                    CODE_RESULT_QUEUE_NAME,

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