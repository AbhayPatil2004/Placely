"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthHeader } from "@/components/auth/auth-header";
import { PasswordField } from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginValues } from "@/lib/auth";
import { apiRequest, ApiError } from "@/lib/api/client";
import { useAuth } from "@/lib/auth-context";
import type { AuthUser } from "@/lib/auth-context";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");
  const { setUser } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginValues) => {
    setStatus("loading");
    setMessage("");
    try {
      const user = await apiRequest<AuthUser>("/api/student/login", {
        method: "POST",
        body: JSON.stringify(values),
      });
      setUser(user);
      router.replace("/dashboard");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof ApiError ? error.message : "Unable to connect to the server. Please try again.");
    } finally {
      setStatus((current) => (current === "loading" ? "idle" : current));
    }
  };

  return (
    <section className="space-y-6 rounded-cards bg-surface p-6 shadow-subtle sm:p-8">
      <AuthHeader
        title="Welcome back"
        description="Sign in to continue your preparation."
        alternateText="New to Placely?"
        alternateLabel="Create an account"
        alternateHref="/signup"
      />
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <AuthFormField id="login-email" label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            id="login-email"
            autoComplete="email"
            className="h-10 w-full rounded-inputs border border-graphite bg-surface px-3 text-sm text-bright-gray outline-none placeholder:text-muted-gray focus:border-white focus:ring-2 focus:ring-white/20"
            placeholder="you@example.com"
            type="email"
          />
        </AuthFormField>
        <AuthFormField
          id="login-password"
          label="Password"
          error={errors.password?.message}
        >
          <PasswordField
            {...register("password")}
            id="login-password"
            autoComplete="current-password"
            error={Boolean(errors.password)}
            placeholder="Enter your password"
          />
        </AuthFormField>
        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-sm text-medium-gray hover:text-white">
            Forgot password?
          </Link>
        </div>
        {status === "error" ? (
          <p className="rounded-buttons border border-error-red/40 bg-error-red/10 px-3 py-2 text-sm text-error-red" role="alert">
            {message || "Invalid email or password. Please try again."}
          </p>
        ) : null}
        <Button className="w-full" disabled={status === "loading"} type="submit">
          {status === "loading" ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </section>
  );
}
