"use client";

import { ExternalLink, Pencil } from "lucide-react";
import type { AuthUser } from "@/lib/auth-context";

export function OverviewTab({ user, onEdit }: { user: AuthUser; onEdit: () => void }) {
  const item = (title: string, value: string | null | undefined, empty: string) => <div className="border-b border-graphite py-4 last:border-0">
    <div className="flex items-center justify-between"><h3 className="text-sm font-semibold text-white">{title}</h3><button type="button" aria-label={`Edit ${title}`} onClick={onEdit} className="text-muted-gray hover:text-lavender"><Pencil className="size-3.5" /></button></div>
    {value ? <p className="mt-2 flex items-center gap-2 break-all text-sm text-medium-gray">{value}{title !== "Basic Information" ? <ExternalLink className="size-3.5 shrink-0 text-lavender" /> : null}</p> : <button type="button" onClick={onEdit} className="mt-2 text-sm text-muted-gray hover:text-lavender">{empty} <span className="text-lavender">Add</span></button>}
  </div>;
  return <div className="divide-y divide-graphite">
    {item("Basic Information", `${user.fullname} · ${user.studentId}`, "Add your basic information")}
    {item("Resume", user.resumeUrl, "Add your resume so recruiters can find you.")}
    {item("Portfolio", user.portfolioUrl, "Add your portfolio to showcase your work.")}
  </div>;
}
