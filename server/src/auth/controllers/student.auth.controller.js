import bcrypt from "bcryptjs";
import { randomInt, randomUUID } from "crypto";
import jwt from "jsonwebtoken";
import Student from "../../student/models/student.model.js";
import generateTokensAndSetCookies from "../../utils/student.token.util.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { publishEmail } from "../../services/emailProducer.js";
import redis from "../../config/redis.js";
import apiError from "../../utils/apiError.js";
import apiResponse from "../../utils/apiResponse.js";

const PASSWORD_RESET_OTP_TTL_SECONDS = 10 * 60;
const PASSWORD_RESET_TOKEN_TTL_SECONDS = 10 * 60;

//Signup controller
export const StudentSignup = asyncHandler(async (req, res) => {
  const {
    fullname,
    studentId,
    email,
    branch,
    college,
    collegeId,
    currentYear,
    passingYear,
    password,
  } = req.body;
  try {
    if (!fullname || !studentId || !email || !password) {
      return res
        .status(400)
        .json(new apiResponse(400, "All fields are required"));
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json(
          new apiResponse(400, "Password must be at least 6 characters long"),
        );
    }

    const existingStudent = await Student.findOne({
      $or: [{ email }, { studentId }],
    });
    if (existingStudent) {
      return res
        .status(400)
        .json(
          new apiResponse(
            400,
            "Student with this email or studentId already exists",
          ),
        );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const parseArray = (field) => {
      if (field === undefined || field === null) return [];
      if (Array.isArray(field)) return field;
      if (typeof field !== "string") return [String(field)];

      try {
        const parsed = JSON.parse(field);
        return Array.isArray(parsed) ? parsed.map(String) : [String(parsed)];
      } catch (e) {
        return field
          .split(",")
          .map((item) => item.trim())
          .filter(boolean);
      }
    };

    const student = new Student({
      fullname,
      studentId,
      email,
      password: hashedPassword,
      branch,
      college,
      collegeId,
      currentYear,
      passingYear,
    });
    await student.save();

    generateTokensAndSetCookies(student, student._id);

    const { password: _pw, ...studentData } = student.toObject(); //security measure to not send password in response

    res
      .status(201)
      .json(new apiResponse(201, "Sucessfully registered", studentData));
  } catch (err) {
    console.error(err);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});

//Login controller

export const StudentLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json(new apiResponse(400, "Email and password are required"));
    }

    const user = await Student.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(401)
        .json(new apiResponse(401, "Invalid email or password"));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json(new apiResponse(401, "Invalid email or password"));
    }

    generateTokensAndSetCookies(res, user._id);
    const { password: _pw, ...userData } = user.toObject(); //security measure to not send password in response

    res.status(200).json(new apiResponse(200, "Login successful", userData));
  } catch (err) {
    console.error(err);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});

//Logout controller

export const StudentLogout = asyncHandler(async (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.status(200).json(new apiResponse(200, "Logout successful"));
  } catch (err) {
    console.error(err);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});

// Refresh Token controller

export const StudentRefreshToken = asyncHandler(async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return res
        .status(401)
        .json(new apiResponse(401, "Refresh token not found"));
    }
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const userId = decoded.userId;
    const user = await Student.findById(userId);
    if (!user) {
      return res.status(401).json(new apiResponse(401, "User not found"));
    }
    generateTokensAndSetCookies(res, user._id);

    return res
      .status(200)
      .json(new apiResponse(200, "Token refreshed successfully"));
  } catch (err) {
    console.error(err);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});

export const StudentForgotPassword = asyncHandler(async (req, res) => {
  const email =
    typeof req.body.email === "string"
      ? req.body.email.trim().toLowerCase()
      : "";

  if (!email) {
    return res.status(400).json(new apiResponse(400, "Email is required"));
  }

  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(404).json(new apiResponse(404, "Student not found"));
    }

    const otp = randomInt(100000, 1000000).toString();
    await redis.set(
      `student:password-reset:otp:${email}`,
      otp,
      "EX",
      PASSWORD_RESET_OTP_TTL_SECONDS,
    );

    await publishEmail({
      type: "PASSWORD_RESET_OTP",
      to: email,
      subject: "Placely password reset OTP",
      data: {
        name: student.fullname,
        otp,
      },
    });

    return res
      .status(200)
      .json(new apiResponse(200, "Password reset OTP sent successfully"));
  } catch (error) {
    console.error(error);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});

export const StudentVerifyOtp = asyncHandler(async (req, res) => {
  const email =
    typeof req.body.email === "string"
      ? req.body.email.trim().toLowerCase()
      : "";
  const otp = typeof req.body.otp === "string" ? req.body.otp.trim() : "";

  if (!email || !/^\d{6}$/.test(otp)) {
    return res
      .status(400)
      .json(new apiResponse(400, "Email and OTP are required"));
  }

  try {
    const storedOtp = await redis.get(`student:password-reset:otp:${email}`);
    if (!storedOtp || storedOtp !== otp) {
      return res
        .status(400)
        .json(new apiResponse(400, "Invalid or expired OTP"));
    }

    const resetToken = randomUUID();
    await redis.set(
      `student:password-reset:verified:${resetToken}`,
      email,
      "EX",
      PASSWORD_RESET_TOKEN_TTL_SECONDS,
    );
    await redis.del(`student:password-reset:otp:${email}`);

    return res
      .status(200)
      .json(new apiResponse(200, "OTP verified successfully", { resetToken }));
  } catch (error) {
    console.error(error);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});

export const StudentResetPassword = asyncHandler(async (req, res) => {
  const { resetToken, newPassword } = req.body;

  if (!resetToken || typeof newPassword !== "string" || !newPassword) {
    return res
      .status(400)
      .json(new apiResponse(400, "Reset token and new password are required"));
  }
  if (newPassword.length < 6) {
    return res
      .status(400)
      .json(
        new apiResponse(400, "Password must be at least 6 characters long"),
      );
  }

  try {
    const email = await redis.get(
      `student:password-reset:verified:${resetToken}`,
    );
    if (!email) {
      return res
        .status(400)
        .json(new apiResponse(400, "Invalid or expired reset token"));
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const student = await Student.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true, runValidators: true },
    );
    if (!student) {
      return res.status(404).json(new apiResponse(404, "Student not found"));
    }

    await redis.del(`student:password-reset:verified:${resetToken}`);
    return res
      .status(200)
      .json(new apiResponse(200, "Password updated successfully"));
  } catch (error) {
    console.error(error);
    return res.status(500).json(new apiResponse(500, "Internal Server Error"));
  }
});
