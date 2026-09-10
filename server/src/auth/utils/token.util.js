import jwt from "jsonwebtoken";

const generateAccessToken = (student) => {
    return jwt.sign(
        {
            userId: student._id,
            email: student.email,
            role: "student",
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );
};

export default generateAccessToken;