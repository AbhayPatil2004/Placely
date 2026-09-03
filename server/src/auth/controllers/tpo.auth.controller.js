import bcrypt from "bcryptjs";
import { randomInt, randomUUID } from "crypto";
import jwt from "jsonwebtoken";
import TPO from "../models/tpo.model.js";
import generateTPOTokensAndSetCookies from "../../utils/tpo.token.util.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { publishEmail } from "../../services/emailProducer.js";
import redis from "../../config/redis.js";
import apiError from "../../utils/apiError.js";
import apiResponse from "../../utils/apiResponse.js";

const PASSWORD_RESET_OTP_TTL_SECONDS = 10 * 60;
const PASSWORD_RESET_TOKEN_TTL_SECONDS = 10 * 60;

export const TPOSignup = asyncHandler(async (req, res) => {
  const { fullname, email, password, college, collegeId, phone } = req.body;
  try {
    if (!fullname || !email || !password || !collegeId || !college || !phone) {
      return res
        .status(400)
        .json(new apiResponse(400, "All fields are required"));
    }

    const existingTPO = await TPO.findOne({ $or: [{ email }, { collegeId }] });
    if (existingTPO) {
      return res
        .status(400)
        .json(
          new apiResponse(
            400,
            "TPO with this email or college ID already exists",
          ),
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newTPO = new TPO({
      fullname,
      email,
      password: hashedPassword,
      college,
      collegeId,
      phone,
    });

    await newTPO.save();

    const { accessToken, refreshToken } = generateTPOTokensAndSetCookies(
      res,
      newTPO,
    );
    return res
      .status(201)
      .json(
        new apiResponse(201, "TPO registered successfully", {
          accessToken,
          refreshToken,
        }),
      );
  } catch (error) {
    console.error(error);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});

export const TPOLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json(new apiResponse(400, "Email and password are required"));
    }
    const tpo = await TPO.findOne({ email });
    if (!tpo) {
      return res
        .status(401)
        .json(new apiResponse(401, "Invalid email or password"));
    }
    if (!tpo.isVerified) {
      return res
        .status(403)
        .json(
          new apiResponse(
            403,
            "Account not verified. Please verify your email/account first.",
          ),
        );
    }
    if (!tpo.isActive) {
      return res
        .status(403)
        .json(
          new apiResponse(
            403,
            "Your account has been deactivated. Contact administration.",
          ),
        );
    }
    const isMatch = await bcrypt.compare(password, tpo.password);
    if (!isMatch) {
      return res
        .status(401)
        .json(new apiResponse(401, "Invalid email or password"));
    }

    const { accessToken, refreshToken } = generateTPOTokensAndSetCookies(
      res,
      tpo,
    );
    tpoUser.refreshToken = refreshToken;
    await tpoUser.save({ validateBeforeSave: false });


    const userResponse = await TPOUser.findById(tpoUser._id).select(
      "-password -refreshToken",
    );
    return res
      .status(200)
      .json(
        new apiResponse(200, "TPO logged in successfully", {
          accessToken,
          refreshToken,
        }),
      );
  } catch (error) {
    console.error(error);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});

export const TPOLogout = asyncHandler(async (req, res) => {
    try {
        res.clearCookie("tpoAccessToken");
        res.clearCookie("tpoRefreshToken");
        res.clearCookie("tpoRole");
        return res.status(200).json(new apiResponse(200, "TPO logged out successfully"));
    }catch (error) {
        console.error(error);
        return res.status(500).json(new apiResponse(500, "Internal Server Error")); 
    }
});

export const TPOForgotPassword = asyncHandler(async (req, res) => {
  const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
  if (!email) {
    return res.status(400).json(new apiResponse(400, "Email is required"));
  }

  try {
    const tpo = await TPO.findOne({ email });
    if (!tpo) {
      return res.status(404).json(new apiResponse(404, "TPO not found"));
    }

    const otp = randomInt(100000, 1000000).toString();
    await redis.set(`tpo:password-reset:otp:${email}`, otp, "EX", PASSWORD_RESET_OTP_TTL_SECONDS);
    await publishEmail({
      type: "PASSWORD_RESET_OTP",
      to: email,
      subject: "Placely password reset OTP",
      data: { name: tpo.fullname, otp },
    });

    return res.status(200).json(new apiResponse(200, "Password reset OTP sent successfully"));
  } catch (error) {
    console.error(error);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});

export const TPOVerifyOtp = asyncHandler(async (req, res) => {
  const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
  const otp = typeof req.body.otp === "string" ? req.body.otp.trim() : "";
  if (!email || !/^\d{6}$/.test(otp)) {
    return res.status(400).json(new apiResponse(400, "Email and OTP are required"));
  }

  try {
    const storedOtp = await redis.get(`tpo:password-reset:otp:${email}`);
    if (!storedOtp || storedOtp !== otp) {
      return res.status(400).json(new apiResponse(400, "Invalid or expired OTP"));
    }

    const resetToken = randomUUID();
    await redis.set(`tpo:password-reset:verified:${resetToken}`, email, "EX", PASSWORD_RESET_TOKEN_TTL_SECONDS);
    await redis.del(`tpo:password-reset:otp:${email}`);
    return res.status(200).json(new apiResponse(200, "OTP verified successfully", { resetToken }));
  } catch (error) {
    console.error(error);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});

export const TPOResetPassword = asyncHandler(async (req, res) => {
  const { resetToken, newPassword } = req.body;
  if (!resetToken || typeof newPassword !== "string" || !newPassword) {
    return res.status(400).json(new apiResponse(400, "Reset token and new password are required"));
  }
  if (newPassword.length < 6) {
    return res.status(400).json(new apiResponse(400, "Password must be at least 6 characters long"));
  }

  try {
    const email = await redis.get(`tpo:password-reset:verified:${resetToken}`);
    if (!email) {
      return res.status(400).json(new apiResponse(400, "Invalid or expired reset token"));
    }

    const password = await bcrypt.hash(newPassword, 10);
    const tpo = await TPO.findOneAndUpdate({ email }, { password }, { new: true, runValidators: true });
    if (!tpo) {
      return res.status(404).json(new apiResponse(404, "TPO not found"));
    }

    await redis.del(`tpo:password-reset:verified:${resetToken}`);
    return res.status(200).json(new apiResponse(200, "Password updated successfully"));
  } catch (error) {
    console.error(error);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});
