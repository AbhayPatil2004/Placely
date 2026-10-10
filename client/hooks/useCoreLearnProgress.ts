import { useCallback, useState } from "react";

import type { SubjectKey } from "@/services/coreSubjectService";
import { recordResourceCompletion } from "@/lib/activity";

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

export function useCoreLearnProgress(subject: SubjectKey, userId: string | null) {
  const [progressBySubject, setProgressBySubject] = useState(
    () => new Map([[subject, readStoredIds(subject)]]),
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
    const next = new Set(completedQuestionIds);
    const completed = !next.has(questionId);
    if (completed) next.add(questionId);
    else next.delete(questionId);

    persistIds(subject, next);
    recordResourceCompletion(
      userId,
      `core:${subject}:${questionId}`,
      completed,
    );
    setProgressBySubject((previousBySubject) =>
      new Map(previousBySubject).set(subject, next),
    );
  }, [completedQuestionIds, subject, userId]);

  return { completedQuestionIds, reconcile, toggleCompleted };
}
