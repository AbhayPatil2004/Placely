import { BrandLogo } from "@/components/layouts/BrandLogo";
import Link from "next/link";

export function AdminAuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-abyss px-4 py-8 text-bright-gray sm:px-6 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[440px] flex-col justify-center">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-3 self-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
          aria-label="Placely home"
        >
          <BrandLogo className="h-7 w-7" />
          <span className="hidden items-center gap-2 sm:flex">
            <span className="text-xl font-semibold tracking-[-0.02em]">Placely</span>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-gray">Admin</span>
          </span>
        </Link>
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
