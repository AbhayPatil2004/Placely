"use client";

import Link from "next/link";
import { BookOpen, Building2, Home, Library, UserRound } from "lucide-react";
import { SidebarDSAMenu } from "@/components/dashboard/SidebarDSAMenu";
import { usePathname } from "next/navigation";

export function Sidebar({ collapsed, mobileOpen, onClose }: { collapsed: boolean; mobileOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const linkClass = (active: boolean) => `flex items-center gap-3 rounded-buttons px-3 py-2.5 text-sm ${active ? "border-l-2 border-lavender bg-amethyst/10 text-white" : "text-medium-gray hover:bg-graphite/50 hover:text-white"}`;
  const content = <><div className="flex h-16 items-center border-b border-graphite px-5"><Link href="/dashboard" className="font-bold tracking-[-0.04em] text-white">Placely<span className="text-lavender">.</span></Link></div><nav className="flex-1 space-y-6 overflow-y-auto p-3"><div className="space-y-1"><p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-gray">Workspace</p><Link href="/dashboard" className={linkClass(pathname === "/dashboard")}><Home className="size-4" /><span className={collapsed ? "sr-only" : ""}>Dashboard</span></Link><SidebarDSAMenu pathname={pathname} /></div><div className="space-y-1"><p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-gray">Explore</p><Link href="#" className={linkClass(false)}><Building2 className="size-4" /><span className={collapsed ? "sr-only" : ""}>Companies</span></Link><Link href="#" className={linkClass(false)}><Library className="size-4" /><span className={collapsed ? "sr-only" : ""}>Resources</span></Link></div><div className="space-y-1"><Link href="/profile" className={linkClass(pathname.startsWith("/profile"))}><UserRound className="size-4" /><span className={collapsed ? "sr-only" : ""}>Profile</span></Link></div></nav></>;
  return <>{!mobileOpen ? <aside className={`fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-graphite bg-surface transition-all md:flex ${collapsed ? "w-16" : "w-64"}`}>{content}</aside> : null}{mobileOpen ? <div className="fixed inset-0 z-50 md:hidden"><button type="button" aria-label="Close navigation" onClick={onClose} className="absolute inset-0 bg-black/60" /><aside className="relative flex h-full w-[min(85vw,320px)] flex-col border-r border-graphite bg-surface">{content}</aside></div> : null}</>;
}
