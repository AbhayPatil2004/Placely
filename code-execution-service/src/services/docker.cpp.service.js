import Docker from "dockerode";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const docker = new Docker();

const executeCpp = async (code, input = "") => {

    console.log("\n========== C++ EXECUTION START ==========");

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

        console.log("[1] Work Directory:", workDir);


        // ----------------------------------
        // 2. Write C++ source code
        // ----------------------------------

        console.log("[2] Writing C++ code...");

        const sourceFile = path.join(
            workDir,
            "main.cpp"
        );

        await fs.writeFile(
            sourceFile,
            code
        );

        console.log("[2] main.cpp created");


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

            Image: "placely-cpp",

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
        // COMPILATION
        // ==================================

        console.log("[5] Starting compilation...");

        const compileExec = await container.exec({

            Cmd: [
                "g++",
                "/app/main.cpp",
                "-o",
                "/app/main"
            ],

            AttachStdout: true,

            AttachStderr: true,

            Tty: false
        });

        const compileStream = await compileExec.start({
            hijack: true,
            stdin: false
        });

        let compileStdout = "";
        let compileStderr = "";

        docker.modem.demuxStream(
            compileStream,

            {
                write: (data) => {
                    compileStdout += data.toString();
                }
            },

            {
                write: (data) => {
                    compileStderr += data.toString();
                }
            }
        );


        // Wait for compilation stream
        await new Promise((resolve) => {

            let resolved = false;

            const done = () => {

                if (resolved) return;

                resolved = true;

                resolve();
            };

            compileStream.on("end", done);

            compileStream.on("close", done);

            compileStream.on("error", done);
        });


        const compileResult = await compileExec.inspect();

        console.log(
            "[6] Compilation exit code:",
            compileResult.ExitCode
        );


        // ----------------------------------
        // Compilation failed
        // ----------------------------------

        if (compileResult.ExitCode !== 0) {

            console.log("[6] Compilation failed");

            return {

                status: "compile_error",

                stdout: compileStdout,

                stderr: compileStderr,

                exitCode: compileResult.ExitCode
            };
        }


        console.log("[6] Compilation successful");


        // ==================================
        // RUN C++ PROGRAM
        // ==================================

        console.log("[7] Starting C++ program...");


        const runExec = await container.exec({

            Cmd: [
                "sh",
                "-c",
                "/app/main < /app/input.txt"
            ],

            AttachStdout: true,

            AttachStderr: true,

            Tty: false
        });


        const runStream = await runExec.start({
            hijack: true,
            stdin: false
        });


        console.log("[8] C++ program started");


        let stdout = "";
        let stderr = "";


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
            "[9] Waiting for C++ program..."
        );


        const timeout = setTimeout(
            async () => {

                timedOut = true;

                console.log(
                    "[TIMEOUT] C++ program exceeded 3 seconds"
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
        // IMPORTANT:
        // Poll Docker exec status
        // ----------------------------------

        while (true) {

            const result = await runExec.inspect();

            console.log(
                "[10] Running:",
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


        if (timedOut) {

            return {

                status: "timeout",

                stdout,

                stderr:
                    "Execution time exceeded 3 seconds",

                exitCode: 137
            };
        }


        const exitCode = finalResult.ExitCode;


        console.log(
            "[11] Final stdout:",
            stdout
        );

        console.log(
            "[11] Final stderr:",
            stderr
        );

        console.log(
            "[11] Exit code:",
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


    } finally {

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
        // Cleanup temporary directory
        // ----------------------------------

        try {

            await fs.rm(
                workDir,
                {
                    recursive: true,
                    force: true
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
            "========== C++ EXECUTION END ==========\n"
        );
    }
};


export default executeCpp;