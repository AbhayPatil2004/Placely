"use client";

import { Check, CircleAlert, LoaderCircle, X, XCircle } from "lucide-react";
import type { ExecutionState } from "@/hooks/useCodeExecution";
import type { SubmissionState, SubmissionStatus } from "@/services/submissionService";
import type { CodeRunResult } from "@/services/codeExecutionService";

type ResultMode = "execution" | "submission";

const submissionStatusLabels: Record<SubmissionStatus, string> = {
  ACCEPTED: "Accepted",
  WRONG_ANSWER: "Wrong Answer",
  TIME_LIMIT_EXCEEDED: "Time Limit Exceeded",
  MEMORY_LIMIT_EXCEEDED: "Memory Limit Exceeded",
  COMPILE_ERROR: "Compilation Error",
  RUNTIME_ERROR: "Runtime Error",
  SYSTEM_ERROR: "System Error",
};

const executionStatusLabels: Record<ExecutionState["status"], string> = {
  idle: "Ready",
  connecting: "Connecting",
  running: "Running",
  success: "Execution Successful",
  runtime_error: "Runtime Error",
  compile_error: "Compilation Error",
  timeout: "Time Limit Exceeded",
  memory_limit_exceeded: "Memory Limit Exceeded",
  error: "Execution Error",
  network_error: "Connection Error",
};

function StatusIcon({ success, pending = false }: { success: boolean; pending?: boolean }) {
  if (pending) return <LoaderCircle aria-hidden="true" className="size-4 animate-spin text-muted-gray" />;
  if (success) return <Check aria-hidden="true" className="size-4 text-green-600" />;
  return <XCircle aria-hidden="true" className="size-4 text-red-600" />;
}

function DataBlock({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "error";
}) {
  return (
    <div className="min-w-0">
      <h3 className="text-xs text-muted-gray">{label}</h3>
      <pre className={`mt-1 max-h-36 overflow-auto whitespace-pre-wrap break-words rounded-buttons border border-graphite bg-abyss p-2.5 font-mono text-xs leading-5 ${
        tone === "error" ? "text-red-500" : "text-medium-gray"
      }`}>
        {value}
      </pre>
    </div>
  );
}

function formatTestCaseInput(value: unknown): string {
  if (typeof value === "string") return value;

  const formatStructuredValue = (current: unknown, depth: number): string => {
    if (Array.isArray(current)) {
      if (current.every((item) => item === null || typeof item !== "object")) {
        return `[ ${current.map(formatStructuredValueItem).join(", ")} ]`;
      }
      const indentation = "  ".repeat(depth + 1);
      const closingIndentation = "  ".repeat(depth);
      return `[\n${indentation}${current
        .map((item) => formatStructuredValue(item, depth + 1))
        .join(`,\n${indentation}`)}\n${closingIndentation}]`;
    }

    if (current !== null && typeof current === "object") {
      const entries = Object.entries(current);
      if (entries.length === 0) return "{}";
      const indentation = "  ".repeat(depth + 1);
      const closingIndentation = "  ".repeat(depth);
      return `{\n${indentation}${entries
        .map(([key, item]) => `${JSON.stringify(key)}: ${formatStructuredValue(item, depth + 1)}`)
        .join(`,\n${indentation}`)}\n${closingIndentation}}`;
    }

    return JSON.stringify(current) ?? String(current);
  };

  const formatStructuredValueItem = (item: unknown) =>
    item !== null && typeof item === "object"
      ? formatStructuredValue(item, 0)
      : JSON.stringify(item) ?? String(item);

  return formatStructuredValue(value, 0);
}

