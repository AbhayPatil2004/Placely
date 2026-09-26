"use client";

import { Ellipsis, Mail, Settings2, Share2, Trash2, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { AuthUser } from "@/lib/auth-context";

export function ProfileHeaderCard({ user, completion, onEdit }: { user: AuthUser; completion: number; onEdit: () => void }) {
  const [dismissed, setDismissed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const avatar = user.profileImage || `https://api.dicebear.com/10.x/voxel-art/svg?seed=${encodeURIComponent(user.studentId || user.email || user.fullname)}`;

  return (
    <section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 gap-4">
          <div className="shrink-0">
            <img src={avatar} alt={`${user.fullname} avatar`} className="size-24 rounded-full border border-graphite object-cover" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="truncate text-2xl font-bold text-white">{user.fullname}</h1>
              <span className="rounded-full border border-graphite px-2 py-0.5 text-[11px] text-muted-gray">{user.studentId}</span>
            </div>
            <p className="mt-2 text-sm text-medium-gray">{user.branch} <span className="text-graphite">•</span> Year {user.currentYear} <span className="text-graphite">•</span> Batch {user.passingYear}</p>
            <p className="mt-1 truncate text-sm text-medium-gray">{user.college}</p>
            <p className="mt-1 flex items-center gap-1.5 truncate text-sm text-muted-gray"><Mail className="size-3.5" aria-hidden="true" />{user.email}<span className="rounded-full bg-amethyst/15 px-1.5 py-0.5 text-[10px] text-lavender">{user.authProvider === "google" ? "Google" : "Local"}</span></p>
          </div>
        </div>
        <div className="flex items-center gap-1 self-start">
          <Button type="button" onClick={onEdit}>Edit Profile</Button>
          <Button type="button" size="icon" variant="outline" aria-label="Profile settings"><Settings2 aria-hidden="true" /></Button>
          <div className="relative">
            <Button type="button" size="icon" variant="ghost" aria-label="More profile actions" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><Ellipsis aria-hidden="true" /></Button>
            {menuOpen ? <div className="absolute right-0 top-11 z-10 w-48 rounded-cards border border-graphite bg-surface p-1 shadow-subtle">
              <button type="button" className="flex w-full items-center gap-2 rounded-buttons px-3 py-2 text-left text-sm text-medium-gray hover:bg-graphite/50 hover:text-white"><Download className="size-4" /> Download Resume</button>
              <button type="button" className="flex w-full items-center gap-2 rounded-buttons px-3 py-2 text-left text-sm text-medium-gray hover:bg-graphite/50 hover:text-white"><Share2 className="size-4" /> Share Profile</button>
              <button type="button" className="flex w-full items-center gap-2 rounded-buttons px-3 py-2 text-left text-sm text-error-red hover:bg-graphite/50"><Trash2 className="size-4" /> Delete Account</button>
            </div> : null}
          </div>
        </div>
      </div>
      {completion < 100 && !dismissed ? <div className="mt-5 flex items-center justify-between gap-3 rounded-buttons border border-amethyst/30 bg-amethyst/10 px-3 py-2.5 text-sm text-lavender">
        <span>Complete your profile to let recruiters know you better.</span>
        <button type="button" aria-label="Dismiss profile completion message" onClick={() => setDismissed(true)} className="text-lg leading-none text-lavender hover:text-white">×</button>
      </div> : null}
    </section>
  );
}
