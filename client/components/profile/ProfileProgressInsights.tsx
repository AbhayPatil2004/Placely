"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertCircle, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { apiRequest } from "@/lib/api/client";
import { ProfileSection } from "./ProfileSection";

type LearningProgressItem = {
  subject: string;
  topics: Array<{ topic: string; isCompleted?: boolean; completedAt?: string | null }>;
};

type LearningProgressResponse = {
  subjects?: LearningProgressItem[];
};

type DsaOverviewProgress = {
  overview: {
    totalQuestions: number;
    solvedQuestions: number;
    unsolvedQuestions: number;
    completionPercentage: number;
  };
  difficulty: {
    easy: number;
    medium: number;
    hard: number;
    basic: number;
  };
  submissions: {
    totalSubmissions: number;
    acceptedSubmissions: number;
    acceptanceRate: number;
    rejectedSubmissions: number;
  };
};

function clampPercent(value: number) {
  return Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
}

function getCompletionPercent(topics: LearningProgressItem["topics"]) {
  if (!topics.length) return 0;
  const completed = topics.filter((topic) => topic.isCompleted).length;
  return clampPercent((completed / topics.length) * 100);
}

export function ProfileProgressInsights() {
  const [learningProgress, setLearningProgress] = useState<LearningProgressResponse | null>(null);
  const [dsaProgress, setDsaProgress] = useState<DsaOverviewProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [dsaProgressError, setDsaProgressError] = useState("");

  useEffect(() => {
    let active = true;

    Promise.all([
      apiRequest<LearningProgressResponse>("/api/progress/learning").catch(() => null),
      apiRequest<DsaOverviewProgress>("/api/progress/DSA")
        .then((data) => ({ data, error: "" }))
        .catch((error: unknown) => ({
          data: null,
          error: error instanceof Error ? error.message : "Unable to load DSA progress.",
        })),
    ])
      .then(([learningData, dsaData]) => {
        if (!active) return;
        setLearningProgress(learningData ?? null);
        setDsaProgress(dsaData.data);
        setDsaProgressError(dsaData.error);
        setLoading(false);
      })
      .catch(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const coreSubjects = useMemo(() => {
    const subjects = learningProgress?.subjects ?? [];
    return subjects
      .map((subject) => ({
        name: subject.subject,
        completed: subject.topics.filter((topic) => topic.isCompleted).length,
        total: subject.topics.length,
        completion: getCompletionPercent(subject.topics),
      }))
      .sort((a, b) => b.completion - a.completion)
      .slice(0, 6);
  }, [learningProgress]);

  const dsaCompletion = clampPercent(dsaProgress?.overview?.completionPercentage ?? 0);

  return (
    <>
      <ProfileSection title="Core & Apti">
        {loading ? (
          <div className="grid gap-3 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-24 animate-pulse rounded-lg bg-abyss/80" />
            ))}
          </div>
        ) : coreSubjects.length ? (
          <div className="grid gap-3 md:grid-cols-2">
            {coreSubjects.map((subject) => (
              <Card key={subject.name} className="border border-white/5 bg-abyss/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-bright-gray">{subject.name}</p>
                  <span className="text-xs text-medium-gray">{subject.completed}/{subject.total}</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400"
                    style={{ width: `${subject.completion}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-medium-gray">{Math.round(subject.completion)}% complete</p>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-sm text-medium-gray">Start learning core subjects and aptitude topics to track progress here.</p>
        )}
      </ProfileSection>

      <ProfileSection title="DSA Progress">
        {loading ? (
          <div className="h-44 animate-pulse rounded-xl bg-abyss/80" />
        ) : dsaProgressError ? (
          <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
            <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            <p>{dsaProgressError}</p>
          </div>
        ) : dsaProgress ? (
          <div className="space-y-4 rounded-xl border border-white/5 bg-abyss/80 p-4 sm:p-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-medium-gray">Questions solved</p>
                <p className="mt-1 text-3xl font-semibold tabular-nums tracking-[-0.04em] text-bright-gray">
                  {dsaProgress.overview.solvedQuestions.toLocaleString()}
                  <span className="ml-1 text-base font-normal text-muted-gray">
                    / {dsaProgress.overview.totalQuestions.toLocaleString()}
                  </span>
                </p>
              </div>
              <p className="flex items-center gap-1.5 text-sm font-medium text-emerald-400">
                <Check aria-hidden="true" className="size-4" />
                {dsaCompletion.toFixed(1)}% complete
              </p>
            </div>

            <div
              role="progressbar"
              aria-label="DSA question completion"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(dsaCompletion)}
              className="h-2 overflow-hidden rounded-full bg-white/5"
            >
              <div
                className="h-full rounded-full bg-emerald-400 transition-[width]"
                style={{ width: `${dsaCompletion}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Basic", value: dsaProgress.difficulty.basic, tone: "text-emerald-400" },
                { label: "Easy", value: dsaProgress.difficulty.easy, tone: "text-sky-400" },
                { label: "Medium", value: dsaProgress.difficulty.medium, tone: "text-amber-400" },
                { label: "Hard", value: dsaProgress.difficulty.hard, tone: "text-red-400" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/5 bg-surface/80 p-3">
                  <p className="text-xs font-medium text-medium-gray">{item.label} solved</p>
                  <p className={`mt-1 text-xl font-semibold tabular-nums ${item.tone}`}>
                    {item.value.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 border-t border-white/5 pt-3 sm:grid-cols-3">
              <div>
                <p className="text-xs text-muted-gray">Remaining</p>
                <p className="mt-1 text-sm font-semibold text-bright-gray">
                  {dsaProgress.overview.unsolvedQuestions.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-gray">Submissions</p>
                <p className="mt-1 text-sm font-semibold text-bright-gray">
                  {dsaProgress.submissions.totalSubmissions.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-gray">Acceptance rate</p>
                <p className="mt-1 text-sm font-semibold text-bright-gray">
                  {dsaProgress.submissions.acceptanceRate.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-medium-gray">DSA progress is not available yet.</p>
        )}
      </ProfileSection>
    </>
  );
}
