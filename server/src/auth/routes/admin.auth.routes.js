import { Router } from "express";

import {
    AdminSignup,
    AdminLogin,
    AdminLogout,
    AdminForgotPassword,
    AdminVerifyOtp
} from '../controllers/admin.auth.controller.js'
import VerifyAdmin from "../../middlewares/admin.middleware.js";
import ApiResponse from "../../utils/apiResponse.js";

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

router.get("/me", VerifyAdmin, (req, res) => {
    res.status(200).json(new ApiResponse(200, "Admin session valid", {
        id: req.user.userId,
        email: req.user.email,
        role: req.user.role
    }));
});

export default router;