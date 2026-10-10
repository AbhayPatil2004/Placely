import Link from "next/link";
import { ArrowUpRight, Check, Circle } from "lucide-react";
import { BookmarkButton } from "@/components/resources/BookmarkButton";
import { DifficultyBadge } from "@/components/resources/DifficultyBadge";
import type { Resource } from "@/lib/resources";

type ResourceRowProps = {
  resource: Resource;
  bookmarked: boolean;
  onToggleBookmark: () => void;
  completed: boolean;
  onToggleComplete: () => void;
};

export function ResourceRow({
  resource,
  bookmarked,
  onToggleBookmark,
  completed,
  onToggleComplete,
}: ResourceRowProps) {
  return (
    <div className="grid gap-3 px-4 py-4 transition-colors hover:bg-white/[0.02] md:grid-cols-[minmax(0,1fr)_140px_120px_100px_40px] md:items-center md:px-5">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <button
            aria-label={completed ? `Mark ${resource.title} incomplete` : `Mark ${resource.title} complete`}
            className="shrink-0 text-muted-gray hover:text-white"
            onClick={onToggleComplete}
            type="button"
          >
            {completed ? (
              <span className="grid size-4 place-items-center rounded-full bg-white text-black">
                <Check aria-hidden="true" className="size-3" />
              </span>
            ) : (
              <Circle aria-hidden="true" className="size-4" />
            )}
          </button>
          <Link
            href={`#${resource.id}`}
            className="group inline-flex min-w-0 items-center gap-2 text-sm font-medium text-bright-gray hover:text-white"
          >
          <span className="truncate">{resource.title}</span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
          />
          </Link>
        </div>
        <p className="mt-1 truncate text-xs text-muted-gray">{resource.topic}</p>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-gray">
        <span className="md:hidden">Difficulty:</span>
        <DifficultyBadge difficulty={resource.difficulty} />
      </div>
      <span className="text-xs text-muted-gray">{resource.duration}</span>
      <span className="inline-flex items-center gap-1 text-xs text-muted-gray">
        {completed ? (
          <>
            <Check aria-hidden="true" className="size-3.5 text-success-green" />
            Completed
          </>
        ) : (
          "Not started"
        )}
      </span>
      <BookmarkButton
        bookmarked={bookmarked}
        onToggle={onToggleBookmark}
      />
    </div>
  );
}
