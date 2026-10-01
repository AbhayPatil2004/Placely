import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
            index: true,
        },

        problemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Problem",
            required: true,
            index: true,
        },

        language: {
            type: String,
            enum: ["cpp", "java", "js", "py"],
            required: true,
        },

        code: {
            type: String,
            required: true,
        },


        status: {
            type: String,
            enum: [
                "PENDING",
                "QUEUED",
                "RUNNING",
                "ACCEPTED",
                "WRONG_ANSWER",
                "TIME_LIMIT_EXCEEDED",
                "MEMORY_LIMIT_EXCEEDED",
                "RUNTIME_ERROR",
                "COMPILE_ERROR",
                "SYSTEM_ERROR",
            ],
            default: "PENDING",
            index: true,
        },

        totalTestCases: {
            type: Number,
            default: 0,
        },

        passedTestCases: {
            type: Number,
            default: 0,
        },

        executionTime: {
            type: Number,
            default: 0,
        },

        memoryUsed: {
            type: Number,
            default: 0,
        },

        errorMessage: {
            type: String,
            default: "",
        },

        totalTestCases: {
            type: Number,
            default: 0,
        },

        passedTestCases: {
            type: Number,
            default: 0,
        },

        testCaseResults: {
            type: [testCaseResultSchema],
            default: [],
        },

        executionTime: {
            type: Number,
            default: 0,
        },

        memoryUsed: {
            type: Number,
            default: 0,
        },

        errorMessage: {
            type: String,
            default: "",
        },

        submittedAt: {
            type: Date,
            default: Date.now,
        },

        completedAt: {
            type: Date,
            default: null,
        },
    },
    { timestamps: true }
);

submissionSchema.index({
    studentId: 1,
    problemId: 1,
    submittedAt: -1,
});

const Submission = mongoose.model(
    "Submission",
    submissionSchema
);

export default Submission;