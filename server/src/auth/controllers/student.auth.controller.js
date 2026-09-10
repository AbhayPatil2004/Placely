import bcrypt from "bcryptjs";
import { randomInt } from "crypto";
import Student from "../../student/models/student.model.js";
import { publishEmail } from "../../services/emailProducer.js";
import redis from "../../config/redis.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import setAuthCookie from "../utils/cookie.util.js";
import generateAccessToken from "../utils/token.util.js";

const FORGOT_PASSWORD_OTP_TTL_SECONDS = 10 * 60;

// ===============================
// STUDENT SIGNUP
// ===============================
const StudentSignup = async (req, res) => {
  try {
    const {
      fullname,
      studentId,
      email,
      password,
      branch,
      college,
      collegeId,
      currentYear,
      passingYear,
    } = req.body;

    // Required fields
    if (
      !fullname ||
      !studentId ||
      !email ||
      !password ||
      !branch ||
      !college ||
      !collegeId ||
      !currentYear ||
      !passingYear
    ) {
      return res.status(400).json(
        new ApiError(400, "All fields are required")
      );
    }

    // Normalize values
    const normalizedEmail = email.toLowerCase().trim();
    const normalizedStudentId = studentId.trim();

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

    // Check email and studentId together
    const existingStudent = await Student.findOne({
      $or: [
        { email: normalizedEmail },
        { studentId: normalizedStudentId },
      ],
    });

    if (existingStudent) {
      if (existingStudent.email === normalizedEmail) {
        return res.status(409).json(
          new ApiError(
            409,
            "Student with this email already exists"
          )
        );
      }

      if (existingStudent.studentId === normalizedStudentId) {
        return res.status(409).json(
          new ApiError(
            409,
            "Student with this student ID already exists"
          )
        );
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create student
    const student = await Student.create({
      fullname: fullname.trim(),
      studentId: normalizedStudentId,
      email: normalizedEmail,
      password: hashedPassword,
      branch,
      college,
      collegeId,
      currentYear,
      passingYear,
    });

    // Generate JWT
    const token = generateAccessToken(student);

    // Set authentication cookie
    setAuthCookie(res, token);

    // Welcome email
    await publishEmail({
      type: "WELCOME_EMAIL",
      to: normalizedEmail,
      subject: "Welcome to Placely 🎉",
      data: {
        name: student.fullname,
      },
    });

    return res.status(201).json(
      new ApiResponse(
        201,
        "Student signup successful",
        {
          id: student._id,
          fullname: student.fullname,
          studentId: student.studentId,
          email: student.email,
          branch: student.branch,
          college: student.college,
          collegeId: student.collegeId,
          currentYear: student.currentYear,
          passingYear: student.passingYear,
          role: student.role,
        }
      )
    );
  } catch (error) {
    console.error("Student Signup Error:", error);

    // Handle MongoDB duplicate key race condition
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyPattern || {})[0];

      if (duplicateField === "email") {
        return res.status(409).json(
          new ApiError(
            409,
            "Student with this email already exists"
          )
        );
      }

      if (duplicateField === "studentId") {
        return res.status(409).json(
          new ApiError(
            409,
            "Student with this student ID already exists"
          )
        );
      }
    }

    return res.status(500).json(
      new ApiError(500, "Internal Server Error")
    );
  }
};


// ===============================
// STUDENT LOGIN
// ===============================
const StudentLogin = async (req, res) => {
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

    const student = await Student.findOne({
      email: normalizedEmail,
    }).select("+password");

    if (!student) {
      return res.status(400).json(
        new ApiError(
          400,
          "Student with this email does not exist"
        )
      );
    }

    // Compare password
    const correctPassword = await bcrypt.compare(
      password,
      student.password
    );

    if (!correctPassword) {
      return res.status(400).json(
        new ApiError(400, "Wrong password")
      );
    }

    // Generate JWT
    const token = generateAccessToken(student);

    // Set cookie
    setAuthCookie(res, token);

    return res.status(200).json(
      new ApiResponse(
        200,
        "Login successful",
        {
          id: student._id,
          fullname: student.fullname,
          studentId: student.studentId,
          email: student.email,
          branch: student.branch,
          college: student.college,
          collegeId: student.collegeId,
          currentYear: student.currentYear,
          passingYear: student.passingYear,
          role: student.role,
        }
      )
    );
  } catch (error) {
    console.error("Student Login Error:", error);

    return res.status(500).json(
      new ApiError(500, "Internal Server Error")
    );
  }
};


// ===============================
// STUDENT LOGOUT
// ===============================
const StudentLogout = (req, res) => {
  res.clearCookie("accessToken");

  return res.status(200).json(
    new ApiResponse(
      200,
      "Logout successful"
    )
  );
};


// ===============================
// FORGOT PASSWORD - SEND OTP
// ===============================
const StudentForgotPassword = async (req, res) => {
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

    const student = await Student.findOne({
      email: normalizedEmail,
    });

    if (!student) {
      return res.status(404).json(
        new ApiError(
          404,
          "No student exists with this email"
        )
      );
    }

    // Generate 6 digit OTP
    const otp = randomInt(100000, 1000000).toString();

    // Store OTP in Redis for 10 minutes
    await redis.set(
      `student:forgot-password-otp:${normalizedEmail}`,
      otp,
      "EX",
      FORGOT_PASSWORD_OTP_TTL_SECONDS
    );

    // Send OTP through RabbitMQ
    await publishEmail({
      type: "FORGOT_PASSWORD_OTP",
      to: normalizedEmail,
      subject: "Placely Forgot Password OTP",
      data: {
        name: student.fullname,
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
      "Student Forgot Password Error:",
      error
    );

    return res.status(500).json(
      new ApiError(500, "Internal Server Error")
    );
  }
};


// ===============================
// VERIFY OTP
// ===============================
const StudentVerifyOtp = async (req, res) => {
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
      `student:forgot-password-otp:${normalizedEmail}`
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
      `student:forgot-password-otp:${normalizedEmail}`
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        "OTP verified successfully"
      )
    );
  } catch (error) {
    console.error(
      "Student Verify OTP Error:",
      error
    );

    return res.status(500).json(
      new ApiError(500, "Internal Server Error")
    );
  }
};


export {
  StudentSignup,
  StudentLogin,
  StudentLogout,
  StudentForgotPassword,
  StudentVerifyOtp,
};