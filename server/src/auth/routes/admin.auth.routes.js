import { Router } from "express";

import {
    AdminSignup,
    AdminLogin,
    AdminLogout,
    AdminForgotPassword,
    AdminVerifyOtp
} from '../controllers/admin.auth.controller.js'

const router = Router()

router.post("/signup", AdminSignup);

router.post("/login", AdminLogin);

router.post(
    "/logout",
    AdminLogout
);

router.post(
    "/forgot-password",
    AdminForgotPassword
);

router.post(
    "/verify-otp",
    AdminVerifyOtp
);

export default router;