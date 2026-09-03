import jwt from "jsonwebtoken";
import TPOUser from "../models/tpoUser.model.js"; // Adjust path to your schema file

export const verifyTPO = async (req, res, next) => {
  try {
    
    const token =
      req.cookies?.tpoAccessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Access token is missing.",
      });
    }

    
    const secret =
      process.env.JWT_TPO_ACCESS_SECRET || process.env.JWT_ACCESS_SECRET;
    const decodedToken = jwt.verify(token, secret);

   
    if (decodedToken.role !== "tpo") {
      return res.status(403).json({
        success: false,
        message: "Access denied. TPO privileges required.",
      });
    }

    
    const tpoUser = await TPOUser.findById(decodedToken.tpoId).select("-password");

    if (!tpoUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid token or user no longer exists.",
      });
    }

    
    if (!tpoUser.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account has been deactivated. Contact administration.",
      });
    }

    if (!tpoUser.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Account not verified. Please verify your email/account first.",
      });
    }

    req.tpoUser = tpoUser;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Access token has expired. Please refresh your token.",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid or corrupted access token.",
    });
  }
};