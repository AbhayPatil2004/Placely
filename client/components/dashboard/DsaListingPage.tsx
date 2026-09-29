"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { dsaTopics } from "@/data/dsaData";
import { TopicAccordion } from "@/components/dashboard/TopicAccordion";
import { useEffect, useState } from "react";
import { getProblemsByTopic } from "@/services/problemService";
import type { DsaTopic } from "@/data/dsaData";

const practiceTopicKeys = { basics: "INTRODUCTION", arrays: "ARRAY", strings: "STRING" };

export function DsaListingPage({ mode }: { mode: "learn" | "practice" }) {
  const learn = mode === "learn";
  const [topics, setTopics] = useState<DsaTopic[]>(dsaTopics);
  const [loading, setLoading] = useState(!learn);
  const [error, setError] = useState("");
  useEffect(() => {
    if (learn) return;
    let active = true;
    Promise.all(dsaTopics.map(async (topic) => {
      const problems = await getProblemsByTopic(practiceTopicKeys[topic.slug as keyof typeof practiceTopicKeys] ?? topic.slug);
      return { ...topic, problems: problems.map((problem) => ({ slug: problem.slug, title: problem.title, difficulty: (problem.difficulty === "EASY" ? "Easy" : problem.difficulty === "MEDIUM" ? "Medium" : "Hard") as "Easy" | "Medium" | "Hard", status: "unsolved" as const })) };
    })).then((nextTopics) => { if (active) setTopics(nextTopics); }).catch(() => { if (active) setError("Unable to load practice problems."); }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [learn]);
  return <div className="space-y-6"><Link href="/dashboard" className="flex items-center gap-2 text-sm text-muted-gray hover:text-white"><ArrowLeft className="size-4" />Back to Dashboard</Link><div><p className="text-sm text-lavender">{learn ? "DSA / Learn" : "DSA / Practice"}</p><h1 className="mt-2 text-heading font-semibold text-white">{learn ? "Learn Data Structures & Algorithms" : "Practice Data Structures & Algorithms"}</h1><p className="mt-2 text-sm text-medium-gray">{learn ? "Build concepts progressively with focused learning material." : "Solve curated problems and turn concepts into reliable interview skills."}</p></div>{loading ? <div className="animate-pulse rounded-cards border border-graphite bg-surface p-6 text-sm text-muted-gray">Loading problems...</div> : error ? <p role="alert" className="rounded-buttons border border-error-red/40 bg-error-red/10 p-4 text-sm text-error-red">{error}</p> : <TopicAccordion topics={topics} mode={mode} />}</div>;
}
