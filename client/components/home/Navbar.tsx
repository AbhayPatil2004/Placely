"use client";

import { BrandLogo } from "@/components/layouts/BrandLogo";
import { ProfileMenu } from "@/components/layouts/ProfileMenu";
import { buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#171717]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Placely home">
          <BrandLogo className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="hidden text-[15px] font-bold tracking-[-0.03em] text-[#eeeeee] sm:inline">
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
                )}
              >
                Login
              </Link>
              <Link href="/signup" className={buttonVariants({ size: "sm" })}>
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
