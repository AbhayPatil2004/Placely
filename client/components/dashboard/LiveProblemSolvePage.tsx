"use client";

import { useEffect, useState } from "react";
import { getProblemBySlug, type Problem } from "@/services/problemService";
import { ProblemSolvePage } from "./ProblemSolvePage";

export function LiveProblemSolvePage({ slug }: { slug: string }) {
  const [problem, setProblem] = useState<Problem | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    getProblemBySlug(slug).then((value) => { if (active) setProblem(value); }).catch(() => { if (active) setError("Problem not found or unavailable."); });
    return () => { active = false; };
  }, [slug]);
  if (error) return <main className="rounded-cards border border-error-red/40 bg-error-red/10 p-6 text-sm text-error-red">{error}</main>;
  if (!problem) return <main className="grid min-h-[620px] place-items-center rounded-cards border border-graphite bg-surface text-sm text-muted-gray">Loading problem...</main>;
  return <ProblemSolvePage problem={{ slug: problem.slug, title: problem.title, difficulty: problem.difficulty === "EASY" ? "Easy" : problem.difficulty === "MEDIUM" ? "Medium" : "Hard", status: "unsolved" }} problemDetails={problem} />;
}
