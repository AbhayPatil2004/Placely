"use client";

import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import type { PracticeProblem } from "@/data/dsaData";
import { CodeEditorPane } from "./CodeEditorPane";
import { ProblemStatementPane } from "./ProblemStatementPane";
import type { Problem } from "@/services/problemService";

export function ProblemSolvePage({ problem, problemDetails }: { problem: PracticeProblem; problemDetails?: Problem }) {
  const [leftPaneWidth, setLeftPaneWidth] = useState(45);
  const isDragging = useRef(false);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !event.currentTarget.parentElement) return;
    const bounds = event.currentTarget.parentElement.getBoundingClientRect();
    const nextWidth = ((event.clientX - bounds.left) / bounds.width) * 100;
    setLeftPaneWidth(Math.min(65, Math.max(30, nextWidth)));
  };

  return (
    <main
      className="flex min-h-[calc(100vh-10rem)] h-full flex-col overflow-hidden rounded-cards border border-graphite bg-abyss lg:h-[calc(100vh-10rem)] lg:flex-row"
      onPointerMove={handlePointerMove}
      onPointerUp={() => { isDragging.current = false; }}
      onPointerLeave={() => { isDragging.current = false; }}
    >
      <div className="min-h-[48vh] h-full lg:min-h-0" style={{ flexBasis: `${leftPaneWidth}%` }}>
        <ProblemStatementPane problem={problemDetails ? {
          ...problemDetails,
          difficulty: problemDetails.difficulty,
          status: "unsolved",
        } : problem} />
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
        <CodeEditorPane starterCode={problemDetails?.starterCode} />
      </div>
    </main>
  );
}
