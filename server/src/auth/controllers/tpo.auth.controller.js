import bcrypt from "bcryptjs";
import { randomInt } from "crypto";

import TPO from "../../tpo/models/tpo.model.js";
import { publishEmail } from "../../services/emailProducer.js";
import redis from "../../config/redis.js";

import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";

import setAuthCookie from "../utils/cookie.util.js";
import generateAccessToken from "../utils/token.util.js";


const FORGOT_PASSWORD_OTP_TTL_SECONDS = 10 * 60;


// ===============================
// TPO SIGNUP
// ===============================
const TPOSignup = async (req, res) => {
    try {

        const {
            fullname,
            email,
            password,
            collegeId,
            college,
            phone,
        } = req.body;


        // Required fields
        if (
            !fullname ||
            !email ||
            !password ||
            !collegeId ||
            !college
        ) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "All required fields are required"
                )
            );
        }


        // Normalize values
        const normalizedEmail = email.toLowerCase().trim();
        const normalizedCollegeId = collegeId.trim();


        // Only Gmail allowed
        if (!normalizedEmail.endsWith("@gmail.com")) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Only Gmail addresses are allowed"
                )
            );
        }


        // Strong password validation
        const strongPasswordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


        if (!strongPasswordRegex.test(password)) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                )
            );
        }


        // Check email and collegeId
        const existingTPO = await TPO.findOne({
            $or: [
                { email: normalizedEmail },
                { collegeId: normalizedCollegeId },
            ],
        });


        if (existingTPO) {

            if (existingTPO.email === normalizedEmail) {
                return res.status(409).json(
                    new ApiError(
                        409,
                        "TPO with this email already exists"
                    )
                );
            }



        }


        // Hash password
        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        // Create TPO
        const tpo = await TPO.create({
            fullname: fullname.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            collegeId: normalizedCollegeId,
            college: college.trim(),
            phone: phone?.trim(),
        });


        // Generate JWT
        const token = generateAccessToken(
            tpo,
            "tpo"
        );


        // Set authentication cookie
        setAuthCookie(res, token);


        // Welcome email
        await publishEmail({
            type: "WELCOME_EMAIL",
            to: normalizedEmail,
            subject: "Welcome to Placely 🎉",
            data: {
                name: tpo.fullname,
            },
        });


        return res.status(201).json(
            new ApiResponse(
                201,
                "TPO signup successful",
                {
                    id: tpo._id,
                    fullname: tpo.fullname,
                    email: tpo.email,
                    collegeId: tpo.collegeId,
                    college: tpo.college,
                    phone: tpo.phone,
                    role: tpo.role,
                }
            )
        );

    } catch (error) {

        console.error(
            "TPO Signup Error:",
            error
        );


        // Handle MongoDB duplicate key race condition
        if (error.code === 11000) {

            const duplicateField =
                Object.keys(error.keyPattern || {})[0];


            if (duplicateField === "email") {
                return res.status(409).json(
                    new ApiError(
                        409,
                        "TPO with this email already exists"
                    )
                );
            }


            if (duplicateField === "collegeId") {
                return res.status(409).json(
                    new ApiError(
                        409,
                        "TPO already exists for this college"
                    )
                );
            }
        }


        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error"
            )
        );
    }
};


// ===============================
// TPO LOGIN
// ===============================
const TPOLogin = async (req, res) => {
    try {

        const {
            email,
            password,
        } = req.body;


        if (!email || !password) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Email and Password are required"
                )
            );
        }


        // Normalize email
        const normalizedEmail =
            email.toLowerCase().trim();


        // Only Gmail allowed
        if (!normalizedEmail.endsWith("@gmail.com")) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Only Gmail addresses are allowed"
                )
            );
        }


        // Find TPO
        const tpo = await TPO.findOne({
            email: normalizedEmail,
        }).select("+password");


        if (!tpo) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "TPO with this email does not exist"
                )
            );
        }


        // Compare password
        const correctPassword =
            await bcrypt.compare(
                password,
                tpo.password
            );


        if (!correctPassword) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Wrong password"
                )
            );
        }


        // Generate JWT
        const token = generateAccessToken(
            tpo,
            "tpo"
        );


        // Set cookie
        setAuthCookie(res, token);


        return res.status(200).json(
            new ApiResponse(
                200,
                "Login successful",
                {
                    id: tpo._id,
                    fullname: tpo.fullname,
                    email: tpo.email,
                    collegeId: tpo.collegeId,
                    college: tpo.college,
                    phone: tpo.phone,
                    role: tpo.role,
                }
            )
        );

    } catch (error) {

        console.error(
            "TPO Login Error:",
            error
        );


        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error"
            )
        );
    }
};


