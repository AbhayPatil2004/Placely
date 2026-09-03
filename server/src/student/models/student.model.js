import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema(
    {
        semester: {
            type: Number,
            required: true
        },
        sgpa: {
            type: Number,
            min: 0,
            max: 10
        },
        cgpa: {
            type: Number,
            min: 0,
            max: 10
        }
    },
    { _id: false }
);

const codingProfileSchema = new mongoose.Schema(
    {
        platform: {
            type: String,
            enum: [
                "LEETCODE",
                "GITHUB",
                "CODECHEF",
                "GEEKSFORGEEKS",
                "HACKERRANK",
                "LINKEDIN",
                "OTHER"
            ],
            required: true
        },

        username: String,

        profileUrl: String,

        problemsSolved: {
            type: Number,
            default: 0
        },

        rating: {
            type: Number,
            default: null
        }
    },
    { _id: false }
);

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        topic: String,

        summary: String,

        techStack: [String],

        githubUrl: String,

        liveUrl: String,

        imageUrl: String,

        startDate: Date,

        endDate: Date
    },
    { _id: true }
);

const internshipSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true
        },

        role: String,

        field: String,

        domain: String,

        startDate: Date,

        endDate: Date,

        description: String,

        certificateUrl: String
    },
    { _id: true }
);

const hackathonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        organizer: String,

        date: Date,

        summary: String,

        position: String,

        projectName: String,

        certificateUrl: String
    },
    { _id: true }
);

const certificateSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        issuer: String,

        domain: String,

        summary: String,

        issueDate: Date,

        credentialUrl: String
    },
    { _id: true }
);

const studentSchema = new mongoose.Schema(
    {
        // =========================
        // BASIC PROFILE
        // =========================

        fullname: {
            type: String,
            required: true,
            trim: true
        },

        studentId :{
            type : Number ,
            required : true ,
            unique : true 
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        password: {
            type: String,
            required: function(){
                return this.authProvider === "local";
            },
            select: false
        },
        
        authProvider: {
            type: String,
            enum: ["local", "google"],
            default: "local"
        },

        googleId: {
            type: String,
            unique: true,
            sparse: true,
            index: true
        },

        refreshedToken: {
            type: String,
            select: false
        },

        branch: {
            type: String,
            enum: [
                "COMP",
                "IT",
                "AIDS",
                "ENTC",
                "OTHER"
            ],
            required: true,
            index: true
        },

        college :{
            type : String ,
            required : true 
        },

        collegeId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            index: true
        },

        currentYear: {
            type: Number,
            required: true
        },

        passingYear: {
            type: Number,
            required: true
        },

        tenthPercentage: {
            type: Number,
            min: 0,
            max: 100
        },

        twelfthPercentage: {
            type: Number,
            min: 0,
            max: 100
        },

        // =========================
        // ACADEMICS
        // =========================

        semesters: {
            type: [semesterSchema],
            default: []
        },

        // =========================
        // CODING PROFILES
        // =========================

        codingProfiles: {
            type: [codingProfileSchema],
            default: []
        },

        // =========================
        // LINKEDIN
        // =========================

        linkedin: String,

        // =========================
        // PROJECTS
        // =========================

        projects: {
            type: [projectSchema],
            default: []
        },

        // =========================
        // INTERNSHIPS
        // =========================

        internships: {
            type: [internshipSchema],
            default: []
        },

        // =========================
        // HACKATHONS
        // =========================

        hackathons: {
            type: [hackathonSchema],
            default: []
        },

        // =========================
        // CERTIFICATES
        // =========================

        certificates: {
            type: [certificateSchema],
            default: []
        }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;