import jwt from "jsonwebtoken";
import User from "../../student/models/student.model.js";

verifyAccessToken = async(req, res, next) => {
    try{
        let token = req.cookies?.accessToken;

        if(!token &&  req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1];

        }
        if(!token){
            return res.status(403).json({message: "Access Denied. No token provided."});
        }

        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

        const user = await User.findById(decoded.userId);

        if(!user){
            return res.status(403).json({message: "Access Denied. User not found."});
        } 
        req.user = user;
        next();
    }catch(err){
        console.error(err);
        return res.status(403).json({message: "Access Denied. Invalid token."});
    }
}
export default verifyAccessToken;