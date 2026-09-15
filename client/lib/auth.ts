import { z } from "zod";

export const branchOptions = [
  { value: "COMP", label: "Computer Engineering" },
  { value: "IT", label: "Information Technology" },
  { value: "AIDS", label: "AI & Data Science" },
  { value: "ENTC", label: "Electronics & Telecommunication" },
  { value: "OTHER", label: "Other" },
] as const;

export const collegeOptions = [
  { id: "665f1a2b8c9d0e1f2a3b4c5d", name: "Placely Institute of Technology" },
  { id: "665f1a2b8c9d0e1f2a3b4c5e", name: "Northstar College of Engineering" },
  { id: "665f1a2b8c9d0e1f2a3b4c5f", name: "Pioneer Institute of Computing" },
] as const;

const requiredText = (label: string) =>
  z.string().trim().min(1, `${label} is required`);

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export const signupSchema = z
  .object({
    fullname: requiredText("Full name"),
    studentId: z.number().int().positive("Enter a valid student ID"),
    email: z.string().trim().email("Enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
    branch: z.enum(["COMP", "IT", "AIDS", "ENTC", "OTHER"], {
      message: "Select your branch",
    }),
    college: requiredText("College"),
    collegeId: requiredText("College"),
    currentYear: z.number().int().positive("Enter your current year"),
    passingYear: z.number().int().positive("Enter your passing year"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
});

export const otpSchema = z.object({
  otp: z.string().regex(/^\d{6}$/, "Enter the 6-digit OTP"),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type LoginValues = z.infer<typeof loginSchema>;
export type SignupValues = z.infer<typeof signupSchema>;
export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;
export type OtpValues = z.infer<typeof otpSchema>;
export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
