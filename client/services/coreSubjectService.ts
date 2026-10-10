import { apiRequest } from "@/lib/api/client";

export type SubjectKey = "oop" | "dbms" | "cn" | "os" | "swe";

export type LearnQuestion = {
  id: string;
  order: number;
  question: string;
  answer: string;
  difficulty: string;
};

type CacheEntry = {
  data: LearnQuestion[];
  expiresAt: number;
};

const CACHE_TTL_MS = 5 * 60 * 1000;
const learnCache = new Map<SubjectKey, CacheEntry>();

export async function getSubjectLearn(
  subject: SubjectKey,
  options: { forceRefresh?: boolean } = {},
) {
  const cached = learnCache.get(subject);
  if (!options.forceRefresh && cached && cached.expiresAt > Date.now()) {
    return cached.data;
  }

  const data = await apiRequest<LearnQuestion[]>(`/api/core/${subject}`);
  learnCache.set(subject, {
    data,
    expiresAt: Date.now() + CACHE_TTL_MS,
  });
  return data;
}
