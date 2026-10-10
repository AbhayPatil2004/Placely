import type { ActivityDay } from "@/types/activity";

const activityStoragePrefix = "placely:user-activity:";
export const activityUpdatedEvent = "placely:user-activity-updated";

function isDateKey(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export function getLocalDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getStorageKey(userId: string) {
  return `${activityStoragePrefix}${encodeURIComponent(userId)}`;
}

function readCompletionDates(userId: string): Record<string, string> {
  try {
    const value: unknown = JSON.parse(
      localStorage.getItem(getStorageKey(userId)) ?? "{}",
    );
    if (!value || typeof value !== "object" || Array.isArray(value)) return {};

    const dates: Record<string, string> = {};
    for (const [resourceId, date] of Object.entries(value)) {
      if (resourceId.length > 0 && typeof date === "string" && isDateKey(date)) {
        dates[resourceId] = date;
      }
    }
    return dates;
  } catch {
    return {};
  }
}

function toActivityDays(completionDates: Record<string, string>): ActivityDay[] {
  const counts = new Map<string, number>();
  for (const date of Object.values(completionDates)) {
    counts.set(date, (counts.get(date) ?? 0) + 1);
  }
  return [...counts].map(([date, count]) => ({ date, count }));
}

export function readUserActivity(userId: string | null): ActivityDay[] {
  if (!userId) return [];
  return getActivityFromSnapshot(getUserActivitySnapshot(userId));
}

export function getUserActivitySnapshot(userId: string | null): string {
  if (!userId || typeof window === "undefined") return "{}";
  try {
    return localStorage.getItem(getStorageKey(userId)) ?? "{}";
  } catch {
    return "{}";
  }
}

export function getActivityFromSnapshot(snapshot: string): ActivityDay[] {
  try {
    const value: unknown = JSON.parse(snapshot);
    if (!value || typeof value !== "object" || Array.isArray(value)) return [];
    const dates: Record<string, string> = {};
    for (const [resourceId, date] of Object.entries(value)) {
      if (resourceId.length > 0 && typeof date === "string" && isDateKey(date)) {
        dates[resourceId] = date;
      }
    }
    return toActivityDays(dates);
  } catch {
    return [];
  }
}

export function recordResourceCompletion(
  userId: string | null,
  resourceId: string,
  completed: boolean,
): ActivityDay[] {
  if (!userId || typeof window === "undefined") return [];

  if (!completed) return readUserActivity(userId);

  const completionDates = readCompletionDates(userId);
  const date = getLocalDateKey();
  completionDates[JSON.stringify([resourceId, date])] = date;

  localStorage.setItem(getStorageKey(userId), JSON.stringify(completionDates));
  window.dispatchEvent(
    new CustomEvent(activityUpdatedEvent, { detail: { userId } }),
  );
  return toActivityDays(completionDates);
}
