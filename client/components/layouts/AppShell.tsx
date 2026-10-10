"use client";

import { Navbar } from "@/components/layouts/Navbar";
import { Sidebar } from "@/components/layouts/Sidebar";
import { usePathname } from "next/navigation";

const publicRoutes = [
  "/",
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
];

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  const isPublicRoute =
    pathname === "/" ||
    publicRoutes.some(
      (route) => route !== "/" && pathname.startsWith(route),
    ) ||
    pathname.startsWith("/admin");

  if (isPublicRoute) {
    return children;
  }

  return (
    <div className="relative z-0 min-h-screen bg-abyss text-bright-gray">
      <Sidebar />
      <div className="relative z-0 md:pl-64">
        <Navbar />
        <main className="relative z-0 min-h-[calc(100vh-4rem)] px-4 py-6 md:px-8 md:py-8">
          <div className="mx-auto w-full max-w-[1120px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
