"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { DsaTopic } from "@/data/dsaData";
import { LearnMaterialRow } from "@/components/dashboard/LearnMaterialRow";
import { PracticeProblemRow } from "@/components/dashboard/PracticeProblemRow";

export function TopicAccordion({ topics, mode }: { topics: DsaTopic[]; mode: "learn" | "practice" }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  return <div className="space-y-3">{topics.map((topic) => { const open = openSlug === topic.slug; return <section key={topic.slug} className="overflow-hidden rounded-cards border border-graphite bg-surface shadow-subtle"><button type="button" onClick={() => setOpenSlug(open ? null : topic.slug)} className="flex w-full items-center gap-3 p-4 text-left hover:bg-graphite/20"><span className="text-muted-gray">{open ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}</span><span className="flex-1 text-sm font-semibold text-white">{topic.title}</span><span className="text-xs text-muted-gray">{topic.completed}/{topic.total}</span><span className="hidden w-28 overflow-hidden rounded-full bg-graphite sm:block"><span className="block h-1 rounded-full bg-amethyst" style={{ width: `${topic.total ? (topic.completed / topic.total) * 100 : 0}%` }} /></span></button><div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="min-h-0 overflow-hidden border-t border-graphite px-4"><div className="divide-y divide-graphite">{mode === "learn" ? topic.materials.map((material) => <LearnMaterialRow key={material.slug} topicSlug={topic.slug} material={material} />) : topic.problems.map((problem, index) => <PracticeProblemRow key={problem.slug} index={index + 1} problem={problem} />)}</div></div></div></section>; })}</div>;
}
