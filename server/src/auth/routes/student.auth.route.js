import { Router } from "express";

import {
    StudentSignup,
    StudentLogin,
    StudentLogout,
    StudentForgotPassword,
    StudentVerifyOtp,
} from "../controllers/student.auth.controller.js";

// import verifyAccessToken from "../middleware/student.verifytoken.middleware.js";

const router = Router();

// ===============================
// STUDENT AUTH ROUTES
// ===============================

router.post("/signup", StudentSignup);

router.post("/login", StudentLogin);

router.post(
    "/logout",
    StudentLogout
);

router.post(
    "/forgot-password",
    StudentForgotPassword
);

router.post(
    "/verify-otp",
    StudentVerifyOtp
);

export default router;