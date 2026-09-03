import {router as tpoRouter} from "express";
import { verifyTPO } from "../middleware/tpo.verifytoken.middleware.js";
import { TPOSignup, TPOLogin, TPOLogout, TPOForgotPassword, TPOVerifyOtp, TPOResetPassword } from "../controllers/tpo.auth.controller.js";

const router = tpoRouter();

router.post("/signup", TPOSignup);
router.post("/login", TPOLogin);
router.post("/logout", verifyTPO, TPOLogout);
router.post("/forgot-password", TPOForgotPassword);
router.post("/verify-otp", TPOVerifyOtp);
router.post("/reset-password", TPOResetPassword);

export default router;