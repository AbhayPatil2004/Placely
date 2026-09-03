import jwt from "jsonwebtoken";

const generateAdminTokensAndSetCookies = (res, admin) => {
  const adminId = admin._id || admin.id;
  const role = admin.role || "admin";

  const payload = { adminId, role };

  const accessToken = jwt.sign(
    payload,
    process.env.JWT_ADMIN_ACCESS_SECRET || process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: process.env.ADMIN_ACCESS_TOKEN_EXPIRY || "1d",
    },
  );

  const refreshToken = jwt.sign(
    payload,
    process.env.JWT_ADMIN_REFRESH_SECRET || process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: process.env.ADMIN_REFRESH_TOKEN_EXPIRY || "7d",
    },
  );

  const isProd = process.env.NODE_ENV === "production";

  const cookieOptions = {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
  };

  res.cookie("adminAccessToken", accessToken, {
    ...cookieOptions,
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in ms
  });

  res.cookie("adminRefreshToken", refreshToken, {
    ...cookieOptions,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
  });

  res.cookie("adminRole", role, {
    ...cookieOptions,
    httpOnly: false,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return { accessToken, refreshToken };
};

export default generateAdminTokensAndSetCookies;
