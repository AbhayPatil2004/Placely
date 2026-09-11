import jwt from "jsonwebtoken";
import Admin from "../../admin/models/admin.models.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";

export const verifyAdmin = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.adminAccessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json(new ApiResponse(401, "Unauthorized request. Token is missing."));
  }

  try {
    const secret =
      process.env.JWT_ADMIN_ACCESS_SECRET || process.env.JWT_ACCESS_SECRET;
    const decodedToken = jwt.verify(token, secret);

    if (decodedToken.role !== "admin") {
      return res
        .status(403)
        .json(new ApiResponse(403, "Access denied. Insufficient permissions."));
    }

    const admin = await Admin.findById(decodedToken.adminId).select("-password");
    if (!admin) {
      return res
        .status(401)
        .json(new ApiResponse(401, "Invalid token or admin no longer exists."));
    }
    if (admin.role !== "admin") {
      return res
        .status(403)
        .json(new ApiResponse(403, "Forbidden. Account is not configured with administrative rights."));
    }

    req.admin = admin;
    return next();
  } catch (error) {
    const message =
      error.name === "TokenExpiredError"
        ? "Access token has expired. Please refresh your token."
        : "Invalid access token.";
    return next(new ApiError(401, message, [], error));
  }
});
