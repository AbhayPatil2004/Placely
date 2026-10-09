import dotenv from "dotenv";
import http from 'http'
import InitializeWebSocket from "./websocket/webSocketServer.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import connectDB from "./config/mongo.js";
// import { PrismaClient } from "@prisma/client";
import { connectRabbitMQ } from "./config/rabbitmq.js";
import StartCodeResultConsumer from "./consumer/codeResult.consumer.js";
import StartCodeSubmissionResultConsumer from "./consumer/codeSubmmisionResultConsumer.js";
import ApiError from "./utils/apiError.js";
import ApiResponse from "./utils/apiResponse.js";

import StudentAuth from "./auth/routes/student.auth.route.js";
import AdminAuth from "./auth/routes/admin.auth.routes.js";
import TpoAuth from "./auth/routes/tpo.auth.routes.js";
import Problem from './DSA/routes/problem.route.js'
import Code from "./DSA/routes/execute.route.js"
import Profile from "./student/routes/profile.route.js"
import Core from "./Core/Routes/core.routes.js"
import Submit from "./DSA/routes/submission.route.js"
import Solved from "./DSA/routes/solved.route.js"
import Progress from './progress/routes/learning.route.js'

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
await StartCodeSubmissionResultConsumer()


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
app.use("/api/student" , Profile )
app.use("/api/core", Core)
app.use("/api/submit" , Submit )
app.use("/api/solved" , Solved )
app.use("/api/progress" , Progress )


const PORT = process.env.PORT || 5000;
const server = http.createServer(app)

InitializeWebSocket(server)


server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});