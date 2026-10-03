import { BrandLogo } from "@/components/layouts/BrandLogo";
import Link from "next/link";

export function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-abyss px-4 py-20 sm:px-6">
      <Link
        href="/"
        className="absolute left-4 top-6 flex items-center gap-2.5 font-bold tracking-[-0.02em] text-white sm:left-6"
        aria-label="Placely home"
      >
        <BrandLogo className="h-7 w-7" />
        <span className="hidden sm:inline">Placely</span>
      </Link>
      <div className="w-full max-w-[480px]">
        {children}
      </div>
    </main>
  );
}
