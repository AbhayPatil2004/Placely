import type { EditorLanguage } from "@/data/problemBoilerplate";
import { apiRequest } from "@/lib/api/client";

export type BackendLanguage = "cpp" | "java" | "js" | "py";
export type ExecutionOutcome =
  | "success"
  | "runtime_error"
  | "compile_error"
  | "timeout"
  | "memory_limit_exceeded"
  | "error";

export type CodeRunStatus =
  | "ACCEPTED"
  | "WRONG_ANSWER"
  | "TIME_LIMIT_EXCEEDED"
  | "MEMORY_LIMIT_EXCEEDED"
  | "COMPILE_ERROR"
  | "RUNTIME_ERROR"
  | "SYSTEM_ERROR";

export type CodeRunTestCaseResult = {
  testCase: string;
  expectedOutput: string;
  actualOutput: string;
  logs: string;
  status: "passed" | "wrong_answer";
};

export type CodeRunResult = {
  jobId: string;
  problemId: string;
  language: string;
  status: CodeRunStatus;
  totalTestCases: number;
  passedTestCases: number;
  testCasesResult: CodeRunTestCaseResult[];
  stdout: string;
  stderr: string;
  exitCode: number | null;
  executionTime: number | null;
  memoryUsed: number | null;
  errorMessage: string;
  completedAt: string | null;
};

export type ExecutionResult = {
  status: ExecutionOutcome;
  stdout?: string;
  stderr?: string;
  exitCode?: number;
  problemRun?: CodeRunResult;
};

export type ExecutionResultMessage = {
  type: "CODE_EXECUTION_RESULT";
  jobId: string;
  status?: string;
  language?: string;
  result: ExecutionResult | null;
  error?: string | null;
};

const backendLanguageByEditorLanguage: Record<EditorLanguage, BackendLanguage> = {
  "C++": "cpp",
  Java: "java",
  JavaScript: "js",
  Python: "py",
};

export function toBackendLanguage(language: EditorLanguage): BackendLanguage {
  return backendLanguageByEditorLanguage[language];
}

export async function executeCode({
  code,
  language,
  input,
}: {
  code: string;
  language: EditorLanguage;
  input: string;
}): Promise<{ jobId: string }> {
  const response = await apiRequest<{ jobId: string }>("/api/code/execute", {
    method: "POST",
    body: JSON.stringify({
      code,
      language: toBackendLanguage(language),
      input,
    }),
  });

  if (typeof response.jobId !== "string" || response.jobId.length === 0) {
    throw new Error("The execution request did not return a job ID.");
  }

  return { jobId: response.jobId };
}

export async function runProblemCode({
  problemId,
  studentCode,
  language,
}: {
  problemId: string;
  studentCode: string;
  language: EditorLanguage;
}): Promise<{ jobId: string }> {
  const response = await apiRequest<{ jobId: string }>("/api/run/code", {
    method: "POST",
    body: JSON.stringify({
      problemId,
      language: toBackendLanguage(language),
      studentCode,
    }),
  });

  if (typeof response.jobId !== "string" || response.jobId.length === 0) {
    throw new Error("The code run request did not return a job ID.");
  }

  return { jobId: response.jobId };
}

