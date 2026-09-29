"use client";

import Link from "next/link";
import { ProfileMenu } from "@/components/layouts/ProfileMenu";
import { buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#171717]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Placely home">
          <div className="grid h-7 w-7 place-items-center rounded-[6px] border border-[#7c3aed]/30 bg-[#1e1e1e] text-[10px] font-semibold text-[#a78bfa]">
            P
          </div>
          <span className="text-[15px] font-medium tracking-[-0.03em] text-[#eeeeee]">
            Placely
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[13px] text-[#bcbcbc] sm:flex">
          <a href="#learn" className="transition-colors hover:text-[#eeeeee]">
            Learn
          </a>
          <a href="#practice" className="transition-colors hover:text-[#eeeeee]">
            Practice
          </a>
          <a href="#test" className="transition-colors hover:text-[#eeeeee]">
            Test
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "hidden sm:inline-flex",
                )}
              >
                Dashboard
              </Link>
              <ProfileMenu />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "hidden sm:inline-flex",
                )}
              >
                Login
              </Link>
              <Link href="/signup" className={buttonVariants({ size: "sm" })}>
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
