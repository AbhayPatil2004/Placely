import dotenv from "dotenv";
import express from "express";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Placely Backend Running 🚀",
    });
});

// CREATE USER
app.post("/users", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already exists",
            });
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// GET ALL USERS
app.get("/users", async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return res.json({
            success: true,
            users,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// GET USER BY ID
app.get("/users/:id", async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.params.id,
            },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.json({
            success: true,
            user,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// UPDATE USER
app.put("/users/:id", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await prisma.user.update({
            where: {
                id: req.params.id,
            },
            data: {
                name,
                email,
                password,
            },
        });

        return res.json({
            success: true,
            message: "User updated successfully",
            user,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// DELETE USER
app.delete("/users/:id", async (req, res) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id,
            },
        });

        return res.json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});