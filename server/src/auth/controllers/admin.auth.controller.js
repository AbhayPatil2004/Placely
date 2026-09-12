import bcrypt from "bcryptjs";
import { randomInt } from "crypto";
import Admin from "../../admin/models/admin.models.js";
import { publishEmail } from "../../services/emailProducer.js";
import redis from "../../config/redis.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import setAuthCookie from "../utils/cookie.util.js";
import generateAccessToken from "../utils/token.util.js";

const FORGOT_PASSWORD_OTP_TTL_SECONDS = 10 * 60;

const AdminSignup = async (req, res) => {

    try {

        const { fullname, email, password } = req.body;

        // Check required fields
        if (!fullname || !email || !password) {
            return res.status(400).json(
                new ApiError(400, "All fields are required")
            );
        }

        // Normalize email
        const normalizedEmail = email.toLowerCase().trim();

        // Only Gmail allowed
        if (!normalizedEmail.endsWith("@gmail.com")) {
            return res.status(400).json(
                new ApiError(400, "Only Gmail addresses are allowed")
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

        // Check existing admin
        const existingAdmin = await Admin.findOne({
            email: normalizedEmail
        });

        if (existingAdmin) {
            return res.status(409).json(
                new ApiError(
                    409,
                    "Admin already exists with this email"
                )
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create admin
        const admin = await Admin.create({
            fullname: fullname.trim(),
            email: normalizedEmail,
            password: hashedPassword
        });

        // Generate JWT
        const token = generateAccessToken(admin, "admin");

        // Set authentication cookie
        setAuthCookie(res, token);

        // Send welcome email
        await publishEmail({
            type: "WELCOME_EMAIL",
            to: normalizedEmail,
            subject: "Welcome to Placely 🎉",
            data: {
                name: admin.fullname
            }
        });

        // Success response
        return res.status(201).json(
            new ApiResponse(
                201,
                "Admin signup successful",
                {
                    id: admin._id,
                    fullname: admin.fullname,
                    email: admin.email,
                    role: admin.role
                }
            )
        );

    } catch (error) {

        console.error("Admin signup error:", error);

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                error
            )
        );
    }
};

const AdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Email and Password are required"
                )
            );
        }

        const normalizedEmail = email.toLowerCase().trim();

        // Only Gmail allowed
        if (!normalizedEmail.endsWith("@gmail.com")) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Only Gmail addresses are allowed"
                )
            );
        }

        const admin = await Admin.findOne({
            email: normalizedEmail,
        }).select("+password");

        if (!admin) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Admin with this email does not exist"
                )
            );
        }

        // Compare password
        const correctPassword = await bcrypt.compare(
            password,
            admin.password
        );

        if (!correctPassword) {
            return res.status(400).json(
                new ApiError(
                    400,
                    "Wrong password"
                )
            );
        }

        const token = generateAccessToken(admin, "admin");

        // Set cookie
        setAuthCookie(res, token);

        return res.status(200).json(
            new ApiResponse(
                200,
                "Login successful",
                {
                    id: admin._id,
                    fullname: admin.fullname,
                    email: admin.email,
                    role: admin.role,
                }
            )
        );

    } catch (error) {
        console.error("Admin login error:", error);

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                error
            )
        );
    }
};

const AdminLogout = (req, res) => {
  res.clearCookie("accessToken");

  return res.status(200).json(
    new ApiResponse(
      200,
      "Logout successful"
    )
  );
};

// ===============================
// ADMIN FORGOT PASSWORD
// ===============================
const AdminForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json(
        new ApiError(400, "Email is required")
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Only Gmail allowed
    if (!normalizedEmail.endsWith("@gmail.com")) {
      return res.status(400).json(
        new ApiError(
          400,
          "Only Gmail addresses are allowed"
        )
      );
    }

    const admin = await Admin.findOne({
      email: normalizedEmail,
    });

    if (!admin) {
      return res.status(404).json(
        new ApiError(
          404,
          "No admin exists with this email"
        )
      );
    }

    // Generate 6 digit OTP
    const otp = randomInt(100000, 1000000).toString();

    // Store OTP in Redis for 10 minutes
    await redis.set(
      `admin:forgot-password-otp:${normalizedEmail}`,
      otp,
      "EX",
      FORGOT_PASSWORD_OTP_TTL_SECONDS
    );

    // Send OTP through RabbitMQ
    await publishEmail({
      type: "FORGOT_PASSWORD_OTP",
      to: normalizedEmail,
      subject: "Placely Admin Forgot Password OTP",
      data: {
        name: admin.fullname,
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
      "Admin Forgot Password Error:",
      error
    );

    return res.status(500).json(
      new ApiError(500, "Internal Server Error")
    );
  }
};


// ===============================
// ADMIN VERIFY OTP
// ===============================
const AdminVerifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json(
        new ApiError(
          400,
          "Email and OTP are required"
        )
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Only Gmail allowed
    if (!normalizedEmail.endsWith("@gmail.com")) {
      return res.status(400).json(
        new ApiError(
          400,
          "Only Gmail addresses are allowed"
        )
      );
    }

    const storedOtp = await redis.get(
      `admin:forgot-password-otp:${normalizedEmail}`
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
      `admin:forgot-password-otp:${normalizedEmail}`
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        "OTP verified successfully"
      )
    );

  } catch (error) {
    console.error(
      "Admin Verify OTP Error:",
      error
    );

    return res.status(500).json(
      new ApiError(500, "Internal Server Error")
    );
  }
};


export {
    AdminSignup ,
    AdminLogin ,
    AdminLogout ,
    AdminForgotPassword ,
    AdminVerifyOtp 
}