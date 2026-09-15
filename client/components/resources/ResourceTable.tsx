"use client";

import { useMemo, useState } from "react";
import { ResourceRow } from "@/components/resources/ResourceRow";
import type { Difficulty, Resource } from "@/lib/resources";

type ResourceTableProps = {
  resources: Resource[];
  difficulty?: Difficulty | "All";
  search?: string;
  onCompletedChange?: (completed: number) => void;
};

export function ResourceTable({
  resources,
  difficulty = "All",
  search = "",
  onCompletedChange,
}: ResourceTableProps) {
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(
    () => new Set(),
  );
  const [completedIds, setCompletedIds] = useState<Set<string>>(
    () => new Set(resources.filter((resource) => resource.completed).map((resource) => resource.id)),
  );
  const filteredResources = useMemo(
    () =>
      resources.filter(
        (resource) =>
          (difficulty === "All" || resource.difficulty === difficulty) &&
          `${resource.title} ${resource.topic} ${resource.description ?? ""}`
            .toLowerCase()
            .includes(search.trim().toLowerCase()),
      ),
    [difficulty, resources, search],
  );

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleComplete = (id: string) => {
    setCompletedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      onCompletedChange?.(next.size);
      return next;
    });
  };

  return (
    <section className="overflow-hidden rounded-cards bg-surface shadow-subtle">
      <div className="hidden border-b border-graphite px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-gray md:grid md:grid-cols-[minmax(0,1fr)_140px_120px_100px_40px]">
        <span>Resource</span>
        <span>Difficulty</span>
        <span>Time</span>
        <span>Status</span>
        <span className="sr-only">Bookmark</span>
      </div>
      {filteredResources.length > 0 ? (
        <div className="divide-y divide-graphite">
          {filteredResources.map((resource) => (
            <ResourceRow
              key={resource.id}
              resource={resource}
              bookmarked={bookmarkedIds.has(resource.id)}
              onToggleBookmark={() => toggleBookmark(resource.id)}
              completed={completedIds.has(resource.id)}
              onToggleComplete={() => toggleComplete(resource.id)}
            />
          ))}
        </div>
      ) : (
        <p className="px-5 py-10 text-center text-sm text-muted-gray">
          No resources match this difficulty.
        </p>
      )}
    </section>
  );
}
