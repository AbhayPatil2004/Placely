"use client";

import { Bookmark, Building2 } from "lucide-react";
import { siFacebook, siGoogle, siMeta } from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import type { PracticeProblem } from "@/data/dsaData";
import type { ProblemDifficulty } from "@/services/problemService";

type ProblemContent = Omit<PracticeProblem, "difficulty"> & {
  difficulty: PracticeProblem["difficulty"] | ProblemDifficulty;
  problemStatement?: string;
  description?: string;
  topic?: string;
  subTopics?: string[];
  tags?: string[];
  pattern?: string[];
  inputFormat?: string;
  outputFormat?: string;
  constraints?: string[];
  examples?: { input: string; output: string; explanation?: string }[];
  companies?: string[];
  expectedTimeComplexity?: string;
  expectedSpaceComplexity?: string;
  accuracy?: string;
  submissions?: string;
  points?: number;
};

const difficultyStyles: Record<string, string> = {
  easy: "border-success-green/30 bg-success-green/10 text-success-green",
  medium: "border-warning-yellow/30 bg-warning-yellow/10 text-warning-yellow",
  hard: "border-error-red/30 bg-error-red/10 text-error-red",
};

const readableEnumLabels: Record<string, string> = {
  TWO_POINTER_SLIDING_WINDOW_PREFIX_SUM: "Two Pointer / Sliding Window / Prefix Sum",
  FAST_SLOW_POINTER: "Fast / Slow Pointer",
  UNION_FIND: "Union Find",
};

const companyIcons: Record<string, SimpleIcon> = {
  google: siGoogle,
  meta: siMeta,
  facebook: siFacebook,
};

function formatLabel(value: string) {
  const normalized = value.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "");
  return readableEnumLabels[normalized] ??
    normalized
      .split("_")
      .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
      .join(" ");
}

function formatValues(values?: string[]) {
  return (values ?? []).filter((value) => typeof value === "string" && value.trim().length > 0);
}

function getCompanyIcon(company: string) {
  const normalized = company
    .trim()
    .toLowerCase()
    .replace(/\.com\b/g, "")
    .replace(/\b(incorporated|corporation|corp|limited|ltd|llc|inc)\b/g, "")
    .replace(/[^a-z0-9]/g, "");

  return companyIcons[normalized];
}

function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-subheading font-semibold text-bright-gray">{title}</h2>
      <div className="mt-3 text-body-sm leading-6 text-medium-gray">{children}</div>
    </section>
  );
}

