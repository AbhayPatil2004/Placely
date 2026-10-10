import ApiError from "../utils/apiError.js";
import jwt from "jsonwebtoken";

const VerifyStudent = async (req, res, next) => {
try {
const token = req.cookies?.accessToken;


    if (!token) {
        return res.status(401).json(
            new ApiError(401, "Please login first", {})
        );
    }

    const verifyToken = jwt.verify(
        token,
        process.env.JWT_SECRET
    );

    console.log("Decoded role:", verifyToken.role);
    console.log("Decoded userId:", verifyToken.userId);

    if (verifyToken.role !== "student") {
        return res.status(403).json(
            new ApiError(403, "Please login as Student", {})
        );
    }

    req.user = verifyToken;
    next();

} catch (error) {
    console.error("VerifyStudent error:", error.message);

    return res.status(401).json(
        new ApiError(401, "Invalid or expired token", {})
    );
}


};

export default VerifyStudent;
