"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { useCoreLearnProgress } from "@/hooks/useCoreLearnProgress";
import {
  getSubjectLearn,
  type LearnQuestion,
  type SubjectKey,
} from "@/services/coreSubjectService";
import { useAuth } from "@/lib/auth-context";

const subjectDetails: Record<SubjectKey, { code: string; title: string; description: string }> = {
  oop: {
    code: "OOP",
    title: "Object-Oriented Programming",
    description: "Review the concepts and principles that shape object-oriented design.",
  },
  os: {
    code: "OS",
    title: "Operating Systems",
    description: "Study processes, memory, scheduling, and operating system concepts.",
  },
  cn: {
    code: "CN",
    title: "Computer Networks",
    description: "Study network architecture, protocols, and data communication.",
  },
  dbms: {
    code: "DBMS",
    title: "Database Management Systems",
    description: "Study data models, queries, transactions, and database systems.",
  },
  swe: {
    code: "SWE",
    title: "Software Engineering",
    description: "Study software processes, development methods, and system design.",
  },
};

function formatDifficulty(difficulty: string) {
  const normalized = difficulty.trim().toLowerCase();
  if (normalized === "easy") return "Easy";
  if (normalized === "medium") return "Medium";
  if (normalized === "hard") return "Hard";
  return difficulty;
}

