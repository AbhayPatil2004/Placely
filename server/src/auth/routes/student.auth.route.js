import {router as studentRouter} from 'express';

import {
    StudentSignup,
    StudentLogin,
    StudentLogout,
    StudentRefreshToken,
    StudentForgotPassword,
    StudentVerifyOtp,
    StudentResetPassword
} from "./controllers/student.auth.controller.js";

import verifyAccessToken from "./middleware/student.verifytoken.middleware.js";

const router = studentRouter();

router.post('/signup', StudentSignup);
router.post('/login', StudentLogin);
router.post('/logout', verifyAccessToken, StudentLogout);
router.post('/refresh-token', StudentRefreshToken);
router.post('/forgot-password', StudentForgotPassword);
router.post('/verify-otp', StudentVerifyOtp);
router.post('/reset-password', StudentResetPassword);

export default router;