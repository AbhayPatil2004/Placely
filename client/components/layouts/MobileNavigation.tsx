"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navigationGroups } from "@/lib/navigation";
import { cn } from "@/lib/utils";

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
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        size="icon"
        variant="ghost"
      >
        <Menu aria-hidden="true" />
      </Button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label="Close navigation"
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <aside className="relative flex h-full w-[min(85vw,320px)] flex-col border-r border-graphite bg-surface shadow-subtle-2">
            <div className="flex h-16 items-center justify-between border-b border-graphite px-4">
              <Link
                href="/dashboard"
                className="font-bold tracking-[-0.02em] text-white"
                onClick={() => setIsOpen(false)}
              >
                Placely
              </Link>
              <Button
                aria-label="Close navigation"
                onClick={() => setIsOpen(false)}
                size="icon"
                variant="ghost"
              >
                <X aria-hidden="true" />
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
        <div key={group.label} className="space-y-1">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-gray">
            {group.label}
          </p>
          {group.items.map((item) => {
            const Icon = item.icon;
            const isCurrent = isCurrentRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-buttons px-3 py-2.5 text-sm font-medium transition-colors",
                  isCurrent
                    ? "bg-white text-black shadow-subtle"
                    : "text-medium-gray hover:bg-graphite/50 hover:text-bright-gray",
                )}
                onClick={onNavigate}
              >
                <Icon aria-hidden="true" className="size-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}

    </nav>
  );
}
