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

<<<<<<< HEAD
  const initials = user.fullname
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase() || "P";

=======
>>>>>>> a6b8baa86f3ece7ad7a80b5d3640f6435511647f
  return (
    <div className="relative">
      <Button
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Open user menu"
        onClick={() => setOpen((current) => !current)}
        size="icon"
        variant="ghost"
<<<<<<< HEAD
        className="overflow-hidden rounded-full border border-white/10 bg-[#1e1e1e] text-white"
      >
        {user.profileImage ? (
          <img
            alt={user.fullname}
            className="h-full w-full object-cover"
            src={user.profileImage}
          />
        ) : (
          <span className="text-[10px] font-semibold tracking-[-0.03em]">{initials}</span>
        )}
      </Button>
      {open ? (
        <div className="absolute right-0 top-11 z-50 w-56 rounded-cards border border-graphite bg-surface p-2 shadow-subtle" role="menu">
          <div className="flex items-center gap-3 border-b border-graphite px-3 py-2">
            <div className="grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-white/10 bg-[#171717] text-[10px] font-semibold text-white">
              {user.profileImage ? (
                <img alt={user.fullname} className="h-full w-full object-cover" src={user.profileImage} />
              ) : (
                initials
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">{user.fullname}</p>
              <p className="truncate text-xs text-muted-gray">{user.email}</p>
            </div>
=======
      >
        <UserRound aria-hidden="true" />
      </Button>
      {open ? (
        <div className="absolute right-0 top-11 z-50 w-56 rounded-cards border border-graphite bg-surface p-2 shadow-subtle" role="menu">
          <div className="border-b border-graphite px-3 py-2">
            <p className="truncate text-sm font-medium text-white">{user.fullname}</p>
            <p className="truncate text-xs text-muted-gray">{user.email}</p>
>>>>>>> a6b8baa86f3ece7ad7a80b5d3640f6435511647f
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