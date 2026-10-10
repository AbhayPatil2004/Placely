"use client";

import { Clock3, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DifficultyBadge } from "@/components/resources/DifficultyBadge";
import type { MockTest } from "@/lib/resources";

type TestCardProps = {
  test: MockTest;
  onStart?: () => void;
};

export function TestCard({ test, onStart }: TestCardProps) {
  return (
    <article className="flex h-full flex-col rounded-cards border border-graphite bg-surface p-6 shadow-subtle">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-10 place-items-center rounded-buttons bg-white text-black">
          <HelpCircle aria-hidden="true" className="size-5" />
        </div>
        <DifficultyBadge difficulty={test.difficulty} />
      </div>
      <h2 className="mt-5 text-subheading font-semibold text-white">{test.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-6 text-medium-gray">{test.description}</p>
      <div className="mt-5 flex flex-wrap gap-4 border-t border-graphite pt-4 text-xs text-muted-gray">
        <span>{test.questionCount} questions</span>
        <span className="inline-flex items-center gap-1">
          <Clock3 aria-hidden="true" className="size-3.5" />
          {test.duration}
        </span>
      </div>
      <Button
        className="mt-5 w-full"
        disabled={!test.available}
        onClick={onStart}
        variant={test.available ? "default" : "outline"}
      >
        {test.available ? "Start test" : "Coming soon"}
      </Button>
    </article>
  );
}
