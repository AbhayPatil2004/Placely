import { Router } from "express";

import {
    TPOSignup,
    TPOLogin,
    TPOLogout,
    TPOForgotPassword,
    TpoVerifyOtpAndResetPassword 
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
  "/verify-otp-reset-password",
  TpoVerifyOtpAndResetPassword
);

export default router;