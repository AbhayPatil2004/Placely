import dotenv from "dotenv";
import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import connectDB from "./config/mongo.js";
import { PrismaClient } from "@prisma/client";
import { connectRabbitMQ } from "./config/rabbitmq.js";
import StartCodeResultConsumer from "./consumer/codeResult.consumer.js";

import Studentrouter from "./auth/routes/student.auth.route.js";
import Adminrouter from "./auth/routes/admin.auth.routes.js";
import Tporouter from "./auth/routes/tpo.auth.routes.js";
import Problem from './DSA/routes/problem.route.js'
import Code from "./DSA/routes/execute.route.js"

dotenv.config();

const app = express();

const prisma = new PrismaClient();

await connectDB();
await connectRabbitMQ();
await StartCodeResultConsumer()


app.use( cors ( {
    origin : "*"
}))

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/student", Studentrouter);
app.use("/api/auth/admin", Adminrouter);
app.use("/api/auth/tpo", Tporouter);
app.use("/api/problem" , Problem )
app.use("/api/code" , Code )



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});