"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthHeader } from "@/components/auth/auth-header";
import { Button } from "@/components/ui/button";
import { forgotPasswordSchema, type ForgotPasswordValues } from "@/lib/auth";
import { ApiError } from "@/lib/api/client";
import { forgotPassword } from "@/lib/api/auth";
import { useAuth } from "@/lib/auth-context";

export function ForgotPasswordForm() {
  const router = useRouter();
  const { setResetEmail } = useAuth();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordValues>({ resolver: zodResolver(forgotPasswordSchema) });

  const onSubmit = async (values: ForgotPasswordValues) => {
    setError("");
    try {
      await forgotPassword(values);
      setResetEmail(values.email);
      router.push("/forgot-password/verify");
    } catch (requestError) {
      setError(requestError instanceof ApiError ? requestError.message : "Unable to connect to the server. Please try again.");
    }
  };

  return (
    <section className="space-y-6 rounded-cards bg-surface p-6 shadow-subtle sm:p-8">
      <AuthHeader title="Reset your password" description="Enter your email and we’ll send a 6-digit reset code." />
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <AuthFormField id="forgot-email" label="Email" error={errors.email?.message}>
          <input {...register("email")} id="forgot-email" autoComplete="email" className="h-10 w-full rounded-inputs border border-graphite bg-surface px-3 text-sm text-bright-gray outline-none placeholder:text-muted-gray focus:border-white focus:ring-2 focus:ring-white/20" placeholder="you@example.com" type="email" />
        </AuthFormField>
        <Button className="w-full" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending code..." : "Send OTP"}
        </Button>
        {error ? <p className="text-sm text-error-red" role="alert">{error}</p> : null}
        <Link href="/login" className="block text-center text-sm text-medium-gray hover:text-white">Back to sign in</Link>
      </form>
    </section>
  );
}
