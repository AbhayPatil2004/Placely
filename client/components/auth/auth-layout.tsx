import Link from "next/link";

export function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-abyss px-4 py-20 sm:px-6">
      <Link
        href="/login"
        className="absolute left-4 top-6 font-bold tracking-[-0.02em] text-white sm:left-6"
      >
        Placely
      </Link>
      <div className="w-full max-w-[480px]">
        {children}
      </div>
    </main>
  );
}
