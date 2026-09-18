import { z } from "zod";

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const branchOptions = [
  { value: "Computer Science and Engineering", label: "Computer Science and Engineering" },
  { value: "Information Technology", label: "Information Technology" },
  { value: "Artificial Intelligence and Data Science", label: "Artificial Intelligence and Data Science" },
  { value: "Electronics and Telecommunication Engineering", label: "Electronics and Telecommunication Engineering" },
  { value: "Other", label: "Other" },
] as const;

export const collegeOptions = [
  { id: "665f1a2b8c9d0e1f2a3b4c5d", name: "Placely Institute of Technology" },
  { id: "665f1a2b8c9d0e1f2a3b4c5e", name: "Northstar College of Engineering" },
  { id: "665f1a2b8c9d0e1f2a3b4c5f", name: "Pioneer Institute of Computing" },
] as const;

const requiredText = (label: string) =>
  z.string().trim().min(1, `${label} is required`);

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(strongPasswordRegex, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export const signupSchema = z
  .object({
    fullname: requiredText("Full name"),
    studentId: z.string().trim().min(1, "Enter a valid student ID"),
    email: z.string().trim().email("Enter a valid email address"),
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Confirm your password"),
    branch: z.enum([
      "Computer Science and Engineering",
      "Information Technology",
      "Artificial Intelligence and Data Science",
      "Electronics and Telecommunication Engineering",
      "Other",
    ], {
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
    password: passwordSchema,
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
