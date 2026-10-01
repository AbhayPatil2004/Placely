
import Docker from "dockerode";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { startMemoryMonitor } from "./docker.metrics.js";

const docker = new Docker();

const executeJs = async (code, input = "") => {
    console.log("\n========== JS EXECUTION START ==========");

    const executionId = crypto.randomUUID();

    const workDir = path.resolve("temp", executionId);

    let container = null;
    let memoryMonitor = null;
    let executionStart = null;
    let executionTime = 0;
    let memoryUsed = null;

    let timedOut = false;
    let timeout = null;

    try {
        // 1. Create temporary directory
        console.log("[1] Creating temporary directory...");

        await fs.mkdir(workDir, { recursive: true });

        console.log("[1] Work Directory:", workDir);

        // 2. Write JavaScript source code
        console.log("[2] Writing JavaScript code...");

        const sourceFile = path.join(workDir, "main.js");

        await fs.writeFile(sourceFile, code);

        console.log("[2] main.js created");

        // 3. Write input
        console.log("[2.1] Writing input...");

        const inputFile = path.join(workDir, "input.txt");

        await fs.writeFile(inputFile, input);

        console.log("[2.1] input.txt created");

        // 4. Create Docker container
        console.log("[3] Creating Docker container...");

        container = await docker.createContainer({
            Image: "placely-js",
            WorkingDir: "/app",
            HostConfig: {
                Binds: [`${workDir}:/app`],
                NetworkMode: "none",
                Memory: 256 * 1024 * 1024,
                NanoCpus: 1_000_000_000,
                PidsLimit: 50
            }
        });

        console.log("[3] Container created:", container.id);

        // 5. Start container
        console.log("[4] Starting container...");

        await container.start();

        console.log("[4] Container started");

        // 6. Start memory monitoring
        console.log("[METRICS] Initializing memory monitor...");

        try {
            memoryMonitor = await startMemoryMonitor(container);
        } catch (error) {
            // Monitoring failure should not prevent code execution.
            console.error(
                "[METRICS] Could not start memory monitor:",
                error.message
            );
        }

        // 7. Create execution process
        console.log("[5] Creating JavaScript execution process...");

        const runExec = await container.exec({
            Cmd: [
                "sh",
                "-c",
                "node /app/main.js < /app/input.txt"
            ],
            AttachStdout: true,
            AttachStderr: true,
            Tty: false
        });

        // Start measuring immediately before launching the program.
        executionStart = process.hrtime.bigint();

        console.log("[METRICS] Starting execution timer...");

        const runStream = await runExec.start({
            hijack: true,
            stdin: false
        });

        console.log("[6] JavaScript program started");

        let stdout = "";
        let stderr = "";

        // 8. Capture stdout and stderr
        docker.modem.demuxStream(
            runStream,
            {
                write: (data) => {
                    stdout += data.toString();
                }
            },
            {
                write: (data) => {
                    stderr += data.toString();
                }
            }
        );

        // 9. Timeout handling
        console.log("[7] Waiting for JavaScript program...");

        timeout = setTimeout(async () => {
            timedOut = true;

            console.log(
                "[TIMEOUT] JavaScript program exceeded 3 seconds"
            );

            try {
                await container.kill();

                console.log("[TIMEOUT] Container killed");
            } catch (error) {
                console.log(
                    "[TIMEOUT] Kill error:",
                    error.message
                );
            }
        }, 3000);

        // 10. Poll Docker exec status
        while (true) {
            const result = await runExec.inspect();

            console.log(
                "[8] Running:",
                result.Running,
                "ExitCode:",
                result.ExitCode
            );

            if (!result.Running) {
                break;
            }

            // If the timeout fired, allow Docker to report termination.
            if (timedOut) {
                break;
            }

            await new Promise(resolve => setTimeout(resolve, 100));
        }

        clearTimeout(timeout);
        timeout = null;

        // 11. Calculate execution time
        if (executionStart !== null) {
            executionTime = Number(
                process.hrtime.bigint() - executionStart
            ) / 1_000_000;
        }

        console.log(
            "[METRICS] Execution time:",
            executionTime.toFixed(2),
            "ms"
        );

        // 12. Stop memory monitoring
        if (memoryMonitor) {
            memoryUsed = memoryMonitor.stop();
            memoryMonitor = null;
        }

        console.log(
            "[METRICS] Memory used:",
            memoryUsed === null
                ? "Unavailable"
                : `${memoryUsed} KB`
        );

        // 13. Get final execution result
        const finalResult = await runExec.inspect();

        // 14. Return timeout result
        if (timedOut) {
            return {
                status: "timeout",
                stdout,
                stderr: "Execution time exceeded 3 seconds",
                exitCode: 137,
                executionTime,
                memoryUsed
            };
        }

        const exitCode = finalResult.ExitCode;

        console.log("[9] Final stdout:", stdout);
        console.log("[9] Final stderr:", stderr);
        console.log("[9] Exit code:", exitCode);

        // 15. Return execution result
        return {
            status: exitCode === 0
                ? "success"
                : "runtime_error",
            stdout,
            stderr,
            exitCode,
            executionTime,
            memoryUsed
        };

    } catch (error) {
        console.error("[ERROR]", error);

        // Stop the monitor if an exception occurs.
        if (memoryMonitor) {
            try {
                memoryUsed = memoryMonitor.stop();
            } catch (monitorError) {
                console.error(
                    "[METRICS] Monitor cleanup error:",
                    monitorError.message
                );
            }

            memoryMonitor = null;
        }

        if (executionStart !== null) {
            executionTime = Number(
                process.hrtime.bigint() - executionStart
            ) / 1_000_000;
        }

        return {
            status: "error",
            stdout: "",
            stderr: error.message,
            exitCode: -1,
            executionTime,
            memoryUsed
        };

    } finally {
        // Always clear the timeout.
        if (timeout) {
            clearTimeout(timeout);
        }

        // Stop any monitor that is still active.
        if (memoryMonitor) {
            try {
                memoryUsed = memoryMonitor.stop();
            } catch (error) {
                console.error(
                    "[METRICS] Final monitor cleanup error:",
                    error.message
                );
            }

            memoryMonitor = null;
        }

        // Cleanup container
        if (container) {
            try {
                console.log("[CLEANUP] Removing container...");

                await container.remove({ force: true });

                console.log("[CLEANUP] Container removed");
            } catch (error) {
                console.log(
                    "[CLEANUP] Container remove error:",
                    error.message
                );
            }
        }

        // Allow Docker mount to release
        await new Promise(resolve => setTimeout(resolve, 300));

        // Cleanup temporary directory
        try {
            console.log("[CLEANUP] Removing temporary directory...");

            await fs.rm(workDir, {
                recursive: true,
                force: true,
                maxRetries: 5,
                retryDelay: 200
            });

            console.log("[CLEANUP] Temporary directory removed");
        } catch (error) {
            console.log(
                "[CLEANUP] Directory cleanup error:",
                error.message
            );
        }

        console.log("========== JS EXECUTION END ==========\n");
    }
};

export default executeJs;