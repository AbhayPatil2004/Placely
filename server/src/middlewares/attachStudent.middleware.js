import jwt from "jsonwebtoken";

const AttachStudent = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken;

        // No token → continue as guest
        if (!token) {
            return next();
        }

        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Only attach student
        if (verifyToken.role === "student") {
            req.user = verifyToken;
        }

        next();

    } catch (error) {
        // Invalid/expired token → continue as guest
        console.log("AttachStudent:", error.message);

        next();
    }
};

export default AttachStudent;