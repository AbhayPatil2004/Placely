"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent } from "react";
import type { PracticeProblem } from "@/data/dsaData";
import { CodeEditorPane } from "./CodeEditorPane";
import { ProblemStatementPane } from "./ProblemStatementPane";
import type { Problem } from "@/services/problemService";
import { useCodeExecution } from "@/hooks/useCodeExecution";
import { SubmissionResultPanel } from "./SubmissionResultPanel";

export function ProblemSolvePage({ problem, problemDetails }: { problem: PracticeProblem; problemDetails?: Problem }) {
  const [leftPaneWidth, setLeftPaneWidth] = useState(45);
  const [isResultPanelOpen, setIsResultPanelOpen] = useState(false);
  const [resultMode, setResultMode] = useState<"execution" | "submission">("execution");
  const isDragging = useRef(false);
  const {
    execution,
    connectionStatus,
    isBusy,
    run,
    submission,
    isSubmitting,
    submit,
  } = useCodeExecution();
  const publicTestCaseIndexes = useMemo(
    () => new Set(
      (problemDetails?.testCases ?? []).flatMap((testCase, index) =>
        testCase.isPublic === true ? [index] : [],
      ),
    ),
    [problemDetails?.testCases],
  );
  const hasResultActivity =
    execution.status !== "idle" ||
    submission.status !== "idle";

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !event.currentTarget.parentElement) return;
    const bounds = event.currentTarget.parentElement.getBoundingClientRect();
    const nextWidth = ((event.clientX - bounds.left) / bounds.width) * 100;
    setLeftPaneWidth(Math.min(65, Math.max(30, nextWidth)));
  };

  const handleRun = useCallback((code: string, language: Parameters<typeof run>[0]["language"]) => {
    setResultMode("execution");
    setIsResultPanelOpen(true);
    void run({ code, language, input: "" });
  }, [run]);

  const handleSubmit = useCallback((
    studentCode: string,
    language: Parameters<typeof submit>[0]["language"],
  ) => {
    setResultMode("submission");
    setIsResultPanelOpen(true);
    void submit({
      problemId: problemDetails?._id ?? "",
      studentCode,
      language,
    });
  }, [problemDetails?._id, submit]);

  useEffect(() => {
    if (!isResultPanelOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsResultPanelOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResultPanelOpen]);

  return (
    <main
      className="flex min-h-[calc(100vh-10rem)] h-full flex-col overflow-hidden rounded-cards border border-graphite bg-abyss lg:h-[calc(100vh-10rem)] lg:flex-row"
      onPointerMove={handlePointerMove}
      onPointerUp={() => { isDragging.current = false; }}
      onPointerLeave={() => { isDragging.current = false; }}
    >
      <div
        className="relative min-h-[48vh] h-full min-w-0 lg:min-h-0"
        style={{ flexBasis: `${leftPaneWidth}%` }}
      >
        <ProblemStatementPane problem={problemDetails ? {
          ...problemDetails,
          difficulty: problemDetails.difficulty,
          status: "unsolved",
        } : problem} />
        {!isResultPanelOpen && hasResultActivity && (
          <button
            type="button"
            onClick={() => setIsResultPanelOpen(true)}
            className="absolute right-3 top-3 z-10 rounded-buttons border border-graphite bg-surface px-3 py-2 text-xs font-medium text-medium-gray shadow-subtle transition-colors hover:border-lavender hover:text-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
          >
            Show {resultMode === "submission" ? "Submission" : "Execution"} Result
          </button>
        )}
        <SubmissionResultPanel
          isOpen={isResultPanelOpen}
          onClose={() => setIsResultPanelOpen(false)}
          mode={resultMode}
          execution={execution}
          connectionStatus={connectionStatus}
          isRunning={isBusy}
          submission={submission}
          isSubmitting={isSubmitting}
          publicTestCaseIndexes={publicTestCaseIndexes}
        />
      </div>
      <div
        role="separator"
        aria-label="Resize problem and editor panes"
        aria-orientation="vertical"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          isDragging.current = true;
        }}
        className="hidden w-1 shrink-0 cursor-col-resize bg-graphite transition-colors hover:bg-lavender lg:block"
      />
      <div className="min-h-[48vh] h-full min-w-0 flex-1 lg:min-h-0">
        <CodeEditorPane
          starterCode={problemDetails?.starterCode}
          onRun={handleRun}
          onSubmit={handleSubmit}
          isRunning={isBusy}
          isSubmitting={isSubmitting}
        />
      </div>
    </main>
  );
}
