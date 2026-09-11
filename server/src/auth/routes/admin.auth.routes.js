import {router as AdminRouter} from 'express';
import {AdminSignup, AdminLogin, AdminLogout, AdminRefreshToken, AdminForgotPassword, AdminVerifyOtp, AdminResetPassword} from "../controllers/admin.auth.controller.js";
import verifyAdminAccessToken from "../middleware/admin.verifytoken.middleware.js";

const router = AdminRouter();

router.post("/signup", AdminSignup);
router.post("/login", AdminLogin);
router.post("/logout", verifyAdminAccessToken, AdminLogout);
router.post("/refresh-token", AdminRefreshToken);
router.post("/forgot-password", AdminForgotPassword);
router.post("/verify-otp", AdminVerifyOtp);
router.post("/reset-password", AdminResetPassword);

export default router;