const codeRunStatuses: CodeRunStatus[] = [
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

export function parseCodeRunResultMessage(data: unknown): CodeRunResult | null {
  if (typeof data !== "string") return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(data);
  } catch {
    return null;
  }

  if (!isRecord(parsed) || parsed.type !== "CODE_RUN_RESULT") return null;

  const rawStatus = parsed.status ?? parsed.verdict;
  const status = rawStatus === "COMPILATION_ERROR" ? "COMPILE_ERROR" : rawStatus;
  if (
    typeof parsed.jobId !== "string" ||
    parsed.jobId.length === 0 ||
    typeof parsed.problemId !== "string" ||
    typeof parsed.language !== "string" ||
    typeof status !== "string" ||
    !codeRunStatuses.includes(status as CodeRunStatus) ||
    typeof parsed.totalTestCases !== "number" ||
    !Number.isInteger(parsed.totalTestCases) ||
    parsed.totalTestCases < 0 ||
    typeof parsed.passedTestCases !== "number" ||
    !Number.isInteger(parsed.passedTestCases) ||
    parsed.passedTestCases < 0 ||
    parsed.passedTestCases > parsed.totalTestCases ||
    !Array.isArray(parsed.testCasesResult) ||
    parsed.testCasesResult.length > parsed.totalTestCases ||
    typeof parsed.stdout !== "string" ||
    typeof parsed.stderr !== "string" ||
    !(typeof parsed.exitCode === "number" || parsed.exitCode === null) ||
    !(typeof parsed.executionTime === "number" || parsed.executionTime === null) ||
    !(typeof parsed.memoryUsed === "number" || parsed.memoryUsed === null) ||
    typeof parsed.errorMessage !== "string" ||
    !(typeof parsed.completedAt === "string" || parsed.completedAt === null)
  ) {
    return null;
  }

  const testCasesResult = parsed.testCasesResult.flatMap(
    (testCase): CodeRunTestCaseResult[] => {
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

  if (testCasesResult.length !== parsed.testCasesResult.length) return null;

  return {
    jobId: parsed.jobId,
    problemId: parsed.problemId,
    language: parsed.language,
    status: status as CodeRunStatus,
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

export function toExecutionOutcome(status: CodeRunStatus): ExecutionOutcome {
  switch (status) {
    case "ACCEPTED":
      return "success";
    case "COMPILE_ERROR":
      return "compile_error";
    case "RUNTIME_ERROR":
      return "runtime_error";
    case "TIME_LIMIT_EXCEEDED":
      return "timeout";
    case "MEMORY_LIMIT_EXCEEDED":
      return "memory_limit_exceeded";
    case "WRONG_ANSWER":
    case "SYSTEM_ERROR":
      return "error";
  }
}

export function parseExecutionMessage(data: unknown):
  | { type: "CONNECTED" }
  | { type: "CODE_EXECUTION_RESULT"; message: ExecutionResultMessage }
  | { type: "INVALID" }
  | { type: "UNKNOWN" } {
  if (typeof data !== "string") {
    return { type: "INVALID" };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(data);
  } catch {
    return { type: "INVALID" };
  }

  if (!parsed || typeof parsed !== "object") {
    return { type: "INVALID" };
  }

  const message = parsed as Record<string, unknown>;

  if (message.type === "CONNECTED") {
    return { type: "CONNECTED" };
  }

  if (message.type === "CODE_RUN_RESULT") {
    return { type: "INVALID" };
  }

  if (message.type !== "CODE_EXECUTION_RESULT") {
    return { type: "UNKNOWN" };
  }

  if (
    typeof message.jobId !== "string" ||
    message.jobId.length === 0 ||
    !(
      message.result === null ||
      (typeof message.result === "object" &&
        message.result !== null &&
        typeof (message.result as Record<string, unknown>).status === "string")
    )
  ) {
    return { type: "INVALID" };
  }

  const rawResult = message.result as Record<string, unknown> | null;
  const validOutcomes: ExecutionOutcome[] = [
    "success",
    "runtime_error",
    "compile_error",
    "timeout",
    "memory_limit_exceeded",
    "error",
  ];
  const result: ExecutionResult | null = rawResult
    ? {
        status: validOutcomes.includes(rawResult.status as ExecutionOutcome)
          ? (rawResult.status as ExecutionOutcome)
          : "error",
        ...(typeof rawResult.stdout === "string" ? { stdout: rawResult.stdout } : {}),
        ...(typeof rawResult.stderr === "string" ? { stderr: rawResult.stderr } : {}),
        ...(typeof rawResult.exitCode === "number" ? { exitCode: rawResult.exitCode } : {}),
      }
    : null;

  return {
    type: "CODE_EXECUTION_RESULT",
    message: {
      type: "CODE_EXECUTION_RESULT",
      jobId: message.jobId,
      ...(typeof message.status === "string" ? { status: message.status } : {}),
      ...(typeof message.language === "string" ? { language: message.language } : {}),
      result,
      ...(typeof message.error === "string" ? { error: message.error } : {}),
    },
  };
}
