"use client";

import Link from "next/link";
import { ArrowRight, Flame, ListChecks, UserRound } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export function DashboardHome() {
  const { user } = useAuth();
  const name = user?.fullname?.split(" ")[0] || "there";
  return <div className="space-y-6"><div><p className="text-sm text-muted-gray">{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</p><h1 className="mt-1 text-heading font-semibold text-white">Welcome back, {name} 👋</h1><p className="mt-2 text-sm text-medium-gray">Keep building the skills that move your placement journey forward.</p></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Stat icon={<ListChecks />} label="Problems Solved" value="0" /><Stat icon={<Flame />} label="Current Streak" value="0 days" /><Stat label="Overall DSA Progress" value="0%" progress /><Stat icon={<UserRound />} label="Profile Completion" value="14%" /></div><section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-wide text-muted-gray">Continue where you left off</p><h2 className="mt-2 text-lg font-semibold text-white">Start with Time Complexity</h2><p className="mt-1 text-sm text-medium-gray">Learn the fundamentals before solving your first problem.</p></div><Link href="/dsa/learn/basics/time-complexity" className="hidden items-center gap-2 text-sm text-lavender hover:underline sm:flex">Continue <ArrowRight className="size-4" /></Link></div></section><section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle"><h2 className="text-base font-semibold text-white">Recent activity</h2><div className="mt-4 divide-y divide-graphite"><p className="py-3 text-sm text-muted-gray">No activity yet. Start learning or solving to see your progress here.</p></div></section></div>;
}

function Stat({ icon, label, value, progress }: { icon?: React.ReactNode; label: string; value: string; progress?: boolean }) {
  return <div className="rounded-cards border border-graphite bg-surface p-4 shadow-subtle"><div className="flex items-center justify-between text-muted-gray">{icon ? <span className="size-4">{icon}</span> : <span />}{progress ? <span className="text-lavender">◌</span> : null}</div><p className="mt-4 text-xs uppercase tracking-wide text-muted-gray">{label}</p><p className="mt-1 text-xl font-semibold text-white">{value}</p>{progress ? <div className="mt-3 h-1.5 rounded-full bg-graphite"><div className="h-full w-0 rounded-full bg-amethyst" /></div> : null}</div>;
}
