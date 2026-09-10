import mongoose from "mongoose";

// =========================
// CODING PROFILE SCHEMA
// =========================

const codingProfileSchema = new mongoose.Schema(
    {
        platform: {
            type: String,
            enum: [
                "LEETCODE",
                "GITHUB",
                "CODECHEF",
                "CODEFORCES",
                "GEEKSFORGEEKS",
                "HACKERRANK",
                "LINKEDIN",
                "OTHER",
            ],
            required: true,
        },

        profileUrl: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        _id: false,
    }
);

// =========================
// STUDENT SCHEMA
// =========================

const studentSchema = new mongoose.Schema(
    {
        // =========================
        // BASIC PROFILE
        // =========================

        fullname: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },

        password: {
            type: String,
            required: function () {
                return this.authProvider === "local";
            },
            select: false,
        },

        profileImage: {
            type: String,
            default: null,
            trim: true,
        },

        role: {
            type: String,
            enum: ["student"],
            default: "student",
            required: true,
        },

        // =========================
        // AUTHENTICATION
        // =========================

        authProvider: {
            type: String,
            enum: ["local", "google"],
            default: "local",
        },

        googleId: {
            type: String,
            unique: true,
            sparse: true,
            index: true,
        },

        // =========================
        // STUDENT DETAILS
        // =========================

        studentId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        // =========================
        // ACADEMIC DETAILS
        // =========================

        university: {
            type: String,
            // required: true,
            trim: true,
        },

        college: {
            type: String,
            required: true,
            trim: true,
        },

        collegeId: {
            type: String,
            required: true,
            index: true,
        },

        branch: {
            type: String,
            enum: [
                "Computer Science and Engineering",
                "Information Technology",
                "Artificial Intelligence and Data Science",
                "Electronics and Telecommunication Engineering",
                "Other",
            ],
            required: true,
            index: true,
        },

        currentYear: {
            type: Number,
            required: true,
        },

        passingYear: {
            type: Number,
            required: true,
        },

        cgpa: {
            type: Number,
            min: 0,
            max: 10,
        },

        tenthPercentage: {
            type: Number,
            min: 0,
            max: 100,
        },

        twelfthPercentage: {
            type: Number,
            min: 0,
            max: 100,
        },

        // =========================
        // SKILLS
        // =========================

        skills: {
            type: [String],
            default: [],
        },

        // =========================
        // CODING PROFILES
        // =========================

        codingProfiles: {
            type: [codingProfileSchema],
            default: [],
        },

        // =========================
        // RESUME
        // =========================

        resumeUrl: {
            type: String,
            default: null,
            trim: true,
        },

        // =========================
        // PORTFOLIO
        // =========================

        portfolioUrl: {
            type: String,
            default: null,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;