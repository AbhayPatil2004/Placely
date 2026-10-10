import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
            trim: true,
        },

        options: [
            {
                type: String,
                required: true,
                trim: true,
            },
        ],

        correctAnswer: {
            type: Number,
            required: true,
        },

        explanation: {
            type: String,
            trim: true,
            default: "",
        },

        marks: {
            type: Number,
            default: 1,
            min: 1,
        },
    },
    {
        _id: false,
    }
);

const mockTestSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        mockTestNumber: {
            type: Number,
            required: true,
            min: 1,
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },

        subject: {
            type: String,
            enum: [
                "Object Oriented Programming",
                "Computer Networks",
                "DataBase Management System",
                "Software Engineering",
                "Operating System",
                "Quantitative Aptitude",
                "Verbal Aptitude",
                "Logical Aptitude",
                "Technical",
                "Aptitude",
            ],
            required: true,
            trim: true,
        },
        difficulty: {
            type: String,
            enum: ["EASY", "MEDIUM", "HARD", "MIXED"],
            default: "MIXED",
        },
        totalMarks: {
            type: Number,
            required: true,
            min: 1,
        },

        questions: {
            type: [questionSchema],
            required: true,
            validate: {
                validator: function (questions) {
                    return questions.length >= 1;
                },
                message: "Mock test must contain at least one question",
            },
        },

        duration: {
            type: Number,
            required: true,
            min: 1,
            // duration in minutes
        },

        instructions: [
            {
                type: String,
                trim: true,
            }
        ],
        status: {
            type: String,
            enum: ["DRAFT", "PUBLISHED", "UNPUBLISHED"],
            default: "DRAFT",
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const MockTest = mongoose.model("MockTest", mockTestSchema);

export default MockTest;