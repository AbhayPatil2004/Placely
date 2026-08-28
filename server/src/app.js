import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongo.js";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
connectDB()

app.use(express.json());




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});