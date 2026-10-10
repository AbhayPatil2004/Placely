"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { allNavigationItems } from "@/lib/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const currentItem = allNavigationItems.find((item) => item.href === pathname);
  const segments = pathname.split("/").filter(Boolean);
  const parentItem = segments.length > 1
    ? allNavigationItems.find((item) => item.href === `/${segments[0]}`)
    : undefined;
  const currentLabel =
    currentItem?.label ??
    segments.at(-1)?.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      <Link
        href="/dashboard"
        className="flex items-center gap-2 text-muted-gray transition-colors hover:text-bright-gray"
      >
        <Home aria-hidden="true" className="size-4" />
        <span className="sr-only">Dashboard</span>
      </Link>
      {parentItem && parentItem.href !== pathname ? (
        <>
          <ChevronRight aria-hidden="true" className="size-4 text-graphite" />
          <Link href={parentItem.href} className="text-muted-gray hover:text-white">
            {parentItem.label}
          </Link>
        </>
      ) : null}
      {currentLabel && (parentItem?.href !== pathname || !parentItem) ? (
        <>
          <ChevronRight aria-hidden="true" className="size-4 text-graphite" />
          <span className="font-medium capitalize text-white">{currentLabel}</span>
        </>
      ) : null}
    </nav>
  );
}
