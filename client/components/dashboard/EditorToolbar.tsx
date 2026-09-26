"use client";

import { Play, RotateCcw, Send } from "lucide-react";
import type { EditorLanguage } from "@/data/problemBoilerplate";
import { LanguageSelect } from "./LanguageSelect";

export function EditorToolbar({
  language,
  isResetConfirmOpen,
  onLanguageChange,
  onReset,
  onResetConfirm,
  onRun,
  onSubmit,
}: {
  language: EditorLanguage;
  isResetConfirmOpen: boolean;
  onLanguageChange: (language: EditorLanguage) => void;
  onReset: () => void;
  onResetConfirm: (isOpen: boolean) => void;
  onRun: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-graphite px-4 py-3">
      <LanguageSelect language={language} onChange={onLanguageChange} />
      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            type="button"
            aria-label="Reset code"
            aria-expanded={isResetConfirmOpen}
            onClick={() => onResetConfirm(!isResetConfirmOpen)}
            className="inline-flex items-center gap-2 rounded-buttons border border-graphite px-3 py-2 text-sm text-medium-gray transition-colors hover:border-lavender hover:text-lavender focus:outline-none focus:ring-2 focus:ring-lavender"
          >
            <RotateCcw className="size-4" />
            <span>Reset</span>
          </button>
          {isResetConfirmOpen && (
            <div className="absolute right-0 top-11 z-10 w-52 rounded-buttons border border-graphite bg-surface p-3 text-xs text-medium-gray shadow-[rgba(0,0,0,0.25)_0px_8px_20px]">
              <p>Reset to default code?</p>
              <div className="mt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => onResetConfirm(false)}
                  className="rounded-buttons px-2 py-1 text-muted-gray hover:text-bright-gray"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={onReset}
                  className="rounded-buttons bg-amethyst px-2 py-1 text-white hover:bg-lavender hover:text-black"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={onRun}
          className="inline-flex items-center gap-2 rounded-buttons border border-graphite px-3 py-2 text-sm text-medium-gray transition-colors hover:border-lavender hover:text-lavender focus:outline-none focus:ring-2 focus:ring-lavender"
        >
          <Play className="size-4" />
          <span>Run</span>
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="inline-flex items-center gap-2 rounded-buttons bg-amethyst px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-lavender hover:text-black focus:outline-none focus:ring-2 focus:ring-lavender"
        >
          <Send className="size-4" />
          <span>Submit</span>
        </button>
      </div>
    </div>
  );
}
