import { Router } from "express";

import {
    TPOSignup,
    TPOLogin,
    TPOLogout,
    TPOForgotPassword,
    TPOVerifyOtp
} from '../controllers/tpo.auth.controller.js'

const router = Router()

router.post("/signup", TPOSignup);

router.post("/login", TPOLogin);

router.post(
    "/logout",
    TPOLogout
);

router.post(
    "/forgot-password",
    TPOForgotPassword
);

router.post(
    "/verify-otp",
    TPOVerifyOtp
);

export default router;