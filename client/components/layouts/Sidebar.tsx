"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationLinks } from "@/components/layouts/MobileNavigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-graphite bg-surface md:flex">
      <div className="flex h-16 items-center border-b border-graphite px-6">
        <Link href="/dashboard" className="font-bold tracking-[-0.02em] text-white">
          Placely
        </Link>
      </div>
      <NavigationLinks pathname={pathname} />
    </aside>
  );
}