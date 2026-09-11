import jwt from "jsonwebtoken";
import TPOUser from "../../tpo/models/tpo.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";

export const verifyTPO = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.tpoAccessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json(new ApiResponse(401, "Unauthorized. Access token is missing."));
  }

  try {
    const secret =
      process.env.JWT_TPO_ACCESS_SECRET || process.env.JWT_ACCESS_SECRET;
    const decodedToken = jwt.verify(token, secret);

    if (decodedToken.role !== "tpo") {
      return res
        .status(403)
        .json(new ApiResponse(403, "Access denied. TPO privileges required."));
    }

    const tpoUser = await TPOUser.findById(decodedToken.tpoId).select(
      "-password",
    );

    if (!tpoUser) {
      return res
        .status(401)
        .json(new ApiResponse(401, "Invalid token or user no longer exists."));
    }
    if (!tpoUser.isActive) {
      return res
        .status(403)
        .json(new ApiResponse(403, "Your account has been deactivated. Contact administration."));
    }
    if (!tpoUser.isVerified) {
      return res
        .status(403)
        .json(new ApiResponse(403, "Account not verified. Please verify your email/account first."));
    }

    req.tpoUser = tpoUser;
    return next();
  } catch (error) {
    const message =
      error.name === "TokenExpiredError"
        ? "Access token has expired. Please refresh your token."
        : "Invalid or corrupted access token.";
    return next(new ApiError(401, message, [], error));
  }
});