export function ProblemStatementPane({ problem }: { problem: ProblemContent }) {
  const difficulty = String(problem.difficulty ?? "").trim();
  const normalizedDifficulty = difficulty.toLowerCase();
  const difficultyLabel = normalizedDifficulty
    ? normalizedDifficulty.charAt(0).toUpperCase() + normalizedDifficulty.slice(1)
    : "Unknown";
  const difficultyStyle = difficultyStyles[normalizedDifficulty] ?? "border-graphite text-muted-gray";
  const topic = typeof problem.topic === "string" ? problem.topic.trim() : "";
  const subTopics = formatValues(problem.subTopics);
  const tags = formatValues(problem.tags);
  const patterns = formatValues(problem.pattern);
  const constraints = formatValues(problem.constraints);
  const companies = formatValues(problem.companies);
  const examples = (problem.examples ?? []).filter(
    (example) => example && (example.input?.trim() || example.output?.trim()),
  );
  const timeComplexity = problem.expectedTimeComplexity?.trim();
  const spaceComplexity = problem.expectedSpaceComplexity?.trim();

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden border-b border-graphite bg-surface lg:border-b-0 lg:border-r">
      <div className="z-[1] shrink-0 border-b border-graphite bg-surface px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-heading-sm font-semibold tracking-[-0.02em] text-bright-gray">
                {problem.title?.trim() || "Untitled Problem"}
              </h1>
              <span className={`rounded-full border px-2 py-1 text-xs font-medium ${difficultyStyle}`}>
                {difficultyLabel}
              </span>
            </div>
            {(problem.accuracy || problem.submissions || problem.points !== undefined) && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-gray">
                {problem.accuracy && (
                  <span className="rounded-full border border-graphite px-2 py-1">
                    Accuracy {problem.accuracy}
                  </span>
                )}
                {problem.submissions && (
                  <span className="rounded-full border border-graphite px-2 py-1">
                    Submissions {problem.submissions}
                  </span>
                )}
                {problem.points !== undefined && (
                  <span className="rounded-full border border-graphite px-2 py-1">
                    Points {problem.points}
                  </span>
                )}
              </div>
            )}
            {(topic || subTopics.length > 0 || tags.length > 0) && (
              <div className={`${problem.accuracy || problem.submissions || problem.points !== undefined ? "mt-2" : "mt-3"} flex flex-wrap gap-2`}>
                {topic && (
                  <span className="rounded-full border border-graphite px-2 py-1 text-xs text-medium-gray">
                    {formatLabel(topic)}
                  </span>
                )}
                {subTopics.map((subTopic) => (
                  <span key={`subtopic-${subTopic}`} className="rounded-full border border-graphite px-2 py-1 text-xs text-muted-gray">
                    {formatLabel(subTopic)}
                  </span>
                ))}
                {tags.map((tag) => (
                  <span key={`tag-${tag}`} className="rounded-full border border-graphite px-2 py-1 text-xs text-muted-gray">
                    {formatLabel(tag)}
                  </span>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-7 overflow-y-auto overscroll-contain px-5 py-6">
        <ContentSection title="Problem Statement">
          <p className="whitespace-pre-line">
            {problem.problemStatement?.trim() || problem.description?.trim() || "Problem statement unavailable."}
          </p>
        </ContentSection>

        {examples.length > 0 && (
          <ContentSection title="Examples">
            <div className="space-y-3">
              {examples.map((example, index) => (
                <article key={`${example.input}-${index}`} className="min-w-0 rounded-cards border border-graphite bg-abyss p-4">
                  <h3 className="mb-3 text-sm font-medium text-bright-gray">Example {index + 1}</h3>
                  {example.input?.trim() && (
                    <div>
                      <p className="mb-1 text-xs font-medium text-muted-gray">Input</p>
                      <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-buttons border border-graphite bg-surface p-3 font-mono text-xs leading-5 text-medium-gray">
                        {example.input}
                      </pre>
                    </div>
                  )}
                  {example.output?.trim() && (
                    <div className="mt-3">
                      <p className="mb-1 text-xs font-medium text-muted-gray">Output</p>
                      <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-buttons border border-graphite bg-surface p-3 font-mono text-xs leading-5 text-medium-gray">
                        {example.output}
                      </pre>
                    </div>
                  )}
                  {example.explanation?.trim() && (
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-gray">
                      <span className="font-medium text-medium-gray">Explanation: </span>
                      {example.explanation}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </ContentSection>
        )}

        {constraints.length > 0 && (
          <ContentSection title="Constraints">
            <ul className="list-disc space-y-2 pl-5">
              {constraints.map((constraint, index) => (
                <li key={`${constraint}-${index}`} className="break-words">{constraint}</li>
              ))}
            </ul>
          </ContentSection>
        )}

        {problem.inputFormat?.trim() && (
          <ContentSection title="Input Format">
            <p className="whitespace-pre-line">{problem.inputFormat}</p>
          </ContentSection>
        )}

        {problem.outputFormat?.trim() && (
          <ContentSection title="Output Format">
            <p className="whitespace-pre-line">{problem.outputFormat}</p>
          </ContentSection>
        )}

        {patterns.length > 0 && (
          <ContentSection title="Patterns">
            <div className="flex flex-wrap gap-2">
              {patterns.map((pattern) => (
                <span key={pattern} className="rounded-full border border-graphite px-2 py-1 text-xs text-medium-gray">
                  {formatLabel(pattern)}
                </span>
              ))}
            </div>
          </ContentSection>
        )}

        {companies.length > 0 && (
          <ContentSection title="Companies">
            <div className="flex flex-wrap gap-2">
              {companies.map((company) => (
                <span key={company} className="inline-flex items-center gap-1.5 rounded-full border border-graphite px-2.5 py-1.5 text-xs text-medium-gray">
                  {(() => {
                    const icon = getCompanyIcon(company);
                    return icon ? (
                      <svg
                        aria-label={`${company.trim()} logo`}
                        className="size-3.5 shrink-0"
                        fill={`#${icon.hex}`}
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <path d={icon.path} />
                      </svg>
                    ) : (
                      <Building2 aria-hidden="true" className="size-3.5 shrink-0 text-muted-gray" />
                    );
                  })()}
                  {company.trim()}
                </span>
              ))}
            </div>
          </ContentSection>
        )}

        {(timeComplexity || spaceComplexity) && (
          <ContentSection title="Expected Complexity">
            <dl className="space-y-2">
              {timeComplexity && (
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-muted-gray">Time:</dt>
                  <dd className="font-mono">{timeComplexity}</dd>
                </div>
              )}
              {spaceComplexity && (
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-muted-gray">Space:</dt>
                  <dd className="font-mono">{spaceComplexity}</dd>
                </div>
              )}
            </dl>
          </ContentSection>
        )}
      </div>
    </section>
  );
}
