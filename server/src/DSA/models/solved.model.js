import mongoose from "mongoose";

const SolvedSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },

        problemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Problem",
            required: true,
        },

        status: {
            type: String,
            enum: ["SOLVED", "ATTEMPTED", "NOT_SOLVED"],
            default: "NOT_SOLVED",
        },
    },
    {
        timestamps: true,
    }
);

// One student should have only one status record for one problem
SolvedSchema.index(
    { studentId: 1, problemId: 1 },
    { unique: true }
);

const Solved = mongoose.model("Solved", SolvedSchema);

export default Solved;