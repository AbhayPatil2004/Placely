import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import type { LearnMaterial } from "@/data/dsaData";

export function LearnMaterialRow({ topicSlug, material }: { topicSlug: string; material: LearnMaterial }) {
  return <Link href={`/dsa/learn/${topicSlug}/${material.slug}`} className="flex items-center gap-3 py-3 hover:bg-graphite/20"><BookOpen className="size-4 shrink-0 text-lavender" /><span className="min-w-0 flex-1"><span className="block text-sm text-white">{material.title}</span><span className="block truncate text-xs text-muted-gray">{material.description}</span></span><span className="hidden items-center gap-1 text-xs text-muted-gray sm:flex"><Clock3 className="size-3" />{material.duration}</span><span className="rounded-full bg-amethyst/10 px-2 py-1 text-[10px] text-lavender">{material.type}</span><ArrowUpRight className="size-3.5 text-muted-gray" /></Link>;
}
