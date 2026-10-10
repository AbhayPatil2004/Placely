"use client";

import { useEffect, useMemo, useState } from "react";
import { ResourceRow } from "@/components/resources/ResourceRow";
import { useAuth } from "@/lib/auth-context";
import { recordResourceCompletion } from "@/lib/activity";
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
  const { user } = useAuth();
  const userId = user?._id ?? user?.studentId ?? null;
  const category = resources[0]?.category ?? "all";
  const progressKey = `placely:resources:${encodeURIComponent(userId ?? "guest")}:${encodeURIComponent(category)}:progress`;

  const readCompleted = () => {
    if (typeof window === "undefined") {
      return new Set(resources.filter((resource) => resource.completed).map((resource) => resource.id));
    }
    try {
      const stored = localStorage.getItem(progressKey);
      if (stored) {
        const ids: unknown = JSON.parse(stored);
        if (Array.isArray(ids)) {
          const validIds = new Set(resources.map((resource) => resource.id));
          return new Set(ids.filter((id): id is string => typeof id === "string" && validIds.has(id)));
        }
      }
    } catch {
      return new Set(resources.filter((resource) => resource.completed).map((resource) => resource.id));
    }
    return new Set(resources.filter((resource) => resource.completed).map((resource) => resource.id));
  };
  const [completedByKey, setCompletedByKey] = useState(
    () => new Map([[progressKey, readCompleted()]]),
  );
  const completedIds = completedByKey.get(progressKey) ?? readCompleted();
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(
    () => new Set(),
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

  useEffect(() => {
    onCompletedChange?.(completedIds.size);
  }, [completedIds, onCompletedChange]);

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
    const next = new Set(completedIds);
    const completed = !next.has(id);
    if (completed) next.add(id);
    else next.delete(id);

    localStorage.setItem(progressKey, JSON.stringify([...next]));
    recordResourceCompletion(userId, `resource:${category}:${id}`, completed);
    setCompletedByKey((current) => new Map(current).set(progressKey, next));
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
