import ApiError from "../utils/apiError.js";
import jwt from "jsonwebtoken";

const VerifyTPO = async (req, res, next) => {
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

        if (verifyToken.role !== "tpo") {
            return res.status(403).json(
                new ApiError(403, "Please login as TPO", {})
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

export default VerifyTPO;