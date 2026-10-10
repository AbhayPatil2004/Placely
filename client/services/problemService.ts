import { apiRequest } from "@/lib/api/client";

export type ProblemDifficulty = "EASY" | "MEDIUM" | "HARD";
export type ProblemLanguage = "cpp" | "java" | "javascript" | "python";
export type Problem = {
  _id?: string;
  title: string;
  slug: string;
  problemStatement: string;
  topic: string;
  subTopics: string[];
  tags: string[];
  pattern: string[];
  difficulty: ProblemDifficulty;
  inputFormat: string;
  outputFormat: string;
  constraints: string[];
  examples: { input: string; output: string; explanation: string }[];
  starterCode: Record<ProblemLanguage, string>;
  testCases: { input: string; expectedOutput: string; isPublic: boolean }[];
  supportedLanguages: ProblemLanguage[];
  expectedTimeComplexity: string;
  expectedSpaceComplexity: string;
  companies: string[];
  order: number;
  isActive: boolean;
};

export async function getProblemsByTopic(topic: string) {
  return apiRequest<Problem[]>(`/api/problem?topic=${encodeURIComponent(topic)}`);
}

export async function getProblemBySlug(slug: string) {
  return apiRequest<Problem>(`/api/problem/${encodeURIComponent(slug)}`);
}

export async function createProblem(problem: Omit<Problem, "_id">) {
  return apiRequest<Problem>("/api/problem", {
    method: "POST",
    body: JSON.stringify(problem),
  });
}
