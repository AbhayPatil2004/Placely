"use client";

import type { ChangeEvent } from "react";
import type { EditorLanguage } from "@/data/problemBoilerplate";

const languages: EditorLanguage[] = ["Java", "C++", "Python", "JavaScript"];

export function LanguageSelect({
  language,
  onChange,
}: {
  language: EditorLanguage;
  onChange: (language: EditorLanguage) => void;
}) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as EditorLanguage);
  };

  return (
    <label className="flex items-center gap-2 text-xs text-muted-gray">
      <span className="sr-only">Editor language</span>
      <select
        aria-label="Editor language"
        value={language}
        onChange={handleChange}
        className="rounded-buttons border border-graphite bg-abyss px-3 py-2 text-sm text-bright-gray outline-none transition-colors focus:border-lavender"
      >
        {languages.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
