"use client";

import Link from "next/link";
import { Bell, ChevronDown, Menu, Moon, Settings, UserRound } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";

export function AppHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-30 flex h-16 items-center border-b border-graphite/80 bg-abyss/95 px-4 backdrop-blur md:px-6">
    <button type="button" aria-label="Open navigation" onClick={onMenuClick} className="mr-3 rounded-buttons p-2 text-medium-gray hover:bg-surface hover:text-white md:hidden"><Menu className="size-4" /></button>
    <div className="text-sm text-muted-gray"><span className="text-white">Dashboard</span></div>
    <div className="ml-auto flex items-center gap-1">
      <button type="button" aria-label="Toggle theme" className="rounded-buttons p-2 text-medium-gray hover:bg-surface hover:text-white"><Moon className="size-4" /></button>
      <button type="button" aria-label="Notifications" className="rounded-buttons p-2 text-medium-gray hover:bg-surface hover:text-white"><Bell className="size-4" /></button>
      <div className="relative ml-2">
        <button type="button" aria-label="Open profile menu" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex items-center gap-2 rounded-buttons p-1.5 hover:bg-surface">
          <span className="grid size-8 place-items-center rounded-full bg-amethyst text-sm font-semibold text-white">{user?.fullname?.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "P"}</span>
          <span className="hidden max-w-28 truncate text-sm text-white sm:block">{user?.fullname}</span><ChevronDown className="size-3.5 text-muted-gray" />
        </button>
        {open ? <div className="absolute right-0 top-11 z-50 w-48 rounded-cards border border-graphite bg-surface p-1 shadow-subtle">
          <Link href="/profile" className="flex items-center gap-2 rounded-buttons px-3 py-2 text-sm text-medium-gray hover:bg-graphite/50 hover:text-white"><UserRound className="size-4" />View Profile</Link>
          <button type="button" className="flex w-full items-center gap-2 rounded-buttons px-3 py-2 text-sm text-medium-gray hover:bg-graphite/50 hover:text-white"><Settings className="size-4" />Settings</button>
          <button type="button" onClick={() => void logout()} className="w-full rounded-buttons px-3 py-2 text-left text-sm text-medium-gray hover:bg-graphite/50 hover:text-white">Logout</button>
        </div> : null}
      </div>
    </div>
  </header>;
}
