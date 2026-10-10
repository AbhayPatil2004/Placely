"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { PasswordField } from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import { ApiError } from "@/lib/api/client";
import { adminLogin } from "@/services/adminAuthService";
import { useAdminAuth } from "@/lib/admin-auth-context";

export function AdminLoginPage() {
  const router = useRouter();
  const { setAdmin } = useAdminAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [error, setError] = useState("");
  const submit = async (event: React.FormEvent) => {
    event.preventDefault(); setStatus("loading"); setError("");
    try { setAdmin(await adminLogin(form)); router.replace("/admin/dashboard"); }
    catch (requestError) {
      const apiError = requestError instanceof ApiError ? requestError : null;
      setError(apiError?.status === 403 ? "This account is not an admin. Use the student login instead." : apiError?.message ?? "Unable to connect to the server.");
    } finally { setStatus("idle"); }
  };
  return <section className="rounded-cards border border-graphite bg-surface p-6 shadow-subtle sm:p-8">
    <header className="border-b border-graphite pb-5">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-gray">Admin access</p>
      <h1 className="mt-2 text-heading-sm font-semibold tracking-[-0.02em] text-bright-gray">Login as Admin</h1>
      <p className="mt-2 text-body-sm text-medium-gray">Sign in to manage Placely practice content.</p>
    </header>
    <form className="mt-6 space-y-5" onSubmit={submit}>
      <AuthFormField id="admin-login-email" label="Email">
        <input required id="admin-login-email" autoComplete="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-10 w-full rounded-inputs border border-graphite bg-abyss px-3 text-sm text-bright-gray outline-none transition-colors placeholder:text-muted-gray focus:border-lavender focus:ring-2 focus:ring-lavender/20" />
      </AuthFormField>
      <AuthFormField id="admin-login-password" label="Password">
        <PasswordField required id="admin-login-password" autoComplete="current-password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Enter your password" />
      </AuthFormField>
      {error && <p role="alert" className="rounded-buttons border border-error-red/40 bg-error-red/10 px-3 py-2 text-body-sm text-error-red">{error} {error.includes("not an admin") && <Link href="/login" className="ml-1 underline underline-offset-2">Student login</Link>}</p>}
      <Button className="w-full" disabled={status === "loading"} type="submit" variant="default">{status === "loading" ? "Signing in..." : "Login as Admin"}</Button>
    </form>
    <div className="mt-6 flex flex-col gap-3 border-t border-graphite pt-5 text-body-sm sm:flex-row sm:items-center sm:justify-between">
      <Link href="/admin/signup" className="text-lavender underline-offset-2 hover:text-bright-gray hover:underline">Create admin account</Link>
      <Link href="/admin/forgot-password" className="text-medium-gray underline-offset-2 hover:text-bright-gray hover:underline">Forgot password?</Link>
    </div>
  </section>;
}
