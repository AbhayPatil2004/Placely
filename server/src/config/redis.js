import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL , {
    tls : {}
}
);

redis.on("connect", () => {
    console.log("Redis connected successfully");
});

redis.on("ready", () => {
    console.log("Redis ready");
});

redis.on("error", (error) => {
    console.error("Redis Error:", error.message);
});

redis.on("close", () => {
    console.log("Redis Connection closed");
});

redis.on("reconnecting", () => {
    console.log("Redis reconnection...");
});

export default redis;