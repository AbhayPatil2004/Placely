
export const startMemoryMonitor = async (container) => {
    let peakMemoryBytes = 0;
    let buffer = "";
    let statsStream = null;

    await new Promise((resolve, reject) => {
        container.stats({ stream: true }, (error, stream) => {
            if (error) {
                reject(error);
                return;
            }

            statsStream = stream;

            stream.on("data", (chunk) => {
                buffer += chunk.toString();

                const records = buffer.split("\n");
                buffer = records.pop() ?? "";

                for (const record of records) {
                    if (!record.trim()) continue;

                    try {
                        const stats = JSON.parse(record);
                        const memory = stats.memory_stats;

                        if (typeof memory?.usage !== "number") {
                            continue;
                        }

                        const cache =
                            memory.stats?.inactive_file ??
                            memory.stats?.cache ??
                            0;

                        const usedBytes = Math.max(
                            0,
                            memory.usage - cache
                        );

                        peakMemoryBytes = Math.max(
                            peakMemoryBytes,
                            usedBytes
                        );
                    } catch (error) {
                        console.error(
                            "[METRICS] Invalid Docker stats:",
                            error.message
                        );
                    }
                }
            });

            stream.on("error", (error) => {
                console.error(
                    "[METRICS] Stats stream error:",
                    error.message
                );
            });

            console.log("[METRICS] Memory monitoring started");

            resolve();
        });
    });

    return {
        stop() {
            if (statsStream && !statsStream.destroyed) {
                statsStream.destroy();
            }

            // No sample means memory usage is unknown.
            const memoryUsed =
                peakMemoryBytes > 0
                    ? Math.ceil(peakMemoryBytes / 1024)
                    : null;

            console.log(
                "[METRICS] Peak memory:",
                memoryUsed === null
                    ? "Unavailable"
                    : `${memoryUsed} KB`
            );

            return memoryUsed;
        },
    };
};