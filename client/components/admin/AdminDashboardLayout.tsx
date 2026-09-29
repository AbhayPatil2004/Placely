"use client";

import { LogOut, PlusCircle, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { useAdminAuth } from "@/lib/admin-auth-context";
import { adminLogout, adminSession } from "@/services/adminAuthService";

export function AdminDashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter(); const { admin, setAdmin } = useAdminAuth(); const [checking, setChecking] = useState(true);
  useEffect(() => { let active = true; adminSession().then((session) => { if (active) { setAdmin(session); setChecking(false); } }).catch((error) => { if (active) { setChecking(false); if (error instanceof ApiError && (error.status === 401 || error.status === 403)) router.replace("/admin/login"); } }); return () => { active = false; }; }, [router, setAdmin]);
  if (checking) return <main className="grid min-h-screen place-items-center bg-abyss text-sm text-muted-gray">Checking admin session...</main>;
  if (!admin) return null;
  return <div className="min-h-screen bg-abyss text-bright-gray md:flex"><aside className="w-full border-b border-graphite bg-surface p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r"><div className="font-bold text-white">Placely <span className="text-lavender">Admin</span></div><nav className="mt-8 space-y-2"><a className="flex items-center gap-2 rounded-buttons bg-amethyst/15 px-3 py-2 text-sm text-lavender" href="#add-problem"><PlusCircle className="size-4" />Add Problem</a><span className="flex items-center gap-2 rounded-buttons px-3 py-2 text-sm text-muted-gray"><Settings className="size-4" />Manage Problems</span><button onClick={async () => { await adminLogout().catch(() => undefined); setAdmin(null); router.replace("/admin/login"); }} className="flex w-full items-center gap-2 rounded-buttons px-3 py-2 text-left text-sm text-muted-gray hover:text-white"><LogOut className="size-4" />Logout</button></nav></aside><main className="min-w-0 flex-1 p-5 md:p-8">{children}</main></div>;
}
