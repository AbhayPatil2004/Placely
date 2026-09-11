import jwt from "jsonwebtoken";
import User from "../../student/models/student.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";

const verifyAccessToken = asyncHandler(async (req, res, next) => {
  let token = req.cookies?.accessToken;
  const authorization = req.headers.authorization;

  if (!token && authorization?.startsWith("Bearer ")) {
    token = authorization.split(" ")[1];
  }
  if (!token) {
    return res
      .status(403)
      .json(new ApiResponse(403, "Access denied. No token provided."));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res
        .status(403)
        .json(new ApiResponse(403, "Access denied. User not found."));
    }

    req.user = user;
    return next();
  } catch (error) {
    return next(new ApiError(403, "Access denied. Invalid token.", [], error));
  }
});

export default verifyAccessToken;
