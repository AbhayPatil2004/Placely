import Link from "next/link";
import { CheckCircle2, Circle, Play, RotateCcw } from "lucide-react";
import type { PracticeProblem } from "@/data/dsaData";

const difficultyClass = { Easy: "text-success-green", Medium: "text-warning-yellow", Hard: "text-error-red" };
export function PracticeProblemRow({ index, problem }: { index: number; problem: PracticeProblem }) {
  return <div className="flex items-center gap-3 py-3"><span className="w-5 text-xs text-muted-gray">{index}</span><span className="min-w-0 flex-1 truncate text-sm text-white">{problem.title}</span><span className={`hidden text-xs sm:inline ${difficultyClass[problem.difficulty]}`}>{problem.difficulty}</span><span title={problem.status} className="text-muted-gray">{problem.status === "solved" ? <CheckCircle2 className="size-4 text-success-green" /> : problem.status === "attempted" ? <RotateCcw className="size-4 text-warning-yellow" /> : <Circle className="size-4" />}</span><Link href={`/dsa/practice/problem/${problem.slug}`} className="inline-flex items-center gap-1 rounded-buttons border border-graphite px-2.5 py-1.5 text-xs text-white hover:border-lavender hover:text-lavender"><Play className="size-3" />Solve</Link></div>;
}
