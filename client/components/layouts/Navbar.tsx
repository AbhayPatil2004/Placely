"use client";

import { BrandLogo } from "@/components/layouts/BrandLogo";
import { Breadcrumbs } from "@/components/layouts/Breadcrumbs";
import { MobileNavigation } from "@/components/layouts/MobileNavigation";
import Link from "next/link";
import { ProfileMenu } from "@/components/layouts/ProfileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-graphite/80 bg-abyss/95 px-4 backdrop-blur md:px-8">
      <Link href="/" className="mr-4 flex items-center md:hidden" aria-label="Placely home">
        <BrandLogo className="h-7 w-7" />
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