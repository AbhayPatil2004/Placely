
import "dotenv/config";
import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  throw new Error("REDIS_URL is missing. Check your server/.env file.");
}

const redis = new Redis(redisUrl, {
  connectTimeout: 10000,
  maxRetriesPerRequest: 3,

  retryStrategy(times) {
    return Math.min(times * 1000, 5000);
  },
});

redis.on("connect", () => {
  console.log("Redis TCP/TLS connection established");
});

redis.on("ready", () => {
  console.log("Redis ready to accept commands");
});

redis.on("error", (error) => {
  console.error("Redis error details:", {
    message: error.message,
    code: error.code,
    name: error.name,
  });
});

redis.on("close", () => {
  console.log("Redis connection closed");
});

redis.on("reconnecting", (delay) => {
  console.log(`Redis reconnecting in ${delay}ms`);
});

export default redis;