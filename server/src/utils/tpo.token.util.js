import jwt from "jsonwebtoken";

const generateTPOTokensAndSetCookies = (res, tpoUser) => {
  const tpoId = tpoUser._id || tpoUser.id;
  const collegeId = tpoUser.collegeId;
  const role = tpoUser.role || "tpo";

  const payload = {
    tpoId,
    collegeId,
    role,
  };

  // Sign access and refresh tokens
  const accessToken = jwt.sign(
    payload,
    process.env.JWT_TPO_ACCESS_SECRET || process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: process.env.TPO_ACCESS_TOKEN_EXPIRY || "1d",
    }
  );

  const refreshToken = jwt.sign(
    payload,
    process.env.JWT_TPO_REFRESH_SECRET || process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: process.env.TPO_REFRESH_TOKEN_EXPIRY || "7d",
    }
  );

  const isProd = process.env.NODE_ENV === "production";

  const cookieOptions = {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
  };

  // Set distinct cookies for TPO user
  res.cookie("tpoAccessToken", accessToken, {
    ...cookieOptions,
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in ms
  });

  res.cookie("tpoRefreshToken", refreshToken, {
    ...cookieOptions,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
  });

  return { accessToken, refreshToken };
};

export default generateTPOTokensAndSetCookies;