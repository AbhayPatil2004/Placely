"use client";

import Link from "next/link";
import { useState } from "react";
import { LogOut, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";

export function ProfileMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <Button
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Open user menu"
        onClick={() => setOpen((current) => !current)}
        size="icon"
        variant="ghost"
      >
        <UserRound aria-hidden="true" />
      </Button>
      {open ? (
        <div className="absolute right-0 top-11 z-50 w-56 rounded-cards border border-graphite bg-surface p-2 shadow-subtle" role="menu">
          <div className="border-b border-graphite px-3 py-2">
            <p className="truncate text-sm font-medium text-white">{user.fullname}</p>
            <p className="truncate text-xs text-muted-gray">{user.email}</p>
          </div>
          <Link href="/profile" className="mt-2 flex items-center gap-2 rounded-buttons px-3 py-2 text-sm text-medium-gray hover:bg-graphite/50 hover:text-white" onClick={() => setOpen(false)} role="menuitem">
            <UserRound aria-hidden="true" className="size-4" />
            Profile
          </Link>
          <button className="flex w-full items-center gap-2 rounded-buttons px-3 py-2 text-sm text-medium-gray hover:bg-graphite/50 hover:text-white" onClick={() => void logout()} role="menuitem" type="button">
            <LogOut aria-hidden="true" className="size-4" />
            Logout
          </button>
        </div>
      ) : null}
    </div>
  );
}