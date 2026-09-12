import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongo.js";
import { PrismaClient } from "@prisma/client";
import { connectRabbitMQ } from "./config/rabbitmq.js";

import Studentrouter from "./auth/routes/student.auth.route.js";
import Adminrouter from "./auth/routes/admin.auth.routes.js";
import Tporouter from "./auth/routes/tpo.auth.routes.js";

dotenv.config();

const app = express();

const prisma = new PrismaClient();

await connectDB();
await connectRabbitMQ();

app.use(express.json());
app.use("/api/auth/student", Studentrouter);
app.use("/api/auth/admin", Adminrouter);
app.use("/api/auth/tpo", Tporouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});