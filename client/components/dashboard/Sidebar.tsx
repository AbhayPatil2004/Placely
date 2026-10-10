"use client";

import { BrandLogo } from "@/components/layouts/BrandLogo";
import { SidebarDSAMenu } from "@/components/dashboard/SidebarDSAMenu";
import { Building2, Code2, Home, Library, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar({ collapsed, mobileOpen, onClose }: { collapsed: boolean; mobileOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const linkClass = (active: boolean) => `flex min-h-11 items-center gap-3 rounded-buttons px-3 py-2.5 text-sm ${active ? "border-l-2 border-lavender bg-amethyst/10 text-white" : "text-medium-gray hover:bg-graphite/50 hover:text-white"}`;
  const content = <>
    <div className="flex h-16 items-center justify-between border-b border-graphite px-4">
      <Link href="/" className="flex items-center gap-2.5 font-bold tracking-[-0.04em] text-white" aria-label="Placely home" onClick={onClose}>
        <BrandLogo className="h-6 w-6" />
        <span className="hidden sm:inline">Placely</span>
      </Link>
      <button type="button" aria-label="Close navigation" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-buttons text-medium-gray hover:bg-graphite/50 hover:text-white md:hidden">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current stroke-[1.75]">
          <path d="M6 6 18 18M18 6 6 18" />
        </svg>
      </button>
    </div>
    <nav className="flex-1 space-y-6 overflow-y-auto p-3">
      <div className="space-y-1"><p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-gray">Workspace</p><Link href="/dashboard" onClick={onClose} className={linkClass(pathname === "/dashboard")}><Home className="size-4" /><span className={collapsed ? "sr-only" : ""}>Dashboard</span></Link><SidebarDSAMenu pathname={pathname} onClose={onClose} /></div>
      <div className="space-y-1"><p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-gray">Practice</p><Link href="/aptitude" onClick={onClose} className={linkClass(pathname === "/aptitude")}><Code2 className="size-4" /><span className={collapsed ? "sr-only" : ""}>Aptitude</span></Link><Link href="/ide" onClick={onClose} className={linkClass(pathname === "/ide")}><Code2 className="size-4" /><span className={collapsed ? "sr-only" : ""}>Playground</span></Link></div>
      <div className="space-y-1"><p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-gray">Explore</p><Link href="#" onClick={onClose} className={linkClass(false)}><Building2 className="size-4" /><span className={collapsed ? "sr-only" : ""}>Companies</span></Link><Link href="#" onClick={onClose} className={linkClass(false)}><Library className="size-4" /><span className={collapsed ? "sr-only" : ""}>Resources</span></Link></div>
      <div className="space-y-1"><Link href="/profile" onClick={onClose} className={linkClass(pathname.startsWith("/profile"))}><UserRound className="size-4" /><span className={collapsed ? "sr-only" : ""}>Profile</span></Link></div>
    </nav>
  </>;
  return <>{!mobileOpen ? <aside className={`fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-graphite bg-surface transition-all md:flex ${collapsed ? "w-16" : "w-64"}`}>{content}</aside> : null}{mobileOpen ? <div className="fixed inset-0 z-[60] h-screen md:hidden"><button type="button" aria-label="Close navigation" onClick={onClose} className="absolute inset-0 z-[61] bg-black/60" /><aside className="relative z-[62] flex h-screen w-[min(85vw,320px)] max-w-full flex-col border-r border-graphite bg-surface">{content}</aside></div> : null}</>;
}
