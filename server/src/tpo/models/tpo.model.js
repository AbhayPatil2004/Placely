import mongoose from "mongoose";

const tpoUserSchema = new mongoose.Schema(
    {
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
            required: true,
            select: false,
        },

        role: {
            type: String,
            enum: ["tpo"],
            default: "tpo",
            required: true,
        },

        profileImage: {
            type: String,
            default: null,
            trim: true,
        },

        collegeId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        college: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const TPOUser = mongoose.model("TPOUser", tpoUserSchema);

export default TPOUser;