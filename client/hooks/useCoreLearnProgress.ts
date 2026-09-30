import { useCallback, useState } from "react";

import type { SubjectKey } from "@/services/coreSubjectService";

const getStorageKey = (subject: SubjectKey) =>
  `placely:core:${subject}:learn:progress`;

function readStoredIds(subject: SubjectKey) {
  if (typeof window === "undefined") return new Set<string>();

  try {
    const stored = JSON.parse(localStorage.getItem(getStorageKey(subject)) ?? "[]");
    return Array.isArray(stored)
      ? new Set(stored.filter((id): id is string => typeof id === "string"))
      : new Set<string>();
  } catch {
    return new Set<string>();
  }
}

function persistIds(subject: SubjectKey, ids: Set<string>) {
  localStorage.setItem(getStorageKey(subject), JSON.stringify([...ids]));
}

export function useCoreLearnProgress(subject: SubjectKey) {
  const [progressBySubject, setProgressBySubject] = useState(
    () => new Map<SubjectKey, Set<string>>([[subject, readStoredIds(subject)]]),
  );
  const completedQuestionIds =
    progressBySubject.get(subject) ?? readStoredIds(subject);

  const reconcile = useCallback((currentIds: string[]) => {
    const validIds = new Set(currentIds);
    setProgressBySubject((previousBySubject) => {
      const previous = previousBySubject.get(subject) ?? readStoredIds(subject);
      const next = new Set([...previous].filter((id) => validIds.has(id)));
      if (next.size !== previous.size) persistIds(subject, next);
      return new Map(previousBySubject).set(subject, next);
    });
  }, [subject]);

  const toggleCompleted = useCallback((questionId: string) => {
    setProgressBySubject((previousBySubject) => {
      const previous = previousBySubject.get(subject) ?? readStoredIds(subject);
      const next = new Set(previous);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      persistIds(subject, next);
      return new Map(previousBySubject).set(subject, next);
    });
  }, [subject]);

  return { completedQuestionIds, reconcile, toggleCompleted };
}
