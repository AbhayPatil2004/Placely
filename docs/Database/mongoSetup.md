1. Install dependencies

Inside server:

npm install express mongoose dotenv cors
npm install --save-dev nodemon
2. .env

For MongoDB Atlas, put your connection string here:

PORT=5000


MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/placely?retryWrites=true&w=majority

Replace:

<username>
<password>

with your MongoDB Atlas credentials.

Don't commit .env to GitHub.

3. src/config/db.js
import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);


        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};


export default connectDB;
4. src/models/User.js
import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },


        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },


        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


const User = mongoose.model("User", userSchema);


export default User;

This creates a MongoDB collection called approximately:

users
5. src/controllers/user.controller.js
import User from "../models/User.js";


export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;


        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email and password are required"
            });
        }


        const existingUser = await User.findOne({ email });


        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }


        const user = await User.create({
            name,
            email,
            password
        });


        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });


    } catch (error) {
        console.error(error);


        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

Important: This is only for testing. In the real Placely authentication system, never store passwords as plain text. We'll use bcrypt for password hashing.

6. src/routes/user.routes.js
import express from "express";
import { createUser } from "../controllers/user.controller.js";


const router = express.Router();


router.post("/create", createUser);


export default router;
7. src/app.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";


dotenv.config();


const app = express();


const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Placely API is running"
    });
});


app.use("/api/users", userRoutes);


// Connect database and start server
const startServer = async () => {
    try {
        await connectDB();


        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
    }
};


startServer();
8. package.json

Make sure you have "type": "module" because you're using import:

{
    "name": "placely-server",
    "version": "1.0.0",
    "type": "module",
    "scripts": {
        "dev": "nodemon src/app.js",
        "start": "node src/app.js"
    }
}
9. .gitignore
node_modules
.env
10. Start the server
npm run dev

You should see:

MongoDB connected successfully
Server running on port 5000

Then open:

http://localhost:5000

You should get:

{
    "success": true,
    "message": "Placely API is running"
}
11. Test creating a user

Use Postman/Thunder Client.

Request
POST http://localhost:5000/api/users/create
Body → JSON
{
    "name": "Abhay",
    "email": "abhay@example.com",
    "password": "123456"
}

You should receive something like:

{
    "success": true,
    "message": "User created successfully",
    "user": {
        "_id": "...",
        "name": "Abhay",
        "email": "abhay@example.com",
        "password": "123456",
        "createdAt": "...",
        "updatedAt": "..."
    }
}

Then check MongoDB Atlas and you'll see the user inside:

placely
 └── users
      └── Abhay
One change I strongly recommend for Placely

Before implementing actual authentication, install:

npm install bcryptjs jsonwebtoken

Then your architecture becomes:

Node + Express
       │
       ├── MongoDB
       │     └── Users / Profiles
       │
       └── PostgreSQL
             └── Exams / Questions /
                 Attempts / Answers / Results