export function CoreLearnPage({ subject }: { subject: SubjectKey }) {
  const details = subjectDetails[subject];
  const { user } = useAuth();
  const userId = user?._id ?? user?.studentId ?? null;
  const [questions, setQuestions] = useState<LearnQuestion[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { completedQuestionIds, reconcile, toggleCompleted } =
    useCoreLearnProgress(subject, userId);

  const completedCount = questions.reduce(
    (count, question) => count + (completedQuestionIds.has(question.id) ? 1 : 0),
    0,
  );
  const progressPercentage = questions.length
    ? Math.round((completedCount / questions.length) * 100)
    : 0;
  const questionText = (question: string) => question.replace(/^\s*\d+\.\s*/, "");

  const loadQuestions = useCallback(async (forceRefresh = false) => {
    setError(null);
    if (forceRefresh) setLoading(true);
    try {
      const nextQuestions = await getSubjectLearn(subject, { forceRefresh });
      setQuestions(nextQuestions);
      reconcile(nextQuestions.map((question) => question.id));
    } catch (requestError) {
      setError(
        requestError instanceof ApiError
          ? requestError.message
          : "Unable to load learning resources.",
      );
    } finally {
      setLoading(false);
    }
  }, [reconcile, subject]);

  useEffect(() => {
    void Promise.resolve().then(() => loadQuestions());
  }, [loadQuestions]);

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-gray">
        <Link href="/dashboard" className="hover:text-white">Home</Link>
        <ChevronRight className="size-4 text-graphite" aria-hidden="true" />
        <Link href="/subjects" className="hover:text-white">Core Subjects</Link>
        <ChevronRight className="size-4 text-graphite" aria-hidden="true" />
        <span className="text-white">{details.code} / Learn</span>
      </nav>

      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-muted-gray">{details.code}</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-heading font-semibold text-white">{details.title}</h1>
            <p className="mt-2 text-sm text-medium-gray">{details.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-button border border-white bg-white px-4 py-2 text-sm font-medium text-abyss">Learn</span>
            <span className="rounded-button border border-graphite px-4 py-2 text-sm text-muted-gray" aria-disabled="true">Test · Coming soon</span>
          </div>
        </div>
      </header>

      <section className="rounded-cards border border-graphite bg-surface p-5 shadow-subtle">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-gray">{details.code} learning progress</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {completedCount} of {questions.length} resources completed
            </p>
          </div>
          <span className="text-sm text-bright-gray">{progressPercentage}%</span>
        </div>
        <div
          className="mt-4 h-2 overflow-hidden rounded-full bg-graphite"
          role="progressbar"
          aria-label={`${details.title} learning progress`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPercentage}
        >
          <div
            className="h-full rounded-full bg-bright-gray transition-[width]"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </section>

      {loading ? (
        <div className="space-y-3" aria-label={`Loading ${details.title} resources`}>
          {[1, 2, 3].map((item) => <div key={item} className="h-16 animate-pulse rounded-cards border border-graphite bg-surface" />)}
        </div>
      ) : error ? (
        <div className="rounded-cards border border-error-red/40 bg-surface p-6">
          <p className="text-sm text-error-red">Unable to load learning resources.</p>
          <p className="mt-2 text-sm text-muted-gray">{error}</p>
          <button type="button" onClick={() => void loadQuestions(true)} className="mt-4 inline-flex items-center gap-2 rounded-button border border-white bg-white px-4 py-2 text-sm font-medium text-abyss">
            <RotateCcw className="size-4" /> Retry
          </button>
        </div>
      ) : questions.length === 0 ? (
        <div className="rounded-cards border border-graphite bg-surface p-6 text-sm text-muted-gray">No learning resources available yet.</div>
      ) : (
        <section className="overflow-hidden rounded-cards border border-graphite bg-surface shadow-subtle">
          <div className="hidden grid-cols-[64px_1fr_110px_32px] gap-4 border-b border-graphite px-5 py-3 text-xs uppercase tracking-wide text-muted-gray sm:grid">
            <span>Status</span><span>Question</span><span>Level</span><span />
          </div>
          {questions.map((item, index) => {
            const isExpanded = expanded === item.id;
            const isCompleted = completedQuestionIds.has(item.id);
            const normalizedDifficulty = item.difficulty.trim().toLowerCase();
            const difficultyClass =
              normalizedDifficulty === "easy"
                ? "border-success-green/40 bg-success-green/10 text-success-green"
                : normalizedDifficulty === "medium"
                  ? "border-warning-yellow/40 bg-warning-yellow/10 text-warning-yellow"
                  : normalizedDifficulty === "hard"
                    ? "border-error-red/40 bg-error-red/10 text-error-red"
                    : "border-graphite bg-abyss text-muted-gray";

            return (
              <div key={item.id} className={`border-b border-graphite last:border-b-0 ${isCompleted ? "bg-white/[0.02]" : ""}`}>
                <div className="grid grid-cols-[28px_minmax(0,1fr)_32px] items-center gap-3 px-5 py-4 sm:grid-cols-[64px_minmax(0,1fr)_110px_32px] sm:gap-4">
                  <label className="flex size-5 cursor-pointer items-center justify-center" onClick={(event) => event.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={() => toggleCompleted(item.id)}
                      aria-label={`Mark question ${index + 1} as completed`}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className="relative size-4 rounded-[3px] border border-graphite bg-abyss transition-colors after:absolute after:left-[3px] after:top-0.5 after:hidden after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-abyss after:content-[''] peer-checked:border-white peer-checked:bg-white peer-checked:after:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : item.id)}
                    aria-expanded={isExpanded}
                    className={`min-w-0 text-left text-sm font-medium transition-colors hover:text-white ${isCompleted ? "text-medium-gray" : "text-white"}`}
                  >
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="min-w-0">
                        <span className="mr-2 text-xs text-muted-gray">{index + 1}.</span>
                        {questionText(item.question)}
                      </span>
                      <span className={`w-fit rounded-full border px-2 py-1 text-[11px] sm:hidden ${difficultyClass}`}>
                        {formatDifficulty(item.difficulty)}
                      </span>
                    </span>
                  </button>
                  <span className={`hidden justify-self-start rounded-full border px-2 py-1 text-[11px] sm:inline-flex ${difficultyClass}`}>
                    {formatDifficulty(item.difficulty)}
                  </span>
                  {isExpanded ? <ChevronDown className="size-4 text-white" /> : <ChevronRight className="size-4 text-muted-gray" />}
                </div>
                {isExpanded ? (
                  <div className="border-t border-graphite px-5 py-4 sm:ml-16">
                    <p className="text-xs uppercase tracking-wide text-muted-gray">Answer</p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-medium-gray">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
