"use client";

import { useEffect, useState } from "react";
import { AlertCircle, LoaderCircle } from "lucide-react";
import {
  getStudentProblemSubmissions,
  type SubmissionHistoryEntry,
  type SubmissionStatus,
} from "@/services/submissionService";

const statusLabels: Record<SubmissionStatus | "PENDING" | "QUEUED" | "RUNNING", string> = {
  ACCEPTED: "Accepted",
  WRONG_ANSWER: "Wrong Answer",
  TIME_LIMIT_EXCEEDED: "Time Limit Exceeded",
  MEMORY_LIMIT_EXCEEDED: "Memory Limit Exceeded",
  COMPILE_ERROR: "Compilation Error",
  RUNTIME_ERROR: "Runtime Error",
  SYSTEM_ERROR: "System Error",
  PENDING: "Pending",
  QUEUED: "Queued",
  RUNNING: "Running",
};

function formatDate(value: string | null) {
  if (!value) return "Date unavailable";
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "Date unavailable"
    : new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function StatusBadge({ status }: { status: SubmissionHistoryEntry["status"] }) {
  const color = status === "ACCEPTED"
    ? "border-success-green/30 bg-success-green/10 text-success-green"
    : status === "PENDING" || status === "QUEUED" || status === "RUNNING"
      ? "border-graphite bg-abyss text-muted-gray"
      : "border-error-red/30 bg-error-red/10 text-error-red";

  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${color}`}>
      {statusLabels[status]}
    </span>
  );
}

export function SubmissionHistoryPanel({
  problemId,
  isActive,
  refreshKey,
}: {
  problemId?: string;
  isActive: boolean;
  refreshKey: string;
}) {
  const [loadResult, setLoadResult] = useState<{
    key: string;
    submissions?: SubmissionHistoryEntry[];
    error?: string;
  } | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const requestKey = `${problemId ?? ""}:${refreshKey}:${retryCount}`;

  useEffect(() => {
    if (!isActive || !problemId) return;

    let active = true;
    getStudentProblemSubmissions(problemId)
      .then((result) => {
        if (active) setLoadResult({ key: requestKey, submissions: result });
      })
      .catch((fetchError: unknown) => {
        if (active) {
          setLoadResult({
            key: requestKey,
            error: fetchError instanceof Error
              ? fetchError.message
              : "Unable to load your submission history.",
          });
        }
      });

    return () => {
      active = false;
    };
  }, [isActive, problemId, refreshKey, requestKey]);

  const missingProblemId = isActive && !problemId;
  const isLoading = isActive && !missingProblemId && loadResult?.key !== requestKey;
  const error = loadResult?.key === requestKey ? loadResult.error : undefined;
  const submissions = loadResult?.key === requestKey ? loadResult.submissions ?? [] : [];

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden border-b border-graphite bg-surface lg:border-b-0 lg:border-r">
      <header className="shrink-0 border-b border-graphite px-5 py-4">
        <h2 className="text-sm font-semibold text-bright-gray">Your Submissions</h2>
        <p className="mt-1 text-xs text-muted-gray">
          Review previous results and the code submitted each time.
        </p>
      </header>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-5 py-4">
        {missingProblemId ? (
          <div className="rounded-buttons border border-error-red/30 bg-error-red/10 p-3 text-sm text-error-red">
            Submission history is unavailable because this problem has no identifier.
          </div>
        ) : isLoading ? (
          <div className="flex items-center gap-2 py-4 text-sm text-muted-gray" role="status">
            <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
            Loading submissions...
          </div>
        ) : error ? (
          <div className="rounded-buttons border border-error-red/30 bg-error-red/10 p-3">
            <div className="flex items-start gap-2 text-sm text-error-red">
              <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              <p>{error}</p>
            </div>
            <button
              type="button"
              onClick={() => setRetryCount((count) => count + 1)}
              className="mt-3 rounded-buttons border border-graphite px-3 py-1.5 text-xs font-medium text-medium-gray transition-colors hover:border-lavender hover:text-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
            >
              Try again
            </button>
          </div>
        ) : submissions.length === 0 ? (
          <p className="py-4 text-sm text-muted-gray">No submissions for this problem yet.</p>
        ) : (
          submissions.map((submission) => (
            <article
              key={submission.submissionId}
              className="rounded-cards border border-graphite bg-abyss/50"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 p-3">
                <div className="min-w-0">
                  <StatusBadge status={submission.status} />
                  <p className="mt-2 text-xs text-muted-gray">
                    {submission.passedTestCases} / {submission.totalTestCases} test cases passed
                  </p>
                  <p className="mt-1 text-xs text-muted-gray">
                    {submission.language.toUpperCase()} · {formatDate(submission.submittedAt)}
                  </p>
                </div>
                <details className="group">
                  <summary className="cursor-pointer list-none rounded-buttons border border-graphite px-3 py-1.5 text-xs font-medium text-medium-gray transition-colors hover:border-lavender hover:text-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">View code</span>
                    <span className="hidden group-open:inline">Hide code</span>
                  </summary>
                  <pre className="mt-3 max-h-80 w-full overflow-auto whitespace-pre-wrap break-words rounded-buttons border border-graphite bg-surface p-3 font-mono text-xs leading-5 text-medium-gray">
                    <code>{submission.code}</code>
                  </pre>
                </details>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
