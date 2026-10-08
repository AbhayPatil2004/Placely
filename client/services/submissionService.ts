import type { EditorLanguage } from "@/data/problemBoilerplate";
import { apiRequest } from "@/lib/api/client";
import { toBackendLanguage } from "@/services/codeExecutionService";

export type SubmissionStatus =
  | "ACCEPTED"
  | "WRONG_ANSWER"
  | "TIME_LIMIT_EXCEEDED"
  | "MEMORY_LIMIT_EXCEEDED"
  | "COMPILE_ERROR"
  | "RUNTIME_ERROR"
  | "SYSTEM_ERROR";

export type SubmissionTestCaseResult = {
  testCase: string;
  expectedOutput: string;
  actualOutput: string;
  logs: string;
  status: "passed" | "wrong_answer";
};

export type SubmissionResult = {
  submissionId: string;
  problemId: string;
  language: string;
  status: SubmissionStatus;
  totalTestCases: number;
  passedTestCases: number;
  testCasesResult: SubmissionTestCaseResult[];
  stderr: string;
  exitCode: number;
  executionTime: number;
  memoryUsed: number;
  errorMessage: string;
  completedAt: string;
};

export type SubmissionState = {
  status: "idle" | "submitting" | "queued" | SubmissionStatus | "network_error" | "error";
  message: string;
  result: SubmissionResult | null;
  submissionId: string | null;
};

export type QueuedSubmission = {
  submissionId: string;
  jobId: string;
  status: "QUEUED";
};

const submissionStatuses: SubmissionStatus[] = [
  "ACCEPTED",
  "WRONG_ANSWER",
  "TIME_LIMIT_EXCEEDED",
  "MEMORY_LIMIT_EXCEEDED",
  "COMPILE_ERROR",
  "RUNTIME_ERROR",
  "SYSTEM_ERROR",
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export async function submitProblemCode({
  problemId,
  studentCode,
  language,
}: {
  problemId: string;
  studentCode: string;
  language: EditorLanguage;
}): Promise<QueuedSubmission> {
  const response = await apiRequest<QueuedSubmission>("/api/submit/code", {
    method: "POST",
    body: JSON.stringify({
      problemId,
      language: toBackendLanguage(language),
      studentCode,
    }),
  });

  if (
    typeof response.submissionId !== "string" ||
    !response.submissionId ||
    typeof response.jobId !== "string" ||
    !response.jobId ||
    response.status !== "QUEUED"
  ) {
    throw new Error("The submission request returned an invalid response.");
  }

  return response;
}

export function parseSubmissionResultMessage(data: unknown): SubmissionResult | null {
  if (typeof data !== "string") return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(data);
  } catch {
    return null;
  }

  if (!isRecord(parsed) || parsed.type !== "CODE_SUBMISSION_RESULT") return null;

  if (
    typeof parsed.submissionId !== "string" ||
    typeof parsed.problemId !== "string" ||
    typeof parsed.language !== "string" ||
    typeof parsed.status !== "string" ||
    !submissionStatuses.includes(parsed.status as SubmissionStatus) ||
    typeof parsed.totalTestCases !== "number" ||
    !Number.isInteger(parsed.totalTestCases) ||
    typeof parsed.passedTestCases !== "number" ||
    !Number.isInteger(parsed.passedTestCases) ||
    parsed.totalTestCases < 0 ||
    parsed.passedTestCases < 0 ||
    parsed.passedTestCases > parsed.totalTestCases ||
    !Array.isArray(parsed.testCasesResult) ||
    typeof parsed.stderr !== "string" ||
    typeof parsed.exitCode !== "number" ||
    typeof parsed.executionTime !== "number" ||
    typeof parsed.memoryUsed !== "number" ||
    typeof parsed.errorMessage !== "string" ||
    typeof parsed.completedAt !== "string"
  ) {
    return null;
  }

  const testCasesResult = parsed.testCasesResult.flatMap(
    (testCase): SubmissionTestCaseResult[] => {
      if (
        !isRecord(testCase) ||
        typeof testCase.testCase !== "string" ||
        typeof testCase.expectedOutput !== "string" ||
        typeof testCase.actualOutput !== "string" ||
        typeof testCase.logs !== "string" ||
        (testCase.status !== "passed" && testCase.status !== "wrong_answer")
      ) {
        return [];
      }

      return [{
        testCase: testCase.testCase,
        expectedOutput: testCase.expectedOutput,
        actualOutput: testCase.actualOutput,
        logs: testCase.logs,
        status: testCase.status,
      }];
    },
  );

  if (
    testCasesResult.length !== parsed.testCasesResult.length ||
    testCasesResult.length !== parsed.totalTestCases
  ) {
    return null;
  }

  return {
    submissionId: parsed.submissionId,
    problemId: parsed.problemId,
    language: parsed.language,
    status: parsed.status as SubmissionStatus,
    totalTestCases: parsed.totalTestCases,
    passedTestCases: parsed.passedTestCases,
    testCasesResult,
    stderr: parsed.stderr,
    exitCode: parsed.exitCode,
    executionTime: parsed.executionTime,
    memoryUsed: parsed.memoryUsed,
    errorMessage: parsed.errorMessage,
    completedAt: parsed.completedAt,
  };
}
