"use client";

import { lazy, Suspense, useMemo, useRef, useState } from "react";
import type { OnChange, OnMount } from "@monaco-editor/react";
import { EditorToolbar } from "./EditorToolbar";
import { problemBoilerplate, type EditorLanguage } from "@/data/problemBoilerplate";
import type { ProblemLanguage } from "@/services/problemService";
import { CodeExecutionPanel } from "./CodeExecutionPanel";
import { useCodeExecution } from "@/hooks/useCodeExecution";

const MonacoEditor = lazy(() => import("@monaco-editor/react"));

const monacoLanguage: Record<EditorLanguage, string> = {
  Java: "java",
  "C++": "cpp",
  Python: "python",
  JavaScript: "javascript",
};

export function CodeEditorPane({ starterCode }: { starterCode?: Partial<Record<ProblemLanguage, string>> }) {
  const [language, setLanguage] = useState<EditorLanguage>("JavaScript");
  const initialCode = {
    Java: starterCode?.java ?? problemBoilerplate.Java,
    "C++": starterCode?.cpp ?? problemBoilerplate["C++"],
    Python: starterCode?.python ?? problemBoilerplate.Python,
    JavaScript: starterCode?.javascript ?? problemBoilerplate.JavaScript,
  };
  const [codeByLanguage, setCodeByLanguage] = useState<Record<EditorLanguage, string>>(initialCode);
  const [input, setInput] = useState("");
  const [notice, setNotice] = useState("");
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
  const { execution, connectionStatus, isBusy, run } = useCodeExecution();

  const code = codeByLanguage[language];
  const editorOptions = useMemo(() => ({
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: "on" as const,
    padding: { top: 16 },
    scrollBeyondLastLine: false,
    automaticLayout: true,
  }), []);

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

  const handleReset = () => {
    setCodeByLanguage((current) => ({ ...current, [language]: initialCode[language] }));
    setIsResetConfirmOpen(false);
  };

  const handleRun = () => {
    setNotice("");
    void run({
      code: editorRef.current?.getValue() ?? codeByLanguage[language],
      language,
      input,
    });
  };

  const handleSubmit = () => {
    setNotice("Problem submission is not available yet; the current backend only runs code.");
  };

  return (
    <section className="flex h-full min-h-0 min-w-0 flex-col bg-abyss">
      <EditorToolbar
        language={language}
        isResetConfirmOpen={isResetConfirmOpen}
        onLanguageChange={setLanguage}
        onReset={handleReset}
        onResetConfirm={setIsResetConfirmOpen}
        onRun={handleRun}
        onSubmit={handleSubmit}
        isRunning={isBusy}
      />
      <div className="min-h-[240px] min-w-0 flex-1">
        <Suspense fallback={<div className="h-full min-h-[360px] animate-pulse bg-abyss p-5 font-mono text-sm text-muted-gray">Loading editor...</div>}>
          <MonacoEditor
            height="100%"
            language={monacoLanguage[language]}
            theme="placely-dark"
            value={code}
            onChange={handleCodeChange}
            onMount={handleEditorMount}
            options={editorOptions}
          />
        </Suspense>
      </div>
      <CodeExecutionPanel
        input={input}
        onInputChange={setInput}
        execution={execution}
        notice={notice}
        connectionStatus={connectionStatus}
      />
    </section>
  );
}
