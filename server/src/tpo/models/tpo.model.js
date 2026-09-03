import mongoose from "mongoose";

const tpoUserSchema = new mongoose.Schema(
    {
        collegeId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        college :{
            type : String ,
            required : true 
        } ,
        fullname: {
            type: String,
            required: true,
            trim: true,
        },

        // googleId: {
        //     type: String,
        //     unique: true,
        //     sparse: true,
        //     index: true
        // },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
        },

        refreshToken: {
            type: String,
            default: null,
        },

        role: {
            type: String,
            default: "tpo",
        },

        phone: {
            type: String,
            trim: true,
        },

        profileImage: {
            type: String,
            default: null,
        },

        
        isVerified: {
            type: Boolean,
            default: false,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const TPOUser = mongoose.model("TPOUser", tpoUserSchema);

export default TPOUser;