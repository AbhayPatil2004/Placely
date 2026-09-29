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
// PROJECT SCHEMA
// =========================

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },

        technologies: {
            type: [String],
            default: [],
        },

        githubUrl: {
            type: String,
            trim: true,
            default: null,
        },

        liveUrl: {
            type: String,
            trim: true,
            default: null,
        },

        startDate: {
            type: Date,
        },

        endDate: {
            type: Date,
        },
    },
    {
        _id: true,
    }
);

// =========================
// CERTIFICATE SCHEMA
// =========================

const certificateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        issuingOrganization: {
            type: String,
            required: true,
            trim: true,
        },

        issueDate: {
            type: Date,
        },

        credentialId: {
            type: String,
            trim: true,
            default: null,
        },

        credentialUrl: {
            type: String,
            trim: true,
            default: null,
        },
    },
    {
        _id: true,
    }
);

// =========================
// ACHIEVEMENT SCHEMA
// =========================

const achievementSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },

        date: {
            type: Date,
        },

        organization: {
            type: String,
            trim: true,
            default: null,
        },

        proofUrl: {
            type: String,
            trim: true,
            default: null,
        },
    },
    {
        _id: true,
    }
);

// =========================
// HACKATHON SCHEMA
// =========================

const hackathonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        organization: {
            type: String,
            trim: true,
        },

        role: {
            type: String,
            enum: [
                "PARTICIPANT",
                "TEAM_LEAD",
                "TEAM_MEMBER",
                "MENTOR",
                "OTHER",
            ],
            default: "PARTICIPANT",
        },

        teamName: {
            type: String,
            trim: true,
            default: null,
        },

        projectName: {
            type: String,
            trim: true,
            default: null,
        },

        description: {
            type: String,
            trim: true,
        },

        technologies: {
            type: [String],
            default: [],
        },

        position: {
            type: String,
            trim: true,
            default: null,
        },

        date: {
            type: Date,
        },

        certificateUrl: {
            type: String,
            trim: true,
            default: null,
        },

        projectUrl: {
            type: String,
            trim: true,
            default: null,
        },
    },
    {
        _id: true,
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
        // PROJECTS
        // =========================

        projects: {
            type: [projectSchema],
            default: [],
        },

        // =========================
        // CERTIFICATES
        // =========================

        certificates: {
            type: [certificateSchema],
            default: [],
        },

        // =========================
        // ACHIEVEMENTS
        // =========================

        achievements: {
            type: [achievementSchema],
            default: [],
        },

        // =========================
        // HACKATHONS
        // =========================

        hackathons: {
            type: [hackathonSchema],
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