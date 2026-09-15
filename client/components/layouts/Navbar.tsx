"use client";

import { Breadcrumbs } from "@/components/layouts/Breadcrumbs";
import { MobileNavigation } from "@/components/layouts/MobileNavigation";
import Link from "next/link";
import { ProfileMenu } from "@/components/layouts/ProfileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-graphite/80 bg-abyss/95 px-4 backdrop-blur md:px-8">
      <Link
        href="/dashboard"
        className="mr-4 font-bold tracking-[-0.02em] text-white md:hidden"
      >
        Placely
      </Link>
      <MobileNavigation />
      <div className="ml-3 md:ml-0">
        <Breadcrumbs />
      </div>
      <div className="ml-auto">
        <ProfileMenu />
      </div>
    </header>
  );
}