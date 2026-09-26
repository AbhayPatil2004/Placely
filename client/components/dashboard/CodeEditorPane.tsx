"use client";

import { lazy, Suspense, useMemo, useState } from "react";
import type { OnChange, OnMount } from "@monaco-editor/react";
import { EditorToolbar } from "./EditorToolbar";
import { problemBoilerplate, type EditorLanguage } from "@/data/problemBoilerplate";
import type { ProblemLanguage } from "@/services/problemService";

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
  const [isOutputOpen, setIsOutputOpen] = useState(false);
  const [output, setOutput] = useState("Run your code to see output.");
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

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

  const handleEditorMount: OnMount = (_, monaco) => {
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
    setIsOutputOpen(true);
    setOutput("Running...\n\nSample output: solution accepted locally.");
  };

  const handleSubmit = () => {
    setIsOutputOpen(true);
    setOutput("Submitted — verdict pending backend integration.");
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
      />
      <div className="h-full min-h-[360px] min-w-0 flex-1">
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
      {isOutputOpen && (
        <div className="border-t border-graphite bg-surface px-4 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-medium uppercase tracking-wide text-muted-gray">Console output</h2>
            <button type="button" onClick={() => setIsOutputOpen(false)} className="text-xs text-lavender hover:text-bright-gray">
              Hide
            </button>
          </div>
          <pre className="mt-2 max-h-28 overflow-auto whitespace-pre-wrap font-mono text-xs leading-5 text-medium-gray">{output}</pre>
        </div>
      )}
    </section>
  );
}
