import { apiRequest } from "@/lib/api/client";

export type AdminUser = {
  id?: string;
  fullname: string;
  email: string;
  role: "admin";
};

export const adminLogin = (payload: { email: string; password: string }) =>
  apiRequest<AdminUser>("/api/auth/admin/login", { method: "POST", body: JSON.stringify(payload) });

export const adminSignup = (payload: { fullname: string; email: string; password: string }) =>
  apiRequest<AdminUser>("/api/auth/admin/signup", { method: "POST", body: JSON.stringify(payload) });

export const adminSession = () => apiRequest<AdminUser>("/api/auth/admin/me");

export const adminLogout = () => apiRequest("/api/auth/admin/logout", { method: "POST" });

export const adminForgotPassword = (email: string) =>
  apiRequest("/api/auth/admin/forgot-password", { method: "POST", body: JSON.stringify({ email }) });

export const adminVerifyOtp = (email: string, otp: string) =>
  apiRequest("/api/auth/admin/verify-otp", { method: "POST", body: JSON.stringify({ email, otp }) });
