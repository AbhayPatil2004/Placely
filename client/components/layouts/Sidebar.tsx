"use client";

import { BrandLogo } from "@/components/layouts/BrandLogo";
import { NavigationLinks } from "@/components/layouts/MobileNavigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-graphite bg-surface md:flex">
      <div className="flex h-16 items-center border-b border-graphite px-6">
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-[-0.02em] text-white" aria-label="Placely home">
          <BrandLogo className="h-7 w-7" />
          <span>Placely</span>
        </Link>
      </div>
      <NavigationLinks pathname={pathname} />
    </aside>
  );
}