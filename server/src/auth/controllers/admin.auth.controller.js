import bcrypt from "bcryptjs";
import { randomInt, randomUUID } from "crypto";
import jwt from "jsonwebtoken";
import Admin from "../../admin/models/admin.models.js";
import generateAdminTokensAndSetCookies from "../../utils/admin.token.util.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { publishEmail } from "../../services/emailProducer.js";
import redis from "../../config/redis.js";
import apiError from "../../utils/apiError.js";
import apiResponse from "../../utils/apiResponse.js";

const PASSWORD_RESET_OTP_TTL_SECONDS = 10 * 60;
const PASSWORD_RESET_TOKEN_TTL_SECONDS = 10 * 60;

export const AdminSignup = asyncHandler(async (req, res) => {
    const { fullname, email, role, password } = req.body;
    try {
        if (!fullname || !email || !password) {
            return res.status(400).json(new apiResponse(400, "All fields are required"));
        }
        
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json(new apiResponse(400, "Admin with this email already exists"));
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newAdmin = new Admin({ fullname, email, role, password: hashedPassword });
        await newAdmin.save();
        const { accessToken, refreshToken } = generateAdminTokensAndSetCookies(res, newAdmin);
        return res.status(201).json(new apiResponse(201, "Admin registered successfully", { accessToken, refreshToken }));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new apiResponse(500, "Internal Server Error")); 
    }
})

export const AdminLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json(new apiResponse(400, "Email and password are required"));
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json(new apiResponse(401, "Invalid email or password"));
        }
        
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json(new apiResponse(401, "Invalid email or password"));
        }

        const { accessToken, refreshToken } = generateAdminTokensAndSetCookies(res, admin);
        return res.status(200).json(new apiResponse(200, "Admin logged in successfully", { accessToken, refreshToken }));

    }catch (error) {
        console.error(error);
        return res.status(500).json(new apiResponse(500, "Internal Server Error")); 
    }
});

export const AdminLogout = asyncHandler(async (req, res) => {
    try {
        res.clearCookie("adminAccessToken");
        res.clearCookie("adminRefreshToken");
        res.clearCookie("adminRole");
        return res.status(200).json(new apiResponse(200, "Admin logged out successfully"));
    }catch (error) {
        console.error(error);
        return res.status(500).json(new apiResponse(500, "Internal Server Error")); 
    }
});

export const AdminRefreshToken = asyncHandler(async (req, res) => {
    try {
        const refreshToken = req.cookies.adminRefreshToken;
        if (!refreshToken) {
            return res.status(401).json(new apiResponse(401, "Refresh token not found"));
        }
        const decoded = jwt.verify(refreshToken, process.env.JWT_ADMIN_REFRESH_SECRET || process.env.JWT_REFRESH_SECRET);
        const admin = await Admin.findById(decoded.adminId);
        if (!admin) {
            return res.status(401).json(new apiResponse(401, "Admin not found"));
        }
        const { accessToken, refreshToken: newRefreshToken } = generateAdminTokensAndSetCookies(res, admin);
        return res.status(200).json(new apiResponse(200, "Token refreshed successfully", { accessToken, refreshToken: newRefreshToken }));
    }catch (error) {
        console.error(error);
        return res.status(500).json(new apiResponse(500, "Internal Server Error")); 
    }
});

export const AdminForgotPassword = asyncHandler(async (req, res) => {
    const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
    if (!email) {
        return res.status(400).json(new apiResponse(400, "Email is required"));
    }

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json(new apiResponse(404, "Admin not found"));
        }

        const otp = randomInt(100000, 1000000).toString();
        await redis.set(`admin:password-reset:otp:${email}`, otp, "EX", PASSWORD_RESET_OTP_TTL_SECONDS);
        await publishEmail({
            type: "PASSWORD_RESET_OTP",
            to: email,
            subject: "Placely password reset OTP",
            data: { name: admin.fullname, otp },
        });

        return res.status(200).json(new apiResponse(200, "Password reset OTP sent successfully"));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new apiResponse(500, "Internal Server Error"));
    }
});

export const AdminVerifyOtp = asyncHandler(async (req, res) => {
    const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const otp = typeof req.body.otp === "string" ? req.body.otp.trim() : "";
    if (!email || !/^\d{6}$/.test(otp)) {
        return res.status(400).json(new apiResponse(400, "Email and OTP are required"));
    }

    try {
        const storedOtp = await redis.get(`admin:password-reset:otp:${email}`);
        if (!storedOtp || storedOtp !== otp) {
            return res.status(400).json(new apiResponse(400, "Invalid or expired OTP"));
        }

        const resetToken = randomUUID();
        await redis.set(`admin:password-reset:verified:${resetToken}`, email, "EX", PASSWORD_RESET_TOKEN_TTL_SECONDS);
        await redis.del(`admin:password-reset:otp:${email}`);
        return res.status(200).json(new apiResponse(200, "OTP verified successfully", { resetToken }));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new apiResponse(500, "Internal Server Error"));
    }
});

export const AdminResetPassword = asyncHandler(async (req, res) => {
    const { resetToken, newPassword } = req.body;
    if (!resetToken || typeof newPassword !== "string" || !newPassword) {
        return res.status(400).json(new apiResponse(400, "Reset token and new password are required"));
    }
    if (newPassword.length < 6) {
        return res.status(400).json(new apiResponse(400, "Password must be at least 6 characters long"));
    }

    try {
        const email = await redis.get(`admin:password-reset:verified:${resetToken}`);
        if (!email) {
            return res.status(400).json(new apiResponse(400, "Invalid or expired reset token"));
        }

        const password = await bcrypt.hash(newPassword, 10);
        const admin = await Admin.findOneAndUpdate({ email }, { password }, { new: true, runValidators: true });
        if (!admin) {
            return res.status(404).json(new apiResponse(404, "Admin not found"));
        }

        await redis.del(`admin:password-reset:verified:${resetToken}`);
        return res.status(200).json(new apiResponse(200, "Password updated successfully"));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new apiResponse(500, "Internal Server Error"));
    }
});