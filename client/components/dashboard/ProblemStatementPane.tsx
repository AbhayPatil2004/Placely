"use client";

import { Bookmark } from "lucide-react";
import type { PracticeProblem } from "@/data/dsaData";

type ProblemContent = Omit<PracticeProblem, "difficulty" | "status"> & {
  difficulty: PracticeProblem["difficulty"] | "EASY" | "MEDIUM" | "HARD";
  status?: PracticeProblem["status"];
  problemStatement?: string;
  accuracy?: string;
  submissions?: string;
  points?: number;
  description?: string;
  examples?: { input: string; output: string; explanation: string }[];
  constraints?: string[];
};

const fallbackExamples = [
  {
    input: "arr = [2, 7, 11, 15], target = 9",
    output: "[0, 1]",
    explanation: "The values at indices 0 and 1 add up to the target.",
  },
];

export function ProblemStatementPane({ problem }: { problem: ProblemContent }) {
  const examples = problem.examples ?? fallbackExamples;
  const constraints = problem.constraints ?? [
    "Use the required input and output format.",
    "Aim for an efficient solution.",
  ];

  return (
    <section className="min-h-0 overflow-y-auto border-b border-graphite bg-surface lg:border-b-0 lg:border-r">
      <div className="sticky top-0 z-[1] border-b border-graphite bg-surface/95 px-5 py-4 backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-heading-sm font-semibold tracking-[-0.02em] text-bright-gray">
                {problem.title}
              </h1>
              <span className="rounded-full bg-tag-background/15 px-2 py-1 text-xs font-medium text-lavender">
                {problem.difficulty === "EASY" ? "Easy" : problem.difficulty === "MEDIUM" ? "Medium" : problem.difficulty === "HARD" ? "Hard" : problem.difficulty}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-gray">
              {problem.accuracy && <span className="rounded-full border border-graphite px-2 py-1">Accuracy {problem.accuracy}</span>}
              {problem.submissions && <span className="rounded-full border border-graphite px-2 py-1">Submissions {problem.submissions}</span>}
              {problem.points !== undefined && <span className="rounded-full border border-graphite px-2 py-1">Points {problem.points}</span>}
            </div>
          </div>
          <button
            type="button"
            aria-label="Save problem"
            className="rounded-buttons p-2 text-muted-gray transition-colors hover:bg-abyss hover:text-lavender focus:outline-none focus:ring-2 focus:ring-lavender"
          >
            <Bookmark className="size-5" />
          </button>
        </div>
      </div>

      <div className="space-y-7 px-5 py-6">
        <p className="text-body-sm leading-6 text-medium-gray">
          {problem.description ?? problem.problemStatement ??
            "Solve this problem by designing a clear and efficient algorithm. Explain your approach through readable code and handle the expected input range."}
        </p>

        <section>
          <h2 className="text-subheading font-semibold text-bright-gray">Examples</h2>
          <div className="mt-3 space-y-3">
            {examples.map((example, index) => (
              <article key={`${example.input}-${index}`} className="rounded-cards border border-graphite bg-abyss p-4">
                <p className="text-body-sm text-medium-gray">
                  <span className="font-medium text-bright-gray">Input:</span>{" "}
                  <code className="font-mono text-lavender">{example.input}</code>
                </p>
                <p className="mt-2 text-body-sm text-medium-gray">
                  <span className="font-medium text-bright-gray">Output:</span>{" "}
                  <code className="font-mono text-lavender">{example.output}</code>
                </p>
                <p className="mt-3 text-body-sm leading-6 text-muted-gray">
                  <span className="font-medium text-medium-gray">Explanation:</span> {example.explanation}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-subheading font-semibold text-bright-gray">Constraints</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-body-sm leading-6 text-muted-gray">
            {constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}
          </ul>
        </section>
      </div>
    </section>
  );
}
