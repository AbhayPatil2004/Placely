"use client";

import { lazy, Suspense, useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import type { OnChange, OnMount } from "@monaco-editor/react";
import { Code2, LoaderCircle, Play, RotateCcw } from "lucide-react";
import {
  monacoLanguageByEditorLanguage,
  problemBoilerplate,
  type EditorLanguage,
} from "@/data/problemBoilerplate";
import { useCodeExecution } from "@/hooks/useCodeExecution";
import { LanguageSelect } from "@/components/dashboard/LanguageSelect";

const MonacoEditor = lazy(() => import("@monaco-editor/react"));

const playgroundBoilerplate: Record<EditorLanguage, string> = {
  ...problemBoilerplate,
  "C++": `#include <bits/stdc++.h>
using namespace std;

int main() {
    
    return 0;
}`,
};

const statusLabels: Record<"idle" | "connecting" | "running" | "success" | "runtime_error" | "compile_error" | "timeout" | "memory_limit_exceeded" | "error" | "network_error", string> = {
  idle: "Ready",
  connecting: "Connecting",
  running: "Running",
  success: "Execution successful",
  runtime_error: "Runtime error",
  compile_error: "Compilation error",
  timeout: "Execution timed out",
  memory_limit_exceeded: "Memory limit exceeded",
  error: "Execution failed",
  network_error: "Connection error",
};

export function PlaygroundPage() {
  const [isLaptopOrLarger, setIsLaptopOrLarger] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 64rem)");
    const updateViewport = () => setIsLaptopOrLarger(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  if (!isLaptopOrLarger) {
    return (
      <section className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-xl items-center justify-center">
        <section className="w-full rounded-cards border border-graphite bg-surface p-6 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
          <Code2 aria-hidden="true" className="mx-auto size-6 text-lavender" />
          <h1 className="mt-4 text-heading-sm font-semibold text-bright-gray">Playground IDE</h1>
          <p className="mt-3 text-sm leading-6 text-medium-gray">
            This section requires a laptop or larger screen. Please open Placely on a laptop or desktop to use the Playground.
          </p>
        </section>
      </section>
    );
  }

  return <PlaygroundIDE />;
}

function PlaygroundIDE() {
  const [language, setLanguage] = useState<EditorLanguage>("JavaScript");
  const [codeByLanguage, setCodeByLanguage] = useState<Record<EditorLanguage, string>>(playgroundBoilerplate);
  const [input, setInput] = useState("");
  const [leftPaneWidth, setLeftPaneWidth] = useState(58);
  const [inputPaneHeight, setInputPaneHeight] = useState(38);
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
  const horizontalDragRef = useRef(false);
  const verticalDragRef = useRef(false);
  const { execution, connectionStatus, isBusy, run } = useCodeExecution();

  const code = codeByLanguage[language];
  const editorOptions = useMemo(
    () => ({
      minimap: { enabled: false },
      fontSize: 14,
      lineNumbers: "on" as const,
      padding: { top: 16 },
      scrollBeyondLastLine: false,
      automaticLayout: true,
    }),
    [],
  );

  const handleCodeChange: OnChange = (value) => {
    setCodeByLanguage((current) => ({ ...current, [language]: value ?? "" }));
  };

  const handleEditorMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monaco.editor.defineTheme("placely-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#171717",
        "editorGutter.background": "#171717",
        "editorLineNumber.foreground": "#a3a3a3",
        "editorLineNumber.activeForeground": "#eeeeee",
      },
    });
    monaco.editor.setTheme("placely-dark");
  };

  const handleHorizontalPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!horizontalDragRef.current || !event.currentTarget.parentElement) return;
    const bounds = event.currentTarget.parentElement.getBoundingClientRect();
    const nextWidth = ((event.clientX - bounds.left) / bounds.width) * 100;
    setLeftPaneWidth(Math.min(70, Math.max(30, nextWidth)));
  };

  const handleVerticalPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!verticalDragRef.current || !event.currentTarget.parentElement) return;
    const bounds = event.currentTarget.parentElement.getBoundingClientRect();
    const nextHeight = ((event.clientY - bounds.top) / bounds.height) * 100;
    setInputPaneHeight(Math.min(65, Math.max(20, nextHeight)));
  };

  const handleReset = () => {
    setCodeByLanguage((current) => ({ ...current, [language]: playgroundBoilerplate[language] }));
  };

  const handleRun = () => {
    if (isBusy) return;
    void run({
      code: editorRef.current?.getValue() ?? codeByLanguage[language],
      language,
      input,
    });
  };

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
    <main className="overflow-hidden rounded-cards border border-graphite bg-abyss">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-graphite px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-medium-gray">
          <Code2 className="size-4 text-lavender" />
          <span className="font-medium text-bright-gray">IDE / Playground</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelect language={language} onChange={setLanguage} />
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-buttons border border-graphite px-3 py-2 text-sm text-medium-gray hover:border-lavender hover:text-lavender focus:outline-none focus:ring-2 focus:ring-lavender"
          >
            <RotateCcw className="size-4" />
            Reset
          </button>
          <button
            type="button"
            onClick={handleRun}
            disabled={isBusy}
            className="inline-flex items-center gap-2 rounded-buttons bg-amethyst px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-lavender hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isBusy ? <LoaderCircle className="size-4 animate-spin" /> : <Play className="size-4" />}
            {isBusy ? "Running..." : "Run Code"}
          </button>
        </div>
      </header>

      <div
        className="flex min-h-[68vh] flex-col lg:flex-row"
        onPointerMove={handleHorizontalPointerMove}
        onPointerUp={() => {
          horizontalDragRef.current = false;
        }}
        onPointerLeave={() => {
          horizontalDragRef.current = false;
        }}
      >
        <div className="min-h-[44vh] min-w-0 bg-abyss lg:min-h-0" style={{ flexBasis: `${leftPaneWidth}%` }}>
          <Suspense fallback={<div className="flex h-full min-h-[420px] items-center justify-center bg-abyss font-mono text-sm text-muted-gray">Loading editor...</div>}>
            <MonacoEditor
              height="100%"
              language={monacoLanguageByEditorLanguage[language]}
              theme="placely-dark"
              value={code}
              onChange={handleCodeChange}
              onMount={handleEditorMount}
              options={editorOptions}
            />
          </Suspense>
        </div>

        <div
          role="separator"
          aria-label="Resize editor and playground side panel"
          aria-orientation="vertical"
          onPointerDown={(event) => {
            event.preventDefault();
            event.currentTarget.setPointerCapture(event.pointerId);
            horizontalDragRef.current = true;
          }}
          className="hidden w-1 shrink-0 cursor-col-resize bg-graphite transition-colors hover:bg-lavender lg:block"
        />

        <div
          className="flex min-h-[44vh] min-w-0 flex-1 flex-col border-t border-graphite lg:min-h-0 lg:border-l lg:border-t-0"
          onPointerMove={handleVerticalPointerMove}
          onPointerUp={() => {
            verticalDragRef.current = false;
          }}
          onPointerLeave={() => {
            verticalDragRef.current = false;
          }}
        >
          <div style={{ flexBasis: `${inputPaneHeight}%` }} className="flex min-h-[140px] flex-col border-b border-graphite bg-surface">
            <div className="flex items-center justify-between border-b border-graphite px-3 py-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-gray">Input</span>
              <span className="text-[10px] uppercase tracking-[0.12em] text-muted-gray">stdin</span>
            </div>
            <textarea
              aria-label="Program input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Optional input passed to your program"
              className="min-h-0 w-full flex-1 resize-none bg-abyss px-3 py-3 font-mono text-xs leading-5 text-bright-gray outline-none placeholder:text-muted-gray focus:border-lavender"
            />
          </div>

          <div
            role="separator"
            aria-label="Resize input and output panels"
            aria-orientation="horizontal"
            onPointerDown={(event) => {
              event.preventDefault();
              event.currentTarget.setPointerCapture(event.pointerId);
              verticalDragRef.current = true;
            }}
            className="h-1 cursor-row-resize bg-graphite transition-colors hover:bg-lavender"
          />

          <div className="flex min-h-0 flex-1 flex-col bg-surface p-3">
            <div className="mb-2 flex items-center justify-between gap-2 border-b border-graphite pb-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-gray">Output</span>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-muted-gray">
                <span>WebSocket {connectionStatus}</span>
                <span className={statusTone}>{statusLabels[execution.status]}</span>
              </div>
            </div>

            {execution.message ? (
              <pre className="overflow-auto whitespace-pre-wrap break-words font-mono text-xs leading-5 text-medium-gray">{execution.message}</pre>
            ) : result ? (
              <div className="min-h-0 flex-1 overflow-auto font-mono text-xs leading-5">
                {stdout ? (
                  <pre className="whitespace-pre-wrap break-words text-medium-gray">{stdout}</pre>
                ) : result.status === "success" ? (
                  <p className="text-muted-gray">Program executed successfully with no output.</p>
                ) : null}
                {stderr ? (
                  <div className="mt-3">
                    <p className="text-muted-gray">
                      {execution.status === "compile_error" ? "Compiler output" : "Diagnostics"}
                    </p>
                    <pre className="whitespace-pre-wrap break-words text-error-red">{stderr}</pre>
                  </div>
                ) : null}
                {typeof result.exitCode === "number" ? (
                  <p className="mt-3 text-muted-gray">Exit code: {result.exitCode}</p>
                ) : null}
              </div>
            ) : (
              <p className="text-xs leading-5 text-muted-gray">Run your code to see output.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
