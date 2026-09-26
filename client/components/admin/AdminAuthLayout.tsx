import Link from "next/link";

export function AdminAuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-abyss px-4 py-8 text-bright-gray sm:px-6 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[440px] flex-col justify-center">
        <Link
          href="/admin/login"
          className="mb-8 inline-flex items-baseline gap-3 self-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
        >
          <span className="text-xl font-semibold tracking-[-0.02em]">Placely</span>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-gray">Admin</span>
        </Link>
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
