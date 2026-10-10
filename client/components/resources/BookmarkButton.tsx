"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BookmarkButtonProps = {
  bookmarked: boolean;
  onToggle: () => void;
};

export function BookmarkButton({
  bookmarked,
  onToggle,
}: BookmarkButtonProps) {
  return (
    <Button
      aria-label={bookmarked ? "Remove bookmark" : "Bookmark resource"}
      aria-pressed={bookmarked}
      className={cn(
        "text-muted-gray hover:text-white",
        bookmarked && "text-white",
      )}
      onClick={onToggle}
      size="icon-sm"
      variant="ghost"
    >
      {bookmarked ? (
        <BookmarkCheck aria-hidden="true" className="size-4" />
      ) : (
        <Bookmark aria-hidden="true" className="size-4" />
      )}
    </Button>
  );
}
