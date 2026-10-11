import mongoose from "mongoose";

const topicProgressSchema = new mongoose.Schema(
    {
        topicId: {
            type: Number,
            required: true
        },

        topic: {
            type: String,
            required: true
        },

        isCompleted: {
            type: Boolean,
            default: false
        },

        completedAt: {
            type: Date,
            default: null
        }
    },
    { _id: false }
);

const subjectProgressSchema = new mongoose.Schema(
    {
        subject: {
            type: String,
            required: true,
            enum: [
                "Object Oriented Programming",
                "Computer Networks",
                "DataBase Management System",
                "Software Engineering",
                "Operating System",
                "Quantitative Aptitude",
                "Verbal Aptitude",
                "Logical Aptitude"
            ]
        },

        topics: {
            type: [topicProgressSchema],
            default: []
        }
    },
    { _id: false }
);

const learningProgressSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
            unique: true,
            index: true
        },

        subjects: {
            type: [subjectProgressSchema],
            default: []
        }
    },
    {
        timestamps: true
    }
);

const LearningProgress = mongoose.model(
    "LearningProgress",
    learningProgressSchema
);

export default LearningProgress;