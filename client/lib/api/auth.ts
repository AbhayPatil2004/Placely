import { apiRequest } from "./client";

export type CodingProfile = {
  platform: string;
  profileUrl: string;
};

export type AuthUser = {
  _id?: string;
  fullname: string;
  studentId: string;
  email: string;
  profileImage?: string | null;
  authProvider?: "local" | "google";
  branch: string;
  college: string;
  collegeId: string;
  university?: string | null;
  currentYear: number;
  passingYear: number;
  cgpa?: number | null;
  tenthPercentage?: number | null;
  twelfthPercentage?: number | null;
  skills?: string[];
  codingProfiles?: CodingProfile[];
  resumeUrl?: string | null;
  portfolioUrl?: string | null;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type SignupPayload = {
  fullname: string;
  studentId: string;
  email: string;
  password: string;
  branch: string;
  college: string;
  collegeId: string;
  currentYear: number;
  passingYear: number;
};

export async function login(credentials: LoginCredentials): Promise<AuthUser> {
  return apiRequest<AuthUser>("/api/auth/student/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export async function signup(payload: SignupPayload): Promise<AuthUser> {
  return apiRequest<AuthUser>("/api/auth/student/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function logout(): Promise<{ message?: string }> {
  return apiRequest<{ message?: string }>("/api/auth/student/logout", {
    method: "POST",
  });
}

export async function forgotPassword(payload: { email: string }): Promise<{ message?: string }> {
  return apiRequest<{ message?: string }>("/api/auth/student/forgot-password", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function verifyOtp(payload: { email: string; otp: string }): Promise<{ message?: string }> {
  return apiRequest<{ message?: string }>("/api/auth/student/verify-otp", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
