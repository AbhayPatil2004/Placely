"use client";

import type { ExecutionState } from "@/hooks/useCodeExecution";

const statusLabels: Record<ExecutionState["status"], string> = {
  idle: "Ready",
  connecting: "Connecting",
  running: "Running",
  success: "Execution successful",
  runtime_error: "Runtime error",
  compile_error: "Compilation error",
  timeout: "Execution timed out",
  error: "Execution failed",
  network_error: "Connection error",
};

export function CodeExecutionPanel({
  input,
  onInputChange,
  execution,
  notice,
  connectionStatus,
}: {
  input: string;
  onInputChange: (input: string) => void;
  execution: ExecutionState;
  notice: string;
  connectionStatus: "disconnected" | "connecting" | "connected";
}) {
  const result = execution.result;
  const stdout = result?.stdout ?? "";
  const stderr = result?.stderr ?? "";
  const statusTone =
    execution.status === "success"
      ? "text-success-green"
      : execution.status === "idle" || execution.status === "connecting" || execution.status === "running"
        ? "text-muted-gray"
        : "text-error-red";

  return (
    <section className="shrink-0 border-t border-graphite bg-surface px-4 py-3" aria-label="Code execution console">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
        <label className="flex min-w-0 flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-gray">Input (stdin)</span>
          <textarea
            aria-label="Program input"
            value={input}
            onChange={(event) => onInputChange(event.target.value)}
            placeholder="Optional input passed to your program"
            rows={2}
            className="min-h-14 max-h-28 w-full resize-y overflow-auto rounded-buttons border border-graphite bg-abyss px-3 py-2 font-mono text-xs leading-5 text-bright-gray outline-none placeholder:text-muted-gray focus:border-lavender"
          />
        </label>

        <div className="min-w-0" aria-live="polite" aria-atomic="false">
          <div className="flex min-h-5 items-center justify-between gap-3">
            <h2 className="text-xs font-medium uppercase tracking-wide text-muted-gray">Output</h2>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-gray">
                WebSocket {connectionStatus}
              </span>
              <span className={`text-xs ${statusTone}`} role="status">
                {statusLabels[execution.status]}
              </span>
            </div>
          </div>
          {execution.message ? (
            <p className="mt-1 max-h-24 overflow-auto whitespace-pre-wrap break-words font-mono text-xs leading-5 text-medium-gray">
              {execution.message}
            </p>
          ) : notice ? (
            <p className="mt-1 text-xs leading-5 text-muted-gray">{notice}</p>
          ) : result ? (
            <div className="mt-1 max-h-32 space-y-1 overflow-auto font-mono text-xs leading-5">
              {stdout ? (
                <pre className="whitespace-pre-wrap break-words text-medium-gray">{stdout}</pre>
              ) : result.status === "success" ? (
                <p className="text-muted-gray">Program executed successfully with no output.</p>
              ) : null}
              {stderr ? (
                <div>
                  <p className="text-muted-gray">Diagnostics</p>
                  <pre className="whitespace-pre-wrap break-words text-error-red">{stderr}</pre>
                </div>
              ) : null}
              {typeof result.exitCode === "number" ? (
                <p className="text-muted-gray">Exit code: {result.exitCode}</p>
              ) : null}
            </div>
          ) : (
            <p className="mt-1 text-xs leading-5 text-muted-gray">Run your code to see output.</p>
          )}
        </div>
      </div>
    </section>
  );
}
