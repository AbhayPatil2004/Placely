"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { dsaTopics } from "@/data/dsaData";
import { TopicAccordion } from "@/components/dashboard/TopicAccordion";

export function DsaListingPage({ mode }: { mode: "learn" | "practice" }) {
  const learn = mode === "learn";
  return <div className="space-y-6"><Link href="/dashboard" className="flex items-center gap-2 text-sm text-muted-gray hover:text-white"><ArrowLeft className="size-4" />Back to Dashboard</Link><div><p className="text-sm text-lavender">{learn ? "DSA / Learn" : "DSA / Practice"}</p><h1 className="mt-2 text-heading font-semibold text-white">{learn ? "Learn Data Structures & Algorithms" : "Practice Data Structures & Algorithms"}</h1><p className="mt-2 text-sm text-medium-gray">{learn ? "Build concepts progressively with focused learning material." : "Solve curated problems and turn concepts into reliable interview skills."}</p></div><TopicAccordion topics={dsaTopics} mode={mode} /></div>;
}
