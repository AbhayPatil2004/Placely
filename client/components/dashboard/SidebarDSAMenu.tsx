"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Code2, GraduationCap, Dumbbell } from "lucide-react";
import { useState } from "react";

export function SidebarDSAMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(pathname.startsWith("/dsa"));
  return <div>
    <button type="button" onClick={() => setOpen((value) => !value)} className="flex w-full items-center gap-3 rounded-buttons px-3 py-2.5 text-sm text-medium-gray hover:bg-graphite/50 hover:text-white"><Code2 className="size-4" /><span className="flex-1 text-left">DSA</span>{open ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}</button>
    {open ? <div className="ml-4 space-y-1 border-l border-graphite pl-3">
      <Link href="/dsa/learn" className={`flex items-center gap-2 rounded-buttons px-3 py-2 text-sm ${pathname.startsWith("/dsa/learn") ? "border-l-2 border-lavender bg-amethyst/10 text-white" : "text-muted-gray hover:text-white"}`}><GraduationCap className="size-4" />Learn</Link>
      <Link href="/dsa/practice" className={`flex items-center gap-2 rounded-buttons px-3 py-2 text-sm ${pathname.startsWith("/dsa/practice") ? "border-l-2 border-lavender bg-amethyst/10 text-white" : "text-muted-gray hover:text-white"}`}><Dumbbell className="size-4" />Practice</Link>
    </div> : null}
  </div>;
}
