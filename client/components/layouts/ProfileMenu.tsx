"use client";

import Link from "next/link";
import { useState } from "react";
import { LogOut, UserRound } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { getDefaultProfileImage } from "@/lib/profile-image";

export function ProfileMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  const initials = user.fullname
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase() || "P";
  const profileImage = user.profileImage || getDefaultProfileImage(user);

  return (
    <div className="relative">
      <Button
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Open user menu"
        onClick={() => setOpen((current) => !current)}
        size="icon"
        variant="ghost"
        className="overflow-hidden rounded-full border border-white/10 bg-[#1e1e1e] text-white"
      >
        <Avatar
          src={profileImage}
          alt={`${user.fullname} profile picture`}
          fallback={initials}
          className="size-full text-[10px] tracking-[-0.03em]"
        />
      </Button>
      {open ? (
        <div className="absolute right-0 top-11 z-50 w-56 rounded-cards border border-graphite bg-surface p-2 shadow-subtle" role="menu">
          <div className="flex items-center gap-3 border-b border-graphite px-3 py-2">
            <Avatar
              src={profileImage}
              alt={`${user.fullname} profile picture`}
              fallback={initials}
              className="size-9 border border-white/10 bg-[#171717] text-[10px]"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">{user.fullname}</p>
              <p className="truncate text-xs text-muted-gray">{user.email}</p>
            </div>
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