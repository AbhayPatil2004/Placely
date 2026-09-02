import mongoose from "mongoose";

const tpUserSchema = new mongoose.Schema(
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

        designation: {
            type: String,
            required: true,
            trim: true,
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

const TPUser = mongoose.model("TPUser", tpUserSchema);

export default TPUser;