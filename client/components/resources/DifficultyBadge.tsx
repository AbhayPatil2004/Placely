import { cn } from "@/lib/utils";
import type { Difficulty } from "@/lib/resources";

const difficultyStyles: Record<Difficulty, string> = {
  Easy: "bg-success-green/10 text-success-green",
  Medium: "bg-warning-yellow/10 text-warning-yellow",
  Hard: "bg-error-red/10 text-error-red",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-tags px-2 py-0.5 text-xs font-medium",
        difficultyStyles[difficulty],
      )}
    >
      {difficulty}
    </span>
  );
}