// ===============================
// TPO LOGOUT
// ===============================
const TPOLogout = (req, res) => {

    res.clearCookie("accessToken");


    return res.status(200).json(
        new ApiResponse(
            200,
            "Logout successful"
        )
    );
};


// ===============================
// TPO FORGOT PASSWORD
// SEND OTP
// ===============================
const TPOForgotPassword = async (req, res) => {
    try {

        const { email } = req.body;


        if (!email) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Email is required"
                )
            );
        }


        const normalizedEmail =
            email.toLowerCase().trim();


        // Only Gmail allowed
        if (!normalizedEmail.endsWith("@gmail.com")) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Only Gmail addresses are allowed"
                )
            );
        }


        // Find TPO
        const tpo = await TPO.findOne({
            email: normalizedEmail,
        });


        if (!tpo) {
            return res.status(404).json(
                new ApiError(
                    404,
                    "No TPO exists with this email"
                )
            );
        }


        // Generate 6 digit OTP
        const otp =
            randomInt(
                100000,
                1000000
            ).toString();


        // Store OTP in Redis for 10 minutes
        await redis.set(
            `tpo:forgot-password-otp:${normalizedEmail}`,
            otp,
            "EX",
            FORGOT_PASSWORD_OTP_TTL_SECONDS
        );


        // Send OTP through RabbitMQ
        await publishEmail({
            type: "FORGOT_PASSWORD_OTP",
            to: normalizedEmail,
            subject: "Placely TPO Forgot Password OTP",
            data: {
                name: tpo.fullname,
                otp,
            },
        });


        return res.status(200).json(
            new ApiResponse(
                200,
                "Forgot Password OTP sent successfully"
            )
        );

    } catch (error) {

        console.error(
            "TPO Forgot Password Error:",
            error
        );


        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error"
            )
        );
    }
};


// ===============================
// TPO VERIFY OTP
// ===============================
const TPOVerifyOtp = async (req, res) => {
    try {

        const {
            email,
            otp,
        } = req.body;


        if (!email || !otp) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Email and OTP are required"
                )
            );
        }


        const normalizedEmail =
            email.toLowerCase().trim();


        // Only Gmail allowed
        if (!normalizedEmail.endsWith("@gmail.com")) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Only Gmail addresses are allowed"
                )
            );
        }


        // Get OTP from Redis
        const storedOtp = await redis.get(
            `tpo:forgot-password-otp:${normalizedEmail}`
        );


        if (!storedOtp || storedOtp !== otp) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Invalid or expired OTP"
                )
            );
        }


        // Delete OTP after successful verification
        await redis.del(
            `tpo:forgot-password-otp:${normalizedEmail}`
        );


        return res.status(200).json(
            new ApiResponse(
                200,
                "OTP verified successfully"
            )
        );

    } catch (error) {

        console.error(
            "TPO Verify OTP Error:",
            error
        );


        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error"
            )
        );
    }
};


const TPORemove = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json(
        new ApiResponse(400, "Email is required", {})
      );
    }

    const normalizeEmail = email.toLowerCase().trim();

    const result = await TPO.deleteOne({
      email: normalizeEmail
    });

    if (result.deletedCount === 0) {
      return res.status(404).json(
        new ApiResponse(404, "Tpo does not exist", {})
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        "Tpo account deleted successfully",
        {}
      )
    );
  } catch (error) {
    return res.status(500).json(
      new ApiResponse(500, "Internal Server Error", error)
    );
  }
};


export {
    TPOSignup,
    TPOLogin,
    TPOLogout,
    TPOForgotPassword,
    TPOVerifyOtp,
    TPORemove
};