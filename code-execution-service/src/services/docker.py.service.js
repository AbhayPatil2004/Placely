import Docker from "dockerode";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const docker = new Docker();

const executePy = async (code, input = "") => {

    console.log("\n========== PYTHON EXECUTION START ==========");

    const executionId = crypto.randomUUID();

    const workDir = path.resolve(
        "temp",
        executionId
    );

    let container = null;

    try {

        // ----------------------------------
        // 1. Create temporary directory
        // ----------------------------------

        console.log("[1] Creating temporary directory...");

        await fs.mkdir(workDir, {
            recursive: true
        });

        console.log(
            "[1] Work Directory:",
            workDir
        );


        // ----------------------------------
        // 2. Write Python source code
        // ----------------------------------

        console.log("[2] Writing Python code...");

        const sourceFile = path.join(
            workDir,
            "main.py"
        );

        await fs.writeFile(
            sourceFile,
            code
        );

        console.log("[2] code.py created");


        // ----------------------------------
        // 3. Write input into input.txt
        // ----------------------------------

        console.log("[2.1] Writing input...");

        const inputFile = path.join(
            workDir,
            "input.txt"
        );

        await fs.writeFile(
            inputFile,
            input
        );

        console.log("[2.1] input.txt created");


        // ----------------------------------
        // 4. Create Docker container
        // ----------------------------------

        console.log("[3] Creating Docker container...");

        container = await docker.createContainer({

            Image: "placely-py",

            WorkingDir: "/app",

            HostConfig: {

                Binds: [
                    `${workDir}:/app`
                ],

                NetworkMode: "none",

                Memory: 256 * 1024 * 1024,

                NanoCpus: 1_000_000_000,

                PidsLimit: 50
            }
        });

        console.log(
            "[3] Container created:",
            container.id
        );


        // ----------------------------------
        // 5. Start container
        // ----------------------------------

        console.log("[4] Starting container...");

        await container.start();

        console.log("[4] Container started");


        // ==================================
        // RUN PYTHON PROGRAM
        // ==================================

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


        const runStream = await runExec.start({

            hijack: true,

            stdin: false
        });

        console.log("[6] Python program started");


        let stdout = "";

        let stderr = "";


        // ----------------------------------
        // Capture stdout / stderr
        // ----------------------------------

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


        // ==================================
        // TIMEOUT
        // ==================================

        let timedOut = false;

        console.log(
            "[7] Waiting for Python program..."
        );


        const timeout = setTimeout(
            async () => {

                timedOut = true;

                console.log(
                    "[TIMEOUT] Python program exceeded 3 seconds"
                );

                try {

                    await container.kill();

                    console.log(
                        "[TIMEOUT] Container killed"
                    );

                } catch (error) {

                    console.log(
                        "[TIMEOUT] Kill error:",
                        error.message
                    );
                }

            },
            3000
        );


        // ----------------------------------
        // Poll Docker exec status
        // ----------------------------------

        while (true) {

            const result = await runExec.inspect();

            console.log(
                "[8] Running:",
                result.Running,
                "ExitCode:",
                result.ExitCode
            );


            if (!result.Running) {

                clearTimeout(timeout);

                break;
            }


            await new Promise(
                resolve => setTimeout(resolve, 100)
            );
        }


        // ----------------------------------
        // Get final execution result
        // ----------------------------------

        const finalResult = await runExec.inspect();


        // ----------------------------------
        // Timeout result
        // ----------------------------------

        if (timedOut) {

            return {

                status: "timeout",

                stdout,

                stderr:
                    "Execution time exceeded 3 seconds",

                exitCode: 137
            };
        }


        // ----------------------------------
        // Final result
        // ----------------------------------

        const exitCode = finalResult.ExitCode;


        console.log(
            "[9] Final stdout:",
            stdout
        );

        console.log(
            "[9] Final stderr:",
            stderr
        );

        console.log(
            "[9] Exit code:",
            exitCode
        );


        return {

            status:
                exitCode === 0
                    ? "success"
                    : "runtime_error",

            stdout,

            stderr,

            exitCode
        };


    } catch (error) {

        console.log(
            "[ERROR]",
            error
        );


        return {

            status: "error",

            stdout: "",

            stderr: error.message,

            exitCode: -1
        };

    }
    finally {

        // ----------------------------------
        // Cleanup container
        // ----------------------------------

        if (container) {

            try {

                console.log(
                    "[CLEANUP] Removing container..."
                );

                await container.remove({
                    force: true
                });

                console.log(
                    "[CLEANUP] Container removed"
                );

            } catch (error) {

                console.log(
                    "[CLEANUP] Container remove error:",
                    error.message
                );
            }
        }


        // ----------------------------------
        // Small delay for Docker mount release
        // ----------------------------------

        await new Promise(
            resolve => setTimeout(resolve, 300)
        );


        // ----------------------------------
        // Cleanup temporary directory
        // ----------------------------------

        try {

            console.log(
                "[CLEANUP] Removing temporary directory..."
            );

            await fs.rm(
                workDir,
                {
                    recursive: true,
                    force: true,
                    maxRetries: 5,
                    retryDelay: 200
                }
            );

            console.log(
                "[CLEANUP] Temporary directory removed"
            );

        } catch (error) {

            console.log(
                "[CLEANUP] Directory cleanup error:",
                error.message
            );
        }


        console.log(
            "========== PYTHON EXECUTION END ==========\n"
        );
    }
};


export default executePy;