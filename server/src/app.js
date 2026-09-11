import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongo.js";
import { PrismaClient } from "@prisma/client";
import redis from "./config/redis.js";
import { connectRabbitMQ } from "./config/rabbitmq.js";
import { publishEmail } from "./services/emailProducer.js";
import Studentrouter from "./auth/routes/student.auth.route.js";
import Adminrouter from "./auth/routes/admin.auth.routes.js";
import Tporouter from "./auth/routes/tpo.auth.routes.js";
import ApiError from "./utils/apiError.js";
import ApiResponse from "./utils/apiResponse.js";

dotenv.config();

const app = express();

const prisma = new PrismaClient();

await connectDB();
await connectRabbitMQ();

app.use(express.json());
app.use(cookieParser());
app.use("/api/student", Studentrouter);
app.use("/api/admin", Adminrouter);
app.use("/api/tpo", Tporouter);

app.use((req, res, next) => {
    next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
});

app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = statusCode === 500 ? "Internal Server Error" : error.message;

    if (statusCode === 500) {
        console.error(error);
    }

    res.status(statusCode).json(
        new ApiResponse(statusCode, message, error.errors || null),
    );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});