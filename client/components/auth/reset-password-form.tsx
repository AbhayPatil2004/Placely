"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthHeader } from "@/components/auth/auth-header";
import { PasswordField } from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import { resetPasswordSchema, type ResetPasswordValues } from "@/lib/auth";
import { apiRequest, ApiError } from "@/lib/api/client";
import { useAuth } from "@/lib/auth-context";

export function ResetPasswordForm({
  tokenStatus = "valid",
}: {
  tokenStatus?: "valid" | "expired";
}) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { resetToken, clearResetFlow } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordValues>({ resolver: zodResolver(resetPasswordSchema) });

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
    if (!resetToken) {
      setError("This reset link is invalid or has expired.");
      return;
    }
    try {
      await apiRequest("/api/student/reset-password", {
        method: "POST",
        body: JSON.stringify({ resetToken, newPassword: values.password }),
      });
      clearResetFlow();
      setSuccess(true);
    } catch (requestError) {
      setError(requestError instanceof ApiError ? requestError.message : "Unable to connect to the server. Please try again.");
    }
  };

  if (success) {
    return (
      <section className="space-y-5 rounded-cards bg-surface p-6 text-center shadow-subtle sm:p-8">
        <AuthHeader title="Password updated" description="Your new password is ready to use." />
        <Link href="/login" className="inline-flex h-10 items-center justify-center rounded-buttons bg-white px-4 text-sm font-medium text-black shadow-subtle hover:bg-[#e5e5e5]">Return to sign in</Link>
      </section>
    );
  }

  return (
    <section className="space-y-6 rounded-cards bg-surface p-6 shadow-subtle sm:p-8">
      <AuthHeader title="Create a new password" description="Choose a password with at least 6 characters." />
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
