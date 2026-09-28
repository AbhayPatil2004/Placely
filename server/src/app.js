import dotenv from "dotenv";
import http from 'http'
import InitializeWebSocket from "./websocket/webSocketServer.js";

import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import connectDB from "./config/mongo.js";
// import { PrismaClient } from "@prisma/client";
import { connectRabbitMQ } from "./config/rabbitmq.js";
import StartCodeResultConsumer from "./consumer/codeResult.consumer.js";
import ApiError from "./utils/apiError.js";
import ApiResponse from "./utils/apiResponse.js";

import StudentAuth from "./auth/routes/student.auth.route.js";
import AdminAuth from "./auth/routes/admin.auth.routes.js";
import TpoAuth from "./auth/routes/tpo.auth.routes.js";
import Problem from './DSA/routes/problem.route.js'
import Code from "./DSA/routes/execute.route.js"
import Student from "./student/routes/Student.route.js"
import Core from "./Core/routes/core.route.js"


import ApiResponse from "./utils/apiResponse.js";

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


app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());


// app.use("/" , ( req , res ) => {
//     res.status(200).json(
//        new ApiResponse( 200 , "Server is Running " , {})
//     )
// })

app.use("/api/auth/student", StudentAuth);
app.use("/api/auth/admin", AdminAuth);
app.use("/api/auth/tpo", TpoAuth);
app.use("/api/problem" , Problem )
app.use("/api/code" , Code )
app.use("/api/student" , Student)
app.use("/api/core", Core)

const PORT = process.env.PORT || 5000;
const server = http.createServer(app)

InitializeWebSocket(server)


server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});