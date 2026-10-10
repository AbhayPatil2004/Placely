"use client";

import { lazy, Suspense, useMemo, useRef, useState } from "react";
import type { OnChange, OnMount } from "@monaco-editor/react";
import { EditorToolbar } from "./EditorToolbar";
import {
  monacoLanguageByEditorLanguage,
  problemBoilerplate,
  type EditorLanguage,
} from "@/data/problemBoilerplate";
import type { ProblemLanguage } from "@/services/problemService";

const MonacoEditor = lazy(() => import("@monaco-editor/react"));

export function CodeEditorPane({
  starterCode,
  onRun,
  onSubmit,
  isRunning,
  isSubmitting,
}: {
  starterCode?: Partial<Record<ProblemLanguage, string>>;
  onRun: (code: string, language: EditorLanguage) => void;
  onSubmit: (studentCode: string, language: EditorLanguage) => void;
  isRunning: boolean;
  isSubmitting: boolean;
}) {
  const [language, setLanguage] = useState<EditorLanguage>("JavaScript");
  const initialCode = {
    Java: starterCode?.java ?? problemBoilerplate.Java,
    "C++": starterCode?.cpp ?? problemBoilerplate["C++"],
    Python: starterCode?.python ?? problemBoilerplate.Python,
    JavaScript: starterCode?.javascript ?? problemBoilerplate.JavaScript,
  };
  const [codeByLanguage, setCodeByLanguage] = useState<Record<EditorLanguage, string>>(initialCode);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);

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
    onRun(editorRef.current?.getValue() ?? codeByLanguage[language], language);
  };

  const handleSubmit = () => {
    onSubmit(editorRef.current?.getValue() ?? codeByLanguage[language], language);
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
        isRunning={isRunning}
        isSubmitting={isSubmitting}
      />
      <div className="min-h-[240px] min-w-0 flex-1">
        <Suspense fallback={<div className="h-full min-h-[360px] animate-pulse bg-abyss p-5 font-mono text-sm text-muted-gray">Loading editor...</div>}>
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
    </section>
  );
}
