"use client";

import Link from "next/link";
import { ArrowLeft, Bell, ChevronDown, Settings, UserRound } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";

export function AppHeader() {
  const { user, logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-graphite/80 bg-abyss/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center gap-4 px-4">
        <Link href="/dashboard" className="text-xl font-bold tracking-[-0.04em] text-white lg:absolute lg:left-6">
          Placely<span className="text-lavender">.</span>
        </Link>
        <Link href="/dashboard" className="ml-2 flex items-center gap-2 rounded-buttons border border-graphite px-2.5 py-2 text-sm text-medium-gray transition hover:border-lavender hover:text-white sm:px-3">
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Back to Dashboard</span>
        </Link>
        <div className="ml-auto flex items-center gap-1">
          <Button aria-label="Notifications" size="icon" variant="ghost"><Bell aria-hidden="true" /></Button>
          <div className="relative">
            <Button aria-expanded={profileOpen} aria-haspopup="menu" aria-label="Open profile menu" size="icon" variant="ghost" onClick={() => setProfileOpen((open) => !open)}>
              <UserRound aria-hidden="true" />
              <ChevronDown className="absolute -bottom-0.5 -right-0.5 size-3 bg-abyss" aria-hidden="true" />
            </Button>
            {profileOpen ? (
              <div className="absolute right-0 top-11 z-50 w-56 rounded-cards border border-graphite bg-surface p-2 shadow-subtle" role="menu">
                <div className="border-b border-graphite px-3 py-2">
                  <p className="truncate text-sm font-medium text-white">{user?.fullname}</p>
                  <p className="truncate text-xs text-muted-gray">{user?.email}</p>
                </div>
                <Link href="/profile" className="mt-1 flex items-center gap-2 rounded-buttons px-3 py-2 text-sm text-medium-gray hover:bg-graphite/50 hover:text-white" role="menuitem">
                  <UserRound className="size-4" aria-hidden="true" /> View Profile
                </Link>
                <button type="button" className="flex w-full items-center gap-2 rounded-buttons px-3 py-2 text-sm text-medium-gray hover:bg-graphite/50 hover:text-white" role="menuitem">
                  <Settings className="size-4" aria-hidden="true" /> Settings
                </button>
                <button type="button" onClick={() => void logout()} className="flex w-full items-center gap-2 rounded-buttons px-3 py-2 text-sm text-medium-gray hover:bg-graphite/50 hover:text-white" role="menuitem">
                  Logout
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
