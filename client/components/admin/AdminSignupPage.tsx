"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { PasswordField } from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import { ApiError } from "@/lib/api/client";
import { adminSignup } from "@/services/adminAuthService";
import { useAdminAuth } from "@/lib/admin-auth-context";

export function AdminSignupPage() {
  const router = useRouter(); const { setAdmin } = useAdminAuth();
  const [form, setForm] = useState({ fullname: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  const submit = async (event: React.FormEvent) => {
    event.preventDefault(); setError("");
    if (form.password !== form.confirmPassword) { setError("Passwords do not match."); return; }
    setLoading(true);
    try { setAdmin(await adminSignup({ fullname: form.fullname, email: form.email, password: form.password })); router.replace("/admin/dashboard"); }
    catch (requestError) { setError(requestError instanceof ApiError ? requestError.message : "Unable to connect to the server."); }
    finally { setLoading(false); }
  };
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  return <section className="rounded-cards border border-graphite bg-surface p-6 shadow-subtle sm:p-8">
    <header className="border-b border-graphite pb-5">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-gray">Admin access</p>
      <h1 className="mt-2 text-heading-sm font-semibold tracking-[-0.02em] text-bright-gray">Create admin account</h1>
      <p className="mt-2 text-body-sm text-medium-gray">Set up access to manage Placely practice content.</p>
    </header>
    <form className="mt-6 space-y-5" onSubmit={submit}>
      <AuthFormField id="admin-signup-fullname" label="Full name">
        <input required id="admin-signup-fullname" autoComplete="name" value={form.fullname} onChange={(e) => update("fullname", e.target.value)} className="h-10 w-full rounded-inputs border border-graphite bg-abyss px-3 text-sm text-bright-gray outline-none transition-colors placeholder:text-muted-gray focus:border-lavender focus:ring-2 focus:ring-lavender/20" />
      </AuthFormField>
      <AuthFormField id="admin-signup-email" label="Email">
        <input required id="admin-signup-email" autoComplete="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="h-10 w-full rounded-inputs border border-graphite bg-abyss px-3 text-sm text-bright-gray outline-none transition-colors placeholder:text-muted-gray focus:border-lavender focus:ring-2 focus:ring-lavender/20" />
      </AuthFormField>
      <AuthFormField id="admin-signup-password" label="Password" description="Use at least 8 characters with uppercase, lowercase, number, and special character.">
        <PasswordField required id="admin-signup-password" autoComplete="new-password" value={form.password} onChange={(e) => update("password", e.target.value)} />
      </AuthFormField>
      <AuthFormField id="admin-signup-confirm-password" label="Confirm password">
        <PasswordField required id="admin-signup-confirm-password" autoComplete="new-password" value={form.confirmPassword} onChange={(e) => update("confirmPassword", e.target.value)} />
      </AuthFormField>
      {error && <p role="alert" className="rounded-buttons border border-error-red/40 bg-error-red/10 px-3 py-2 text-body-sm text-error-red">{error}</p>}
      <Button className="w-full" disabled={loading} type="submit" variant="default">{loading ? "Creating account..." : "Create admin account"}</Button>
    </form>
    <div className="mt-6 border-t border-graphite pt-5 text-center text-body-sm">
      <Link href="/admin/login" className="text-lavender underline-offset-2 hover:text-bright-gray hover:underline">Already have an admin account? Login</Link>
    </div>
  </section>;
}
