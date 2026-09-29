import type { EditorLanguage } from "@/data/problemBoilerplate";
import { apiRequest } from "@/lib/api/client";

export type BackendLanguage = "cpp" | "java" | "js" | "py";
export type ExecutionOutcome = "success" | "runtime_error" | "compile_error" | "timeout" | "error";

export type ExecutionResult = {
  status: ExecutionOutcome;
  stdout?: string;
  stderr?: string;
  exitCode?: number;
};

export type ExecutionResultMessage = {
  type: "CODE_EXECUTION_RESULT";
  jobId: string;
  status?: string;
  language?: string;
  result: ExecutionResult | null;
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
    },
  };
}
