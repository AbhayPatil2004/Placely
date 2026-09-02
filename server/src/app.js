import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongo.js";
import { PrismaClient } from "@prisma/client";
import redis from "./config/redis.js";
import { connectRabbitMQ } from "./config/rabbitmq.js";
import { publishEmail } from "./services/emailProducer.js";

dotenv.config();

const app = express();

const prisma = new PrismaClient();

await connectDB();
await connectRabbitMQ();

app.use(express.json());


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});