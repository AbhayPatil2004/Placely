"use client";

import type { Difficulty } from "@/lib/resources";
import { cn } from "@/lib/utils";

const difficulties: Array<Difficulty | "All"> = ["All", "Easy", "Medium", "Hard"];

type DifficultyTabsProps = {
  value: Difficulty | "All";
  onChange: (value: Difficulty | "All") => void;
};

export function DifficultyTabs({ value, onChange }: DifficultyTabsProps) {
  return (
    <div
      aria-label="Filter by difficulty"
      className="flex flex-wrap gap-1 rounded-buttons bg-surface p-1 shadow-subtle"
      role="tablist"
    >
      {difficulties.map((difficulty) => (
        <button
          key={difficulty}
          aria-selected={value === difficulty}
          className={cn(
            "rounded-[6px] px-3 py-1.5 text-sm font-medium transition-colors",
            value === difficulty
              ? "bg-white text-black"
              : "text-medium-gray hover:text-bright-gray",
          )}
          onClick={() => onChange(difficulty)}
          role="tab"
          type="button"
        >
          {difficulty}
        </button>
      ))}
    </div>
  );
}