function TestCaseDetails({
  result,
  testCaseInputs,
}: {
  result: SubmissionState["result"] | CodeRunResult;
  testCaseInputs?: readonly unknown[];
}) {
  if (!result) return null;

  const isCodeRun = "jobId" in result;
  const isCompileOrRuntimeError =
    isCodeRun && (result.status === "COMPILE_ERROR" || result.status === "RUNTIME_ERROR");
  const errorDetails = isCompileOrRuntimeError
    ? [result.errorMessage, result.stderr]
        .filter((detail, index, details) => detail.trim() && details.indexOf(detail) === index)
        .join("\n")
    : "";

  return (
    <div className="space-y-5">
      {!isCompileOrRuntimeError && (
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className={`flex items-center gap-2 text-sm font-semibold ${
              result.status === "ACCEPTED" ? "text-green-500" : "text-red-500"
            }`}>
              <StatusIcon success={result.status === "ACCEPTED"} />
              <span>
                {isCodeRun && result.status === "ACCEPTED"
                  ? "Success"
                  : submissionStatusLabels[result.status]}
              </span>
            </div>
            <p className="mt-1 text-xs text-green-500">
              {result.passedTestCases} / {result.totalTestCases} test cases passed
            </p>
          </div>
        </div>
      )}

      {((result.executionTime !== null && result.executionTime > 0) ||
        (result.memoryUsed !== null && result.memoryUsed > 0) ||
        result.exitCode !== null) && (
        <dl className="grid grid-cols-2 gap-3 rounded-buttons border border-graphite bg-abyss/50 p-3">
          {result.executionTime !== null && result.executionTime > 0 && (
            <div>
              <dt className="text-xs text-muted-gray">Runtime</dt>
              <dd className="mt-1 text-sm font-medium text-bright-gray">{result.executionTime} ms</dd>
            </div>
          )}
          {result.memoryUsed !== null && result.memoryUsed > 0 && (
            <div>
              <dt className="text-xs text-muted-gray">Memory</dt>
              <dd className="mt-1 text-sm font-medium text-bright-gray">{result.memoryUsed} KB</dd>
            </div>
          )}
          {result.exitCode !== null && (
            <div>
              <dt className="text-xs text-muted-gray">Exit code</dt>
              <dd className="mt-1 text-sm font-medium text-bright-gray">{result.exitCode}</dd>
            </div>
          )}
        </dl>
      )}

      {result.testCasesResult.length > 0 && (
        <section aria-label="Test cases">
          <div className="mb-2 flex items-center justify-between border-b border-graphite pb-2">
            <h3 className="text-sm font-semibold text-bright-gray">Test Cases</h3>
            <span className="text-xs tabular-nums text-muted-gray">
              {result.passedTestCases} / {result.totalTestCases} Passed
            </span>
          </div>
          {result.testCasesResult.length < result.totalTestCases && (
            <p className="mb-2 text-xs text-muted-gray">
              Showing {result.testCasesResult.length} of {result.totalTestCases} detailed test cases.
            </p>
          )}
          <div className="space-y-1">
            {result.testCasesResult.map((testCase, index) => {
              const passed = testCase.status === "passed";
              const input = testCaseInputs && index < testCaseInputs.length
                ? formatTestCaseInput(testCaseInputs[index])
                : testCase.testCase;

              return (
                <details key={`result-test-${index}`} className="group rounded-buttons border border-transparent open:border-graphite open:bg-abyss/40">
                  <summary className="flex cursor-pointer list-none items-center gap-2 rounded-buttons px-2.5 py-2 text-sm hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender [&::-webkit-details-marker]:hidden">
                    <StatusIcon success={passed} />
                    <span className={`min-w-0 flex-1 truncate ${passed ? "text-gray-500" : "text-red-500"}`}>
                      <span className="mr-1.5 text-muted-gray">Input:</span>
                      <code>{input}</code>
                    </span>
                  </summary>
                  <div className="space-y-3 px-3 pb-3 pt-1">
                    <DataBlock label="Output" value={testCase.actualOutput} />
                    <DataBlock label="Expected" value={testCase.expectedOutput} />
                    {testCase.logs.trim() && <DataBlock label="Logs" value={testCase.logs} />}
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      )}

      {isCompileOrRuntimeError ? (
        <section aria-label="Execution error">
          <DataBlock label="Error" value={errorDetails || "Execution failed."} tone="error" />
        </section>
      ) : (result.stdout || result.errorMessage || result.stderr) && (
        <section aria-label="Submission diagnostics">
          <h3 className="mb-2 border-b border-graphite pb-2 text-sm font-semibold text-bright-gray">
            {result.status === "COMPILE_ERROR" ? "Compiler Output" : "Diagnostics"}
          </h3>
          <div className="space-y-3">
            {result.stdout && <DataBlock label="Standard output" value={result.stdout} />}
            {result.errorMessage && <DataBlock label="Error" value={result.errorMessage} tone="error" />}
            {result.stderr && (
              <DataBlock
                label={result.status === "COMPILE_ERROR" ? "Compiler output" : "Standard error"}
                value={result.stderr}
                tone="error"
              />
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export function SubmissionResultPanel({
  isOpen,
  onClose,
  mode,
  execution,
  connectionStatus,
  isRunning,
  submission,
  isSubmitting,
  testCaseInputs,
}: {
  isOpen: boolean;
  onClose: () => void;
  mode: ResultMode;
  execution: ExecutionState;
  connectionStatus: "disconnected" | "connecting" | "connected";
  isRunning: boolean;
  submission: SubmissionState;
  isSubmitting: boolean;
  testCaseInputs?: readonly unknown[];
}) {
  const isSubmission = mode === "submission";
  const isPending = isSubmission ? isSubmitting : isRunning;
  const submissionFailed =
    submission.status === "error" || submission.status === "network_error";
  const executionFailed = [
    "runtime_error",
    "compile_error",
    "timeout",
    "memory_limit_exceeded",
    "error",
    "network_error",
  ].includes(execution.status);
  const hasSubmissionResult = isSubmission && submission.result !== null;
  const hasExecutionResult = !isSubmission && execution.result !== null;
  const title = isSubmission ? "Submission Result" : "Execution Result";
  const currentStatus = isSubmission
    ? submission.result
      ? submissionStatusLabels[submission.result.status]
      : submissionFailed
        ? "Submission Failed"
        : isPending
          ? "Running"
          : "Unable to display result"
    : execution.result?.problemRun
      ? execution.result.problemRun.status === "ACCEPTED"
        ? "Success"
        : execution.result.problemRun.status === "COMPILE_ERROR" ||
            execution.result.problemRun.status === "RUNTIME_ERROR"
          ? "Error"
        : submissionStatusLabels[execution.result.problemRun.status]
      : execution.status === "compile_error" || execution.status === "runtime_error"
        ? "Error"
      : executionStatusLabels[execution.status];
  const isSuccessful = isSubmission
    ? submission.result?.status === "ACCEPTED"
    : execution.status === "success";

  return (
    <aside
      aria-labelledby="submission-result-title"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`absolute inset-0 z-20 flex min-h-0 min-w-0 flex-col border-r border-graphite bg-surface shadow-subtle transition-transform duration-200 ease-out motion-reduce:transition-none ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-graphite px-4 py-3">
        <h2 id="submission-result-title" className="truncate text-sm font-semibold text-bright-gray">
          {title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close result panel"
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-buttons text-muted-gray transition-colors hover:bg-white/[0.05] hover:text-bright-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4" aria-live="polite">
        {isPending ? (
          <div className="flex min-h-32 items-center gap-3">
            <LoaderCircle aria-hidden="true" className="size-5 animate-spin text-muted-gray" />
            <div>
              <p className="text-sm font-medium text-bright-gray">
                {isSubmission ? "Submitting..." : "Running..."}
              </p>
              <p className="mt-1 text-xs leading-5 text-muted-gray">
                {isSubmission
                  ? submission.message || "Test cases are being checked."
                  : "Executing your code."}
              </p>
            </div>
          </div>
        ) : hasSubmissionResult ? (
          <TestCaseDetails
            result={submission.result}
            testCaseInputs={testCaseInputs}
          />
        ) : hasExecutionResult ? (
          execution.result?.problemRun ? (
            <TestCaseDetails result={execution.result.problemRun} />
          ) : (
            <section className="space-y-4" aria-label="Execution details">
              {execution.status !== "compile_error" && execution.status !== "runtime_error" && (
                <div className={`flex items-center gap-2 text-sm font-semibold ${
                  isSuccessful ? "text-success-green" : "text-error-red"
                }`}>
                  <StatusIcon success={isSuccessful} />
                  <span>{currentStatus}</span>
                </div>
              )}
              <div className="space-y-3">
                {execution.result?.stdout && (
                  <DataBlock label="Output" value={execution.result.stdout} />
                )}
                {(execution.status === "compile_error" || execution.status === "runtime_error") ? (
                  <DataBlock
                    label="Error"
                    value={execution.result?.stderr || "Execution failed."}
                    tone="error"
                  />
                ) : execution.result?.stderr ? (
                  <DataBlock label="Diagnostics" value={execution.result.stderr} tone="error" />
                ) : null}
                {typeof execution.result?.exitCode === "number" && (
                  <p className="text-xs text-muted-gray">Exit code: {execution.result.exitCode}</p>
                )}
                {!execution.result?.stdout && !execution.result?.stderr && execution.status === "success" && (
                  <p className="text-sm text-medium-gray">Program executed successfully with no output.</p>
                )}
              </div>
            </section>
          )
        ) : isSubmission && submissionFailed ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-error-red">
              <CircleAlert aria-hidden="true" className="size-4" />
              <span>{currentStatus}</span>
            </div>
            <p className="whitespace-pre-wrap break-words text-sm leading-5 text-medium-gray">
              {submission.message}
            </p>
          </div>
        ) : executionFailed ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-error-red">
              <CircleAlert aria-hidden="true" className="size-4" />
              <span>{currentStatus}</span>
            </div>
            {execution.message && (
              <p className="whitespace-pre-wrap break-words text-sm leading-5 text-medium-gray">
                {execution.message}
              </p>
            )}
          </div>
        ) : (
          <div className="flex min-h-32 items-center justify-center">
            <p className="text-sm text-muted-gray">
              {isSubmission ? "Unable to display submission result." : "Run your code to see the result."}
            </p>
          </div>
        )}
      </div>
      <span className="sr-only" role="status">
        {isOpen ? `${title}: ${currentStatus}; WebSocket ${connectionStatus}` : ""}
      </span>
    </aside>
  );
}
