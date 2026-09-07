import jwt from "jsonwebtoken";
import Admin from "../../admin/models/admin.models" // Adjust path as needed

export const verifyAdmin = async (req, res, next) => {
  try {
   
    const token =
      req.cookies?.adminAccessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request. Token is missing.",
      });
    }

    const secret = process.env.JWT_ADMIN_ACCESS_SECRET || process.env.JWT_ACCESS_SECRET;
    const decodedToken = jwt.verify(token, secret);

    if (decodedToken.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Insufficient permissions.",
      });
    }


    const admin = await Admin.findById(decodedToken.adminId).select("-password");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid token or admin no longer exists.",
      });
    }

    if (admin.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Forbidden. Account is not configured with administrative rights.",
      });
    }

    req.admin = admin;
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
      message: "Invalid access token.",
    });
  }
};