"use client";

import { Navbar } from "@/components/layouts/Navbar";
import { Sidebar } from "@/components/layouts/Sidebar";
import { usePathname } from "next/navigation";

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  if (pathname.startsWith("/login") || pathname.startsWith("/signup") || pathname.startsWith("/forgot-password") || pathname.startsWith("/reset-password")) {
    return children;
  }

  return (
    <div className="min-h-screen bg-abyss text-bright-gray">
      <Sidebar />
      <div className="md:pl-64">
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)] px-4 py-6 md:px-8 md:py-8">
          <div className="mx-auto w-full max-w-[1120px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
