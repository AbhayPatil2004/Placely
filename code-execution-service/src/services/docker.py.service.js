import Docker from "dockerode";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { startMemoryMonitor } from "./docker.metrics.js";

const docker = new Docker();

const executePy = async (code, input = "") => {
    console.log("\n========== PYTHON EXECUTION START ==========");

    const executionId = crypto.randomUUID();
    const workDir = path.resolve("temp", executionId);

    let container = null;
    let memoryMonitor = null;
    let executionStart = null;
    let executionTime = null;
    let memoryUsed = null;
    let timeout = null;

    try {
        // 1. Create temporary directory
        console.log("[1] Creating temporary directory...");

        await fs.mkdir(workDir, { recursive: true });

        console.log("[1] Work Directory:", workDir);

        // 2. Write Python source code
        console.log("[2] Writing Python code...");

        const sourceFile = path.join(workDir, "main.py");
        await fs.writeFile(sourceFile, code);

        console.log("[2] main.py created");

        // 3. Write input
        console.log("[2.1] Writing input...");

        const inputFile = path.join(workDir, "input.txt");
        await fs.writeFile(inputFile, input);

        console.log("[2.1] input.txt created");

        // 4. Create Docker container
        console.log("[3] Creating Docker container...");

        container = await docker.createContainer({
            Image: "placely-py",
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

        // 6. Start Python program
        console.log("[5] Starting Python program...");

        const runExec = await container.exec({
            Cmd: [
                "sh",
                "-c",
                "python /app/main.py < /app/input.txt"
            ],
            AttachStdout: true,
            AttachStderr: true,
            Tty: false
        });

        // Start memory monitoring after container startup
        memoryMonitor = await startMemoryMonitor(container);

        let stdout = "";
        let stderr = "";

        const runStream = await runExec.start({
            hijack: true,
            stdin: false
        });

        console.log("[6] Python program started");

        // Capture stdout and stderr
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

        // 7. Start execution timer and timeout
        let timedOut = false;

        executionStart = Date.now();

        console.log("[7] Waiting for Python program...");

        timeout = setTimeout(async () => {
            timedOut = true;

            console.log("[TIMEOUT] Python program exceeded 3 seconds");

            try {
                await container.kill();
                console.log("[TIMEOUT] Container killed");
            } catch (error) {
                console.log("[TIMEOUT] Kill error:", error.message);
            }
        }, 3000);

        // 8. Poll Docker exec status
        while (true) {
            let result;

            try {
                result = await runExec.inspect();
            } catch (error) {
                if (timedOut) break;
                throw error;
            }

            console.log(
                "[8] Running:",
                result.Running,
                "ExitCode:",
                result.ExitCode
            );

            if (!result.Running) {
                break;
            }

            // Avoid waiting indefinitely after timeout
            if (timedOut) {
                break;
            }

            await new Promise(resolve => setTimeout(resolve, 100));
        }

        clearTimeout(timeout);
        timeout = null;

        // Calculate elapsed wall-clock time
        executionTime = Date.now() - executionStart;

        // Stop memory monitoring and capture peak memory
        if (memoryMonitor) {
            memoryUsed = memoryMonitor.stop();
            memoryMonitor = null;
        }

        console.log("[9] Execution time:", executionTime, "ms");
        console.log("[9] Memory used:", memoryUsed, "KB");

        // 9. Timeout result
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

        // 10. Get final execution result
        const finalResult = await runExec.inspect();
        const exitCode = finalResult.ExitCode;

        console.log("[10] Final stdout:", stdout);
        console.log("[10] Final stderr:", stderr);
        console.log("[10] Exit code:", exitCode);

        return {
            status: exitCode === 0 ? "success" : "runtime_error",
            stdout,
            stderr,
            exitCode,
            executionTime,
            memoryUsed
        };

    } catch (error) {
        console.log("[ERROR]", error);

        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }

        if (executionStart !== null && executionTime === null) {
            executionTime = Date.now() - executionStart;
        }

        if (memoryMonitor) {
            memoryUsed = memoryMonitor.stop();
            memoryMonitor = null;
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
        if (timeout) {
            clearTimeout(timeout);
        }

        // Stop the monitor if an earlier error interrupted execution
        if (memoryMonitor) {
            memoryMonitor.stop();
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

        console.log("========== PYTHON EXECUTION END ==========\n");
    }
};

export default executePy;