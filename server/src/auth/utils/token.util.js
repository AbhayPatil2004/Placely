import jwt from "jsonwebtoken";

const generateAccessToken = (user , role ) => {
    return jwt.sign(
        {
            userId: user._id,
            fullname : user.fullname ,
            email: user.email,
            role: role ,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );
};

export default generateAccessToken;