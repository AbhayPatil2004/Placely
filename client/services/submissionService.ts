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
  stdout: string;
  stderr: string;
  exitCode: number | null;
  executionTime: number;
  memoryUsed: number | null;
  errorMessage: string;
  completedAt: string | null;
};

export type SubmissionHistoryEntry = {
  submissionId: string;
  problemId: string;
  language: string;
  code: string;
  status: SubmissionStatus | "PENDING" | "QUEUED" | "RUNNING";
  totalTestCases: number;
  passedTestCases: number;
  submittedAt: string | null;
  completedAt: string | null;
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
const acceptedSubmissionStatuses = [...submissionStatuses, "COMPILATION_ERROR"];
const historyStatuses = [...acceptedSubmissionStatuses, "PENDING", "QUEUED", "RUNNING"];

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

export async function getStudentProblemSubmissions(problemId: string): Promise<SubmissionHistoryEntry[]> {
  const response = await apiRequest<{ total: number; submissions: unknown[] }>(
    `/api/submit/getStudentProblemSubmissions/${encodeURIComponent(problemId)}`,
  );

  if (!Array.isArray(response.submissions)) {
    throw new Error("The submission history response is invalid.");
  }

  return response.submissions.map((submission, index) => {
    if (
      !isRecord(submission) ||
      typeof submission._id !== "string" ||
      typeof submission.problemId !== "string" ||
      typeof submission.language !== "string" ||
      typeof submission.code !== "string" ||
      typeof submission.status !== "string" ||
      !historyStatuses.includes(submission.status as SubmissionStatus | "COMPILATION_ERROR" | "PENDING" | "QUEUED" | "RUNNING") ||
      typeof submission.totalTestCases !== "number" ||
      typeof submission.passedTestCases !== "number"
    ) {
      throw new Error(`Submission history entry ${index + 1} is invalid.`);
    }

    return {
      submissionId: submission._id,
      problemId: submission.problemId,
      language: submission.language,
      code: submission.code,
      status: submission.status === "COMPILATION_ERROR"
        ? "COMPILE_ERROR"
        : submission.status as SubmissionHistoryEntry["status"],
      totalTestCases: submission.totalTestCases,
      passedTestCases: submission.passedTestCases,
      submittedAt: typeof submission.submittedAt === "string"
        ? submission.submittedAt
        : typeof submission.createdAt === "string"
          ? submission.createdAt
          : null,
      completedAt: typeof submission.completedAt === "string" ? submission.completedAt : null,
    };
  }).sort((first, second) => {
    const firstDate = first.submittedAt ? Date.parse(first.submittedAt) : 0;
    const secondDate = second.submittedAt ? Date.parse(second.submittedAt) : 0;
    return secondDate - firstDate;
  });
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
    !acceptedSubmissionStatuses.includes(parsed.status as SubmissionStatus | "COMPILATION_ERROR") ||
    typeof parsed.totalTestCases !== "number" ||
    !Number.isInteger(parsed.totalTestCases) ||
    typeof parsed.passedTestCases !== "number" ||
    !Number.isInteger(parsed.passedTestCases) ||
    parsed.totalTestCases < 0 ||
    parsed.passedTestCases < 0 ||
    parsed.passedTestCases > parsed.totalTestCases ||
    !Array.isArray(parsed.testCasesResult) ||
    typeof parsed.stdout !== "string" ||
    typeof parsed.stderr !== "string" ||
    !(typeof parsed.exitCode === "number" || parsed.exitCode === null) ||
    typeof parsed.executionTime !== "number" ||
    !(typeof parsed.memoryUsed === "number" || parsed.memoryUsed === null) ||
    typeof parsed.errorMessage !== "string" ||
    !(typeof parsed.completedAt === "string" || parsed.completedAt === null)
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
    testCasesResult.length > parsed.totalTestCases
  ) {
    return null;
  }

  return {
    submissionId: parsed.submissionId,
    problemId: parsed.problemId,
    language: parsed.language,
    status: parsed.status === "COMPILATION_ERROR"
      ? "COMPILE_ERROR"
      : parsed.status as SubmissionStatus,
    totalTestCases: parsed.totalTestCases,
    passedTestCases: parsed.passedTestCases,
    testCasesResult,
    stdout: parsed.stdout,
    stderr: parsed.stderr,
    exitCode: parsed.exitCode,
    executionTime: parsed.executionTime,
    memoryUsed: parsed.memoryUsed,
    errorMessage: parsed.errorMessage,
    completedAt: parsed.completedAt,
  };
}
