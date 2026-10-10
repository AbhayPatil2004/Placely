"use client";

import Link from "next/link";
import { ArrowLeft, Check, ChevronDown, Star } from "lucide-react";
import { dsaTopics } from "@/data/dsaData";
import { TopicAccordion } from "@/components/dashboard/TopicAccordion";
import { useEffect, useMemo, useState } from "react";
import { ApiError, apiRequest } from "@/lib/api/client";

type ListingProblem = {
  _id: string;
  slug: string;
  title: string;
  topic?: string | null;
  order?: number | null;
  difficulty?: string | null;
};

const revisionStorageKey = "placely:dsa:practice:revision:v1";

const topicOrder = [
  { title: "Basic", keys: ["BASIC", "BASICS", "FUNDAMENTALS", "INTRODUCTION", "VARIABLES", "DATA_TYPES", "INPUT_OUTPUT", "OPERATORS", "CONDITIONALS", "LOOPS", "FUNCTIONS", "TIME_SPACE_COMPLEXITY"] },
  { title: "Arrays", keys: ["ARRAY", "ARRAYS"] },
  { title: "Strings", keys: ["STRING", "STRINGS"] },
  { title: "Sorting", keys: ["SORTING"] },
  { title: "Binary Search", keys: ["BINARY_SEARCH"] },
  { title: "Linked List", keys: ["LINKED_LIST"] },
  { title: "Stack", keys: ["STACK"] },
  { title: "Queue", keys: ["QUEUE"] },
  { title: "Recursion", keys: ["RECURSION"] },
  { title: "Backtracking", keys: ["BACKTRACKING"] },
  { title: "Trees", keys: ["TREE", "TREES"] },
  { title: "Binary Search Tree", keys: ["BINARY_SEARCH_TREE"] },
  { title: "Heap / Priority Queue", keys: ["HEAP", "PRIORITY_QUEUE", "HEAP_PRIORITY_QUEUE"] },
  { title: "Greedy", keys: ["GREEDY"] },
  { title: "Graphs", keys: ["GRAPH", "GRAPHS"] },
  { title: "Dynamic Programming", keys: ["DYNAMIC_PROGRAMMING"] },
  { title: "Trie", keys: ["TRIE"] },
  { title: "Bit Manipulation", keys: ["BIT_MANIPULATION"] },
  { title: "Matrix", keys: ["MATRIX"] },
  { title: "Searching", keys: ["SEARCHING"] },
  { title: "Hashing", keys: ["HASHING"] },
  { title: "Two Pointer", keys: ["TWO_POINTER"] },
  { title: "Sliding Window", keys: ["SLIDING_WINDOW"] },
  { title: "Prefix Sum", keys: ["PREFIX_SUM"] },
  { title: "Deque", keys: ["DEQUE"] },
  { title: "OOP", keys: ["OOP"] },
  { title: "Math", keys: ["MATH"] },
] as const;

const topicNameByKey = new Map<string, string>(
  topicOrder.flatMap(({ title, keys }) => keys.map((key) => [key, title] as const)),
);
const topicOrderByName = new Map<string, number>(
  topicOrder.map(({ title }, index) => [title, index]),
);

const difficultyStyles: Record<string, string> = {
  basic: "border-green-500/30 bg-green-500/10 text-green-500",
  easy: "border-green-500/30 bg-green-500/10 text-green-500",
  medium: "border-yellow-500/30 bg-yellow-500/10 text-yellow-600",
  hard: "border-red-500/30 bg-red-500/10 text-red-600",
};

function normalizeTopicKey(topic: string) {
  return topic.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "");
}

