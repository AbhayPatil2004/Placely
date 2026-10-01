"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthHeader } from "@/components/auth/auth-header";
import { PasswordField } from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import { resetPasswordSchema, type ResetPasswordValues } from "@/lib/auth";
import { ApiError } from "@/lib/api/client";
import { resetPassword as resetPasswordRequest } from "@/lib/api/auth";
import { useAuth } from "@/lib/auth-context";

export function ResetPasswordForm({
  tokenStatus = "valid",
}: {
  tokenStatus?: "valid" | "expired";
}) {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { resetEmail, resetOtp, clearResetFlow } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordValues>({ resolver: zodResolver(resetPasswordSchema) });

  useEffect(() => {
    if (!success) return;
    const redirectTimer = window.setTimeout(() => router.replace("/login"), 1800);
    return () => window.clearTimeout(redirectTimer);
  }, [router, success]);

  if (tokenStatus === "expired") {
    return (
      <section className="space-y-5 rounded-cards bg-surface p-6 text-center shadow-subtle sm:p-8">
        <AuthHeader title="Reset link expired" description="This password reset link is invalid or has expired." />
        <Link href="/forgot-password" className="inline-flex h-10 items-center justify-center rounded-buttons bg-white px-4 text-sm font-medium text-black shadow-subtle hover:bg-[#e5e5e5]">
          Request a new code
        </Link>
      </section>
    );
  }

  const onSubmit = async (values: ResetPasswordValues) => {
    setError("");

    if (!resetEmail || !resetOtp) {
      setError("Your reset session is missing. Request a new code.");
      return;
    }

    try {
      await resetPasswordRequest({
        email: resetEmail,
        otp: resetOtp,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });
      clearResetFlow();
      setSuccess(true);
    } catch (requestError) {
      if (requestError instanceof ApiError) {
        setError(
          requestError.status === 400
            ? requestError.message === "Invalid or expired OTP"
              ? "That code is invalid or has expired. Request a new code."
              : requestError.message
            : requestError.status === 404
              ? "No account was found for that email address."
              : "Unable to reset your password right now. Please try again.",
        );
      } else {
        setError("Unable to connect to the server. Please try again.");
      }
    }
  };

  if (success) {
    return (
      <section className="space-y-5 rounded-cards bg-surface p-6 text-center shadow-subtle sm:p-8">
        <AuthHeader title="Password updated" description="Your new password is ready to use. Redirecting you to sign in..." />
        <Link href="/login" className="inline-flex h-10 items-center justify-center rounded-buttons bg-white px-4 text-sm font-medium text-black shadow-subtle hover:bg-[#e5e5e5]">Continue to sign in</Link>
      </section>
    );
  }

  return (
    <section className="space-y-6 rounded-cards bg-surface p-6 shadow-subtle sm:p-8">
      <AuthHeader title="Create a new password" description="Use at least 8 characters with uppercase, lowercase, number, and special character." />
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <AuthFormField id="reset-password" label="New password" error={errors.password?.message}>
          <PasswordField {...register("password")} id="reset-password" autoComplete="new-password" error={Boolean(errors.password)} />
        </AuthFormField>
        <AuthFormField id="reset-confirm-password" label="Confirm password" error={errors.confirmPassword?.message}>
          <PasswordField {...register("confirmPassword")} id="reset-confirm-password" autoComplete="new-password" error={Boolean(errors.confirmPassword)} />
        </AuthFormField>
        <Button className="w-full" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Updating password..." : "Update password"}
        </Button>
      </form>
      {error ? <p className="text-sm text-error-red" role="alert">{error}</p> : null}
    </section>
  );
}
