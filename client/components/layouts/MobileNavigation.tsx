"use client";

import { BrandLogo } from "@/components/layouts/BrandLogo";
import { Button } from "@/components/ui/button";
import { navigationGroups } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function isCurrentRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        aria-label="Open navigation"
        className="inline-flex h-10 w-10 items-center justify-center rounded-buttons md:hidden"
        onClick={() => setIsOpen(true)}
        size="icon"
        variant="ghost"
        type="button"
      >
        <Menu aria-hidden="true" className="size-4" />
      </Button>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] h-screen md:hidden">
          <button
            aria-label="Close navigation"
            className="absolute inset-0 z-[61] bg-black/60"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <aside className="relative z-[62] flex h-screen w-[min(85vw,320px)] max-w-full flex-col border-r border-graphite bg-surface shadow-subtle-2">
            <div className="flex h-16 items-center justify-between border-b border-graphite px-4">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
                aria-label="Placely home"
              >
                <BrandLogo className="h-7 w-7" />
              </Link>
              <Button
                aria-label="Close navigation"
                onClick={() => setIsOpen(false)}
                size="icon"
                variant="ghost"
                type="button"
              >
                <X aria-hidden="true" className="size-4" />
              </Button>
            </div>
            <NavigationLinks
              pathname={pathname}
              onNavigate={() => setIsOpen(false)}
            />
          </aside>
        </div>
      ) : null}
    </>
  );
}

type NavigationLinksProps = {
  pathname: string;
  onNavigate?: () => void;
};

export function NavigationLinks({
  pathname,
  onNavigate,
}: NavigationLinksProps) {
  return (
    <nav className="flex flex-1 flex-col gap-6 overflow-y-auto p-3">
      {navigationGroups.map((group) => (
        <div key={group.label ?? group.items[0]?.href} className="space-y-1">
          {group.label ? (
            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-gray">
              {group.label}
            </p>
          ) : null}
          {group.items.map((item) => {
              const Icon = item.icon;
              const isCurrent = isCurrentRoute(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center gap-3 rounded-buttons px-3 py-2.5 text-sm font-medium transition-colors",
                    item.href === "/ide" && "hidden lg:flex",
                    isCurrent
                      ? "bg-white text-black shadow-subtle"
                      : "text-medium-gray hover:bg-graphite/50 hover:text-bright-gray",
                  )}
                  onClick={onNavigate}
                >
                  <Icon aria-hidden="true" className="size-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
        </div>
      ))}
    </nav>
  );
}