function formatTopic(topic: string) {
  return topic.trim().replace(/[_-]+/g, " ").replace(/\s+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");
}

function getTopicName(topic?: string | null) {
  if (!topic?.trim()) return "Other";
  const key = normalizeTopicKey(topic);
  return topicNameByKey.get(key) ?? formatTopic(topic);
}

function readStoredSlugs(storageKey: string) {
  if (typeof window === "undefined") return new Set<string>();

  try {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return new Set<string>();

    const parsed: unknown = JSON.parse(stored);
    return Array.isArray(parsed)
      ? new Set(parsed.filter((slug): slug is string => typeof slug === "string"))
      : new Set<string>();
  } catch {
    return new Set<string>();
  }
}

export function DsaListingPage({ mode }: { mode: "learn" | "practice" }) {
  const learn = mode === "learn";
  const [problems, setProblems] = useState<ListingProblem[]>([]);
  const [loading, setLoading] = useState(!learn);
  const [error, setError] = useState("");
  const [solvedProblemIds, setSolvedProblemIds] = useState<Set<string>>(new Set());
  const [revisionSlugs, setRevisionSlugs] = useState<Set<string>>(
    () => readStoredSlugs(revisionStorageKey),
  );
  const [expandedTopics, setExpandedTopics] = useState<Set<string> | null>(null);

  const groupedProblems = useMemo(() => {
    const groups = new Map<string, ListingProblem[]>();
    for (const problem of problems) {
      const topicName = getTopicName(problem.topic);
      const group = groups.get(topicName);
      if (group) group.push(problem);
      else groups.set(topicName, [problem]);
    }

    return Array.from(groups, ([topic, topicProblems]) => ({
      topic,
      problems: topicProblems.sort(
        (first, second) =>
          (first.order ?? Number.MAX_SAFE_INTEGER) -
            (second.order ?? Number.MAX_SAFE_INTEGER) ||
          first.title.localeCompare(second.title),
      ),
    })).sort((first, second) => {
      const firstOrder = topicOrderByName.get(first.topic) ?? topicOrder.length;
      const secondOrder = topicOrderByName.get(second.topic) ?? topicOrder.length;
      return firstOrder - secondOrder;
    });
  }, [problems]);

  useEffect(() => {
    if (learn) return;
    let active = true;
    Promise.all([
      apiRequest<ListingProblem[]>("/api/problem"),
      apiRequest<Array<{ problemId: string; status: string }>>("/api/solved/problem")
        .catch((requestError: unknown) => {
          if (requestError instanceof ApiError && requestError.status === 404) return [];
          throw requestError;
        }),
    ])
      .then(([nextProblems, solvedRecords]) => {
        if (active) {
          setProblems(
            [...nextProblems].sort(
              (first, second) =>
                (first.order ?? Number.MAX_SAFE_INTEGER) -
                  (second.order ?? Number.MAX_SAFE_INTEGER) ||
                first.title.localeCompare(second.title),
            ),
          );
          setSolvedProblemIds(new Set(
            solvedRecords
              .filter((record) => record.status === "SOLVED")
              .map((record) => record.problemId),
          ));
        }
      })
      .catch(() => {
        if (active) setError("Unable to load practice problems and their submission status.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, [learn]);

  const toggleStoredSlug = (
    slug: string,
    storageKey: string,
    currentSlugs: Set<string>,
    setSlugs: (slugs: Set<string>) => void,
  ) => {
    const nextSlugs = new Set(currentSlugs);
    if (nextSlugs.has(slug)) nextSlugs.delete(slug);
    else nextSlugs.add(slug);
    localStorage.setItem(storageKey, JSON.stringify([...nextSlugs]));
    setSlugs(nextSlugs);
  };

  const toggleTopic = (topic: string) => {
    setExpandedTopics((current) => {
      const next = new Set(current ?? (groupedProblems[0] ? [groupedProblems[0].topic] : []));
      if (next.has(topic)) next.delete(topic);
      else next.add(topic);
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <Link href="/dashboard" className="flex items-center gap-2 text-sm text-muted-gray hover:text-white">
        <ArrowLeft className="size-4" />
        Back to Dashboard
      </Link>
      <div>
        <p className="text-sm text-lavender">{learn ? "DSA / Learn" : "DSA / Practice"}</p>
        <h1 className="mt-2 text-heading font-semibold text-white">
          {learn ? "Learn Data Structures & Algorithms" : "Practice Data Structures & Algorithms"}
        </h1>
        <p className="mt-2 text-sm text-medium-gray">
          {learn
            ? "Build concepts progressively with focused learning material."
            : "Solve curated problems and turn concepts into reliable interview skills."}
        </p>
      </div>
      {learn ? (
        <TopicAccordion topics={dsaTopics} mode="learn" />
      ) : loading ? (
        <div className="animate-pulse rounded-cards border border-graphite bg-surface p-6 text-sm text-muted-gray">
          Loading problems...
        </div>
      ) : error ? (
        <p role="alert" className="rounded-buttons border border-error-red/40 bg-error-red/10 p-4 text-sm text-red-600">
          {error}
        </p>
      ) : problems.length === 0 ? (
        <div className="rounded-cards border border-graphite bg-surface p-6 text-sm text-muted-gray shadow-subtle">
          No practice problems are available yet.
        </div>
      ) : (
        <div className="overflow-hidden rounded-cards border border-graphite bg-surface shadow-subtle">
          {groupedProblems.map(({ topic, problems: topicProblems }, topicIndex) => {
            const solvedCount = topicProblems.filter(({ _id }) => solvedProblemIds.has(_id)).length;
            const isExpanded = expandedTopics
              ? expandedTopics.has(topic)
              : topicIndex === 0;
            const panelId = `practice-topic-${topicIndex}`;
            const progress = topicProblems.length
              ? (solvedCount / topicProblems.length) * 100
              : 0;

            return (
              <section key={topic} className="border-b border-graphite last:border-b-0">
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggleTopic(topic)}
                  className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lavender sm:px-5"
                >
                  <span
                    role="heading"
                    aria-level={2}
                    className="min-w-0 flex-1 truncate text-sm font-semibold text-bright-gray sm:text-base"
                  >
                    {topic}
                  </span>
                  <span
                    role="progressbar"
                    aria-label={`${topic} completion`}
                    aria-valuemin={0}
                    aria-valuemax={topicProblems.length}
                    aria-valuenow={solvedCount}
                    className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-graphite sm:block sm:w-24"
                  >
                    <span
                      className="block h-full rounded-full bg-lavender transition-[width]"
                      style={{ width: `${progress}%` }}
                    />
                  </span>
                  <span className="shrink-0 text-xs tabular-nums text-medium-gray">
                    {solvedCount} / {topicProblems.length}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-4 shrink-0 text-muted-gray transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {isExpanded && (
                  <div id={panelId} className="overflow-x-auto border-t border-graphite">
                    <table className="w-full min-w-[600px] border-collapse text-left">
                      <thead className="bg-abyss/70">
                        <tr className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-gray">
                          <th scope="col" className="w-20 px-4 py-2.5 sm:px-5">Status</th>
                          <th scope="col" className="px-2 py-2.5">Problem</th>
                          <th scope="col" className="w-24 px-3 py-2.5 text-center">Resource</th>
                          <th scope="col" className="w-24 px-3 py-2.5 text-center">Revision</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-graphite">
                        {topicProblems.map((problem, index) => {
                          const rawDifficulty = problem.difficulty?.trim() || "Unknown";
                          const difficulty = rawDifficulty.toLowerCase();
                          const badgeStyle =
                            difficultyStyles[difficulty] ?? "border-graphite text-muted-gray";
                          const label = ["basic", "easy", "medium", "hard"].includes(difficulty)
                            ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
                            : rawDifficulty;
                          const isCompleted = solvedProblemIds.has(problem._id);
                          const isForRevision = revisionSlugs.has(problem.slug);

                          return (
                            <tr key={problem.slug} className="transition-colors hover:bg-white/[0.03]">
                              <td className="px-4 py-3.5 sm:px-5">
                                <span
                                  role="img"
                                  aria-label={`${problem.title} ${isCompleted ? "solved" : "unsolved"}`}
                                  className="inline-flex size-5 items-center justify-center"
                                >
                                  {isCompleted ? (
                                    <Check aria-hidden="true" className="size-4 text-green-500" strokeWidth={3} />
                                  ) : (
                                    <span aria-hidden="true" className="size-2 rounded-full bg-white" />
                                  )}
                                </span>
                              </td>
                              <td className="px-2 py-3.5">
                                <div className="flex min-w-0 items-center gap-2.5">
                                  <span className="w-6 shrink-0 text-xs font-medium tabular-nums text-muted-gray">
                                    {problem.order ?? index + 1}.
                                  </span>
                                  <Link
                                    href={`/dsa/practice/problem/${problem.slug}`}
                                    className="min-w-0 truncate text-sm font-medium text-bright-gray transition-colors hover:text-lavender focus-visible:outline-none focus-visible:underline"
                                  >
                                    {problem.title}
                                  </Link>
                                  <span
                                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${badgeStyle}`}
                                  >
                                    {label}
                                  </span>
                                </div>
                              </td>
                              <td className="px-3 py-3.5 text-center">
                                <span
                                  className="text-sm text-muted-gray"
                                  aria-label="No resource available"
                                >
                                  —
                                </span>
                              </td>
                              <td className="px-3 py-3.5 text-center">
                                <button
                                  type="button"
                                  aria-label={`${isForRevision ? "Remove" : "Add"} ${problem.title} ${isForRevision ? "from" : "to"} revision list`}
                                  aria-pressed={isForRevision}
                                  onClick={() =>
                                    toggleStoredSlug(
                                      problem.slug,
                                      revisionStorageKey,
                                      revisionSlugs,
                                      setRevisionSlugs,
                                    )
                                  }
                                  className={`inline-flex size-8 items-center justify-center rounded-buttons transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender ${
                                    isForRevision
                                      ? "text-warning-yellow"
                                      : "text-muted-gray hover:text-warning-yellow"
                                  }`}
                                >
                                  <Star
                                    aria-hidden="true"
                                    className={`size-[18px] ${isForRevision ? "fill-current" : ""}`}
                                  />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
