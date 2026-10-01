
import {
    getChannel,
    CODE_SUBMISSION_QUEUE_NAME,
    CODE_RESULT_EXCHANGE_NAME,
} from "../config/rabbitmq.js";

import executeCpp from "../services/docker.cpp.service.js";
import executeJava from "../services/docker.java.service.js";
import executePy from "../services/docker.py.service.js";
import executeJs from "../services/docker.js.service.js";

const normalizeOutput = (output) => {
    return String(output ?? "")
        .replace(/\r\n/g, "\n")
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .join(" ");
};

const getStdout = (result) => {
    if (typeof result === "string") {
        return result;
    }

    return (
        result?.stdout ??
        result?.output ??
        result?.result ??
        ""
    );
};

const getExecutionError = (error) => {
    const message = String(
        error?.message ?? error ?? "Execution failed"
    );

    if (/out of memory|memory limit|oom/i.test(message)) {
        return {
            status: "MEMORY_LIMIT_EXCEEDED",
            message,
        };
    }

    if (/time limit|timed out|timeout/i.test(message)) {
        return {
            status: "TIME_LIMIT_EXCEEDED",
            message,
        };
    }

    if (/compil(e|ation).*error|syntax error/i.test(message)) {
        return {
            status: "COMPILE_ERROR",
            message,
        };
    }

    return {
        status: "RUNTIME_ERROR",
        message,
    };
};

const executeForLanguage = async (job, input) => {
    switch (job.language.toLowerCase()) {
        case "cpp":
            return executeCpp(job.code, input);

        case "java":
            return executeJava(job.code, input);

        case "js":
            return executeJs(job.code, input);

        case "py":
            return executePy(job.code, input);

        default:
            throw new Error(`Unsupported language: ${job.language}`);
    }
};

const StartCodeSubmissionConsumer = async () => {
    const channel = getChannel();

    await channel.assertQueue(CODE_SUBMISSION_QUEUE_NAME, {
        durable: true,
    });

    await channel.assertExchange(CODE_RESULT_EXCHANGE_NAME, "fanout", {
        durable: true,
    });

    channel.prefetch(1);

    console.log(
        `Waiting for submissions from ${CODE_SUBMISSION_QUEUE_NAME}...`
    );

    channel.consume(
        CODE_SUBMISSION_QUEUE_NAME,
        async (message) => {
            if (!message) return;

            let job;

            try {
                job = JSON.parse(message.content.toString());
            } catch (error) {
                console.error("Invalid submission message:", error.message);
                channel.ack(message);
                return;
            }

            if (
                !job.jobId ||
                !job.submissionId ||
                !job.studentId ||
                !job.code ||
                !job.language ||
                !Array.isArray(job.testCases) ||
                job.testCases.length === 0
            ) {
                console.error("Invalid code submission job:", job.jobId);
                channel.ack(message);
                return;
            }

            const startedAt = Date.now();

            const submissionResult = {
                type: "SUBMISSION_RESULT",
                jobId: job.jobId,
                submissionId: job.submissionId,
                studentId: job.studentId,
                problemId: job.problemId,
                language: job.language,
                status: "RUNNING",
                totalTestCases: job.testCases.length,
                passedTestCases: 0,
                executionTime: 0,
                memoryUsed: null,
                errorMessage: null,
            };

            try {
                console.log(
                    `Running submission ${job.submissionId} against ${job.testCases.length} test cases`
                );

                for (const testCase of job.testCases) {
                    const input = testCase.input ?? "";
                    const expectedOutput =
                        testCase.expectedOutput ?? testCase.output;

                    if (expectedOutput === undefined) {
                        throw new Error(
                            "Test case is missing expectedOutput/output"
                        );
                    }

                    const result = await executeForLanguage(job, input);

                    // Adapt this check to the actual return format
                    // of your Docker execution services.
                    if (result?.error) {
                        throw new Error(String(result.error));
                    }

                    const actualOutput = getStdout(result);

                    if (
                        normalizeOutput(actualOutput) !==
                        normalizeOutput(expectedOutput)
                    ) {
                        submissionResult.status = "WRONG_ANSWER";
                        break;
                    }

                    submissionResult.passedTestCases++;
                }

                if (
                    submissionResult.passedTestCases ===
                    submissionResult.totalTestCases
                ) {
                    submissionResult.status = "ACCEPTED";
                }
            } catch (error) {
                const failure = getExecutionError(error);

                submissionResult.status = failure.status;
                submissionResult.errorMessage = failure.message;
            }

            submissionResult.executionTime = Date.now() - startedAt;

            try {
                channel.publish(
                    CODE_SUBMISSION_RESULT_QUEUE_NAME,
                    "",
                    Buffer.from(JSON.stringify(submissionResult)),
                    {
                        persistent: true,
                        contentType: "application/json",
                        messageId: job.jobId,
                    }
                );

                channel.ack(message);

                console.log(
                    `Submission ${job.submissionId}: ${submissionResult.status} ` +
                    `(${submissionResult.passedTestCases}/${submissionResult.totalTestCases})`
                );
            } catch (error) {
                console.error(
                    "Failed to publish submission result:",
                    error.message
                );

                channel.nack(message, false, true);
            }
        },
        { noAck: false }
    );
};

export default StartCodeSubmissionConsumer;