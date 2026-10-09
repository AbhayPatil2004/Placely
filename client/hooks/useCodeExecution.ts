"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { EditorLanguage } from "@/data/problemBoilerplate";
import { ApiError, getApiWebSocketUrl } from "@/lib/api/client";
import {
  executeCode,
  parseExecutionMessage,
  type ExecutionResult,
} from "@/services/codeExecutionService";
import {
  parseSubmissionResultMessage,
  submitProblemCode,
  type SubmissionResult,
  type SubmissionState,
} from "@/services/submissionService";

export type ExecutionStatus =
  | "idle"
  | "connecting"
  | "running"
  | "success"
  | "runtime_error"
  | "compile_error"
  | "timeout"
  | "error"
  | "network_error";

export type ExecutionState = {
  status: ExecutionStatus;
  message: string;
  result: ExecutionResult | null;
  jobId: string | null;
};

type ConnectionStatus = "disconnected" | "connecting" | "connected";

const initialState: ExecutionState = {
  status: "idle",
  message: "",
  result: null,
  jobId: null,
};

const initialSubmissionState: SubmissionState = {
  status: "idle",
  message: "",
  result: null,
  submissionId: null,
};

export function useCodeExecution() {
  const [execution, setExecution] = useState<ExecutionState>(initialState);
  const [submission, setSubmission] = useState<SubmissionState>(initialSubmissionState);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>("disconnected");
  const socketRef = useRef<WebSocket | null>(null);
  const connectedRef = useRef(false);
  const connectionPromiseRef = useRef<Promise<void> | null>(null);
  const resolveConnectionRef = useRef<(() => void) | null>(null);
  const rejectConnectionRef = useRef<((error: Error) => void) | null>(null);
  const connectionTimeoutRef = useRef<number | null>(null);
  const currentJobIdRef = useRef<string | null>(null);
  const requestPendingRef = useRef(false);
  const runPendingRef = useRef(false);
  const runSequenceRef = useRef(0);
  const bufferedResultsRef = useRef(new Map<string, ExecutionResult | null>());
  const currentSubmissionIdRef = useRef<string | null>(null);
  const submissionRequestPendingRef = useRef(false);
  const submissionSequenceRef = useRef(0);
  const bufferedSubmissionResultsRef = useRef(new Map<string, SubmissionResult>());
  const mountedRef = useRef(false);

  const finishWithResult = useCallback((jobId: string, result: ExecutionResult | null) => {
    if (!mountedRef.current || currentJobIdRef.current !== jobId) return;

    currentJobIdRef.current = null;
    requestPendingRef.current = false;
    runPendingRef.current = false;

    if (!result) {
      setExecution({
        status: "error",
        message: "The execution service returned no result.",
        result: null,
        jobId,
      });
      return;
    }

    setExecution({
      status: result.status,
      message: "",
      result,
      jobId,
    });
  }, []);

  const finishWithSubmissionResult = useCallback((result: SubmissionResult) => {
    if (!mountedRef.current || currentSubmissionIdRef.current !== result.submissionId) return;

    currentSubmissionIdRef.current = null;
    submissionRequestPendingRef.current = false;
    setSubmission({
      status: result.status,
      message: "",
      result,
      submissionId: result.submissionId,
    });
  }, []);

  const handleSocketMessage = useCallback((data: unknown) => {
    const submissionResult = parseSubmissionResultMessage(data);
    if (submissionResult) {
      if (currentSubmissionIdRef.current === submissionResult.submissionId) {
        finishWithSubmissionResult(submissionResult);
      } else if (submissionRequestPendingRef.current) {
        bufferedSubmissionResultsRef.current.set(
          submissionResult.submissionId,
          submissionResult,
        );
      }
      return;
    }

    const parsed = parseExecutionMessage(data);

    if (parsed.type === "CONNECTED") {
      connectedRef.current = true;
      setConnectionStatus("connected");
      resolveConnectionRef.current?.();
      resolveConnectionRef.current = null;
      rejectConnectionRef.current = null;
      if (connectionTimeoutRef.current !== null) {
        window.clearTimeout(connectionTimeoutRef.current);
        connectionTimeoutRef.current = null;
      }
      return;
    }

    if (parsed.type === "INVALID") {
      if (currentJobIdRef.current || requestPendingRef.current) {
        currentJobIdRef.current = null;
        requestPendingRef.current = false;
        runPendingRef.current = false;
        setExecution({
          status: "error",
          message: "The execution service returned an invalid response.",
          result: null,
          jobId: null,
        });
      }
      if (currentSubmissionIdRef.current || submissionRequestPendingRef.current) {
        currentSubmissionIdRef.current = null;
        submissionRequestPendingRef.current = false;
        setSubmission({
          ...initialSubmissionState,
          status: "error",
          message: "The submission service returned an invalid response.",
        });
      }
      return;
    }

    if (parsed.type !== "CODE_EXECUTION_RESULT") return;

    const { jobId, result } = parsed.message;
    if (currentJobIdRef.current === jobId) {
      finishWithResult(jobId, result);
      return;
    }

    if (requestPendingRef.current) {
      bufferedResultsRef.current.set(jobId, result);
      if (bufferedResultsRef.current.size > 5) {
        const oldestJobId = bufferedResultsRef.current.keys().next().value;
        if (oldestJobId) bufferedResultsRef.current.delete(oldestJobId);
      }
    }
  }, [finishWithResult, finishWithSubmissionResult]);

  const connect = useCallback((): Promise<void> => {
    const existingSocket = socketRef.current;
    if (connectedRef.current && existingSocket?.readyState === WebSocket.OPEN) {
      return Promise.resolve();
    }
    if (connectionPromiseRef.current) return connectionPromiseRef.current;

    setConnectionStatus("connecting");
    const socket = new WebSocket(getApiWebSocketUrl());
    socketRef.current = socket;

    const connectionAttempt = new Promise<void>((resolve, reject) => {
      resolveConnectionRef.current = resolve;
      rejectConnectionRef.current = reject;
    });
    const connectionPromise = connectionAttempt.then(
      () => {
        if (connectionPromiseRef.current === connectionPromise) connectionPromiseRef.current = null;
      },
      (error: unknown) => {
        if (connectionPromiseRef.current === connectionPromise) connectionPromiseRef.current = null;
        throw error;
      },
    );
    connectionPromiseRef.current = connectionPromise;

    connectionTimeoutRef.current = window.setTimeout(() => {
      rejectConnectionRef.current?.(new Error("The execution connection timed out."));
      socket.close();
    }, 10000);

    socket.onmessage = (event) => {
      if (socketRef.current === socket) handleSocketMessage(event.data);
    };
    socket.onerror = () => {
      if (socketRef.current !== socket) return;
      if (mountedRef.current) setConnectionStatus("disconnected");
      rejectConnectionRef.current?.(new Error("Unable to connect to the execution service."));
    };
    socket.onclose = () => {
      if (socketRef.current !== socket) return;
      const wasConnected = connectedRef.current;
      connectedRef.current = false;
      if (mountedRef.current) setConnectionStatus("disconnected");
      if (socketRef.current === socket) socketRef.current = null;

      if (connectionTimeoutRef.current !== null) {
        window.clearTimeout(connectionTimeoutRef.current);
        connectionTimeoutRef.current = null;
      }

      if (!wasConnected) {
        rejectConnectionRef.current?.(new Error("Unable to connect to the execution service."));
      }
      resolveConnectionRef.current = null;
      rejectConnectionRef.current = null;

      if (
        currentJobIdRef.current ||
        requestPendingRef.current ||
        currentSubmissionIdRef.current ||
        submissionRequestPendingRef.current
      ) {
        const hadPendingExecution =
          currentJobIdRef.current !== null || requestPendingRef.current;
        const hadPendingSubmission =
          currentSubmissionIdRef.current !== null || submissionRequestPendingRef.current;
        currentJobIdRef.current = null;
        requestPendingRef.current = false;
        runPendingRef.current = false;
        currentSubmissionIdRef.current = null;
        submissionRequestPendingRef.current = false;
        if (hadPendingSubmission) {
          setSubmission({
            ...initialSubmissionState,
            status: "network_error",
            message: "Connection lost while waiting for the submission result. Submit again to retry.",
          });
        }
        if (hadPendingExecution) {
          setExecution({
            status: "network_error",
            message: "Connection lost while waiting for the result. Run the code again to retry.",
            result: null,
            jobId: null,
          });
        }
      }
    };

    return connectionPromise;
  }, [handleSocketMessage]);

  useEffect(() => {
    mountedRef.current = true;
    const bufferedResults = bufferedResultsRef.current;
    const bufferedSubmissionResults = bufferedSubmissionResultsRef.current;

    return () => {
      mountedRef.current = false;
      runSequenceRef.current += 1;
      submissionSequenceRef.current += 1;
      currentJobIdRef.current = null;
      requestPendingRef.current = false;
      runPendingRef.current = false;
      bufferedResults.clear();
      currentSubmissionIdRef.current = null;
      submissionRequestPendingRef.current = false;
      bufferedSubmissionResults.clear();
      if (connectionTimeoutRef.current !== null) {
        window.clearTimeout(connectionTimeoutRef.current);
        connectionTimeoutRef.current = null;
      }
      rejectConnectionRef.current?.(new Error("Execution editor was closed."));
      resolveConnectionRef.current = null;
      rejectConnectionRef.current = null;
      socketRef.current?.close();
      socketRef.current = null;
      connectedRef.current = false;
    };
  }, []);

  const run = useCallback(async ({
    code,
    language,
    input,
  }: {
    code: string;
    language: EditorLanguage;
    input: string;
  }) => {
    if (runPendingRef.current) return;
    runPendingRef.current = true;
    const runSequence = ++runSequenceRef.current;
    currentJobIdRef.current = null;
    requestPendingRef.current = false;
    bufferedResultsRef.current.clear();
    setExecution({ ...initialState, status: "connecting", message: "Connecting to the execution service..." });

    if (!code.trim()) {
      runPendingRef.current = false;
      setExecution({ ...initialState, status: "error", message: "Enter code before running." });
      return;
    }

    try {
      await connect();
      if (runSequence !== runSequenceRef.current || !mountedRef.current) return;

      requestPendingRef.current = true;
      setExecution({ ...initialState, status: "connecting", message: "Sending code for execution..." });
      const { jobId } = await executeCode({ code, language, input });
      if (runSequence !== runSequenceRef.current || !mountedRef.current || !runPendingRef.current) return;

      requestPendingRef.current = false;
      currentJobIdRef.current = jobId;
      setExecution({ status: "running", message: "Running...", result: null, jobId });

      if (bufferedResultsRef.current.has(jobId)) {
        const earlyResult = bufferedResultsRef.current.get(jobId) ?? null;
        bufferedResultsRef.current.delete(jobId);
        finishWithResult(jobId, earlyResult);
      } else {
        bufferedResultsRef.current.clear();
      }
    } catch (error) {
      if (runSequence !== runSequenceRef.current || !mountedRef.current || !runPendingRef.current) return;

      runPendingRef.current = false;
      requestPendingRef.current = false;
      currentJobIdRef.current = null;

      if (error instanceof ApiError) {
        if (error.status === 0) {
          setExecution({ ...initialState, status: "network_error", message: "Unable to reach the server. Check your connection and try again." });
        } else if (error.status === 401) {
          setExecution({ ...initialState, status: "error", message: "Please log in before running code." });
        } else if (error.status === 400) {
          setExecution({ ...initialState, status: "error", message: error.message });
        } else {
          setExecution({ ...initialState, status: "error", message: "Execution request could not be queued." });
        }
      } else if (error instanceof Error && error.message.toLowerCase().includes("connect")) {
        setExecution({ ...initialState, status: "network_error", message: "Unable to connect to the execution service. Check your connection and try again." });
      } else {
        setExecution({
          ...initialState,
          status: "error",
          message: error instanceof Error ? error.message : "Execution failed.",
        });
      }
    }
  }, [connect, finishWithResult]);

  const submit = useCallback(async ({
    problemId,
    studentCode,
    language,
  }: {
    problemId: string;
    studentCode: string;
    language: EditorLanguage;
  }) => {
    if (submissionRequestPendingRef.current || currentSubmissionIdRef.current) return;
    if (!problemId) {
      setSubmission({
        ...initialSubmissionState,
        status: "error",
        message: "This problem is missing its identifier and cannot be submitted.",
      });
      return;
    }
    if (!studentCode.trim()) {
      setSubmission({
        ...initialSubmissionState,
        status: "error",
        message: "Enter code before submitting.",
      });
      return;
    }

    submissionRequestPendingRef.current = true;
    currentSubmissionIdRef.current = null;
    bufferedSubmissionResultsRef.current.clear();
    const submissionSequence = ++submissionSequenceRef.current;
    setSubmission({ ...initialSubmissionState, status: "submitting", message: "Submitting code..." });

    try {
      await connect();
      if (submissionSequence !== submissionSequenceRef.current || !mountedRef.current) return;

      const queuedSubmission = await submitProblemCode({ problemId, studentCode, language });
      if (submissionSequence !== submissionSequenceRef.current || !mountedRef.current) return;

      submissionRequestPendingRef.current = false;
      currentSubmissionIdRef.current = queuedSubmission.submissionId;
      setSubmission({
        status: "queued",
        message: "Submission queued. Waiting for test results...",
        result: null,
        submissionId: queuedSubmission.submissionId,
      });

      const earlyResult = bufferedSubmissionResultsRef.current.get(queuedSubmission.submissionId);
      if (earlyResult) {
        bufferedSubmissionResultsRef.current.clear();
        finishWithSubmissionResult(earlyResult);
      }
    } catch (error) {
      if (submissionSequence !== submissionSequenceRef.current || !mountedRef.current) return;

      submissionRequestPendingRef.current = false;
      currentSubmissionIdRef.current = null;
      bufferedSubmissionResultsRef.current.clear();
      const isNetworkError =
        (error instanceof ApiError && error.status === 0) ||
        (error instanceof Error && error.message.toLowerCase().includes("connect"));

      setSubmission({
        ...initialSubmissionState,
        status: isNetworkError ? "network_error" : "error",
        message:
          error instanceof ApiError
            ? error.message
            : error instanceof Error
              ? error.message
              : "Submission failed. Please try again.",
      });
    }
  }, [connect, finishWithSubmissionResult]);

  return {
    execution,
    connectionStatus,
    isBusy: execution.status === "connecting" || execution.status === "running",
    submission,
    isSubmitting: submission.status === "submitting" || submission.status === "queued",
    run,
    submit,
  };
}
