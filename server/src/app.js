import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import connectDB from "./config/mongo.js";
// import { PrismaClient } from "@prisma/client";
import { connectRabbitMQ } from "./config/rabbitmq.js";
import StartCodeResultConsumer from "./consumer/codeResult.consumer.js";
import ApiError from "./utils/apiError.js";
import ApiResponse from "./utils/apiResponse.js";

import Studentrouter from "./auth/routes/student.auth.route.js";
import Adminrouter from "./auth/routes/admin.auth.routes.js";
import Tporouter from "./auth/routes/tpo.auth.routes.js";
import Problem from './DSA/routes/problem.route.js'
import Code from "./DSA/routes/execute.route.js"

dotenv.config({
    path: fileURLToPath(new URL("../.env", import.meta.url)),
});

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is required in server/.env");
}

const app = express();

// const prisma = new PrismaClient();

await connectDB();
await connectRabbitMQ();
await StartCodeResultConsumer()


const allowedOrigins = new Set(
    (process.env.CLIENT_URLS || "http://localhost:3000,http://127.0.0.1:3000")
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean),
);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.has(origin)) {
            return callback(null, true);
        }

        return callback(new ApiError(403, "Origin is not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Accept", "Authorization"],
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/student", Studentrouter);
app.use("/api/auth/admin", Adminrouter);
app.use("/api/auth/tpo", Tporouter);
app.use("/api/problem" , Problem )
app.use("/api/code" , Code )



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