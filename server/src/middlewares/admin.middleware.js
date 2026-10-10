import ApiError from "../utils/apiError.js";
import jwt from "jsonwebtoken";

const VerifyAdmin = async (req, res, next) => {
    try {

        console.log("========== VERIFY ADMIN ==========");
        console.log("Cookies:", req.cookies);
        console.log("Access Token:", req.cookies?.accessToken);

        const token = req.cookies?.accessToken;

        if (!token) {
            console.log("❌ NO ACCESS TOKEN");
            return res.status(401).json(
                new ApiError(401, "Please login first", {})
            );
        }

        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("Decoded Token:", verifyToken);

        if (verifyToken.role !== "admin") {
            console.log("❌ ROLE IS:", verifyToken.role);

            return res.status(403).json(
                new ApiError(403, "Please login as Admin", {})
            );
        }

        console.log("✅ ADMIN VERIFIED");

        req.user = verifyToken;

        next();

    } catch (error) {

        console.log("❌ JWT ERROR:", error);

        return res.status(401).json(
            new ApiError(401, "Invalid or expired token", {})
        );
    }
};

export default VerifyAdmin;