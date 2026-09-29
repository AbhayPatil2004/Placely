"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { AppHeader } from "@/components/dashboard/AppHeader";
import { Sidebar } from "@/components/dashboard/Sidebar";

const authRoutes = ["/login", "/signup", "/forgot-password", "/reset-password"];

export function GlobalAppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (authRoutes.some((route) => pathname.startsWith(route)) || pathname.startsWith("/admin")) {
    return children;
  }

  return <div className="min-h-screen bg-abyss text-bright-gray">
    <Sidebar collapsed={false} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    <div className="md:pl-64">
      <AppHeader onMenuClick={() => setMobileOpen(true)} />
      <main className="min-h-[calc(100vh-4rem)] px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto w-full max-w-[1120px]">{children}</div>
      </main>
    </div>
  </div>;
}
