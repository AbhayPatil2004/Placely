import ApiError from "../utils/apiError.js";
import jwt from "jsonwebtoken";

const VerifyAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;

        if (!token) {
            return res.status(401).json(
                new ApiError(401, "Please login first", {})
            );
        }

        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        if (verifyToken.role !== "admin") {
            return res.status(403).json(
                new ApiError(403, "Please login as Admin", {})
            );
        }

        req.user = verifyToken;

        next();

    } catch (error) {
        return res.status(401).json(
            new ApiError(401, "Invalid or expired token", {})
        );
    }
};

export default VerifyAdmin;