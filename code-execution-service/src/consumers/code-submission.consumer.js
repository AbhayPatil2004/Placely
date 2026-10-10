import {
  getChannel,
  CODE_SUBMISSION_QUEUE_NAME,
  CODE_SUBMISSION_RESULT_QUEUE_NAME,
} from "../config/rabbitmq.js";

import executeCpp from "../services/docker.cpp.service.js";
import executeJava from "../services/docker.java.service.js";
import executeJs from "../services/docker.js.service.js";
import executePy from "../services/docker.py.service.js";


const executors = {
  cpp: executeCpp,
  java: executeJava,
  js: executeJs,
  py: executePy,
};

// =============================================================
// Constants
// =============================================================

// Optional: if your driver prints this marker right before its result
// object, parsing becomes 100% reliable even when the student's code
// prints its own output. Example (JS driver):
//   console.log("__DRIVER_RESULT__" + JSON.stringify(result));
const DRIVER_MARKER = "__DRIVER_RESULT__";

const MAX_TEXT = 10_000; // max chars kept for stdout / stderr / messages

// Statuses the docker services may return (all compared in lowercase).
const TLE_STATUSES = new Set(["timeout", "time_limit_exceeded", "tle"]);
const MLE_STATUSES = new Set([
  "memory_limit_exceeded",
  "oom",
  "oom_killed",
  "mle",
]);
const COMPILE_STATUSES = new Set([
  "compile_error",
  "compilation_error",
  "compile_failed",
]);

// Fallbacks for when the docker service only gives you stderr + exitCode.
const MEMORY_PATTERNS =
  /out of memory|std::bad_alloc|OutOfMemoryError|MemoryError|heap out of memory|Cannot allocate memory|Killed$/im;

const COMPILE_PATTERNS = [
  /\.(cpp|cc|cxx|c|h|hpp):\d+:\d+:\s+(fatal )?error/i, // g++/gcc
  /\.java:\d+:\s+error/i, // javac
  /\bSyntaxError\b(?![^\n]*JSON)/, // python / node
  /\bIndentationError\b|\bTabError\b/, // python
  /undefined reference to|ld returned 1 exit status/i, // linker
];

// =============================================================
// Logging / small helpers
// =============================================================

const truncate = (value, max = MAX_TEXT) => {
  const text = String(value ?? "");
  return text.length > max
    ? `${text.slice(0, max)}\n...[truncated ${text.length - max} chars]`
    : text;
};

const preview = (value, max = 400) => {
  let text;
  try {
    text = typeof value === "string" ? value : JSON.stringify(value);
  } catch {
    text = String(value);
  }
  text = text ?? "undefined";
  return text.length > max ? `${text.slice(0, max)}...(+${text.length - max})` : text;
};

const makeLogger = (jobId) => (stage, message, data) => {
  const prefix = `[EXECUTOR][${new Date().toISOString()}][job:${jobId ?? "n/a"}][${stage}]`;
  if (data === undefined) console.log(prefix, message);
  else console.log(prefix, message, data);
};

// =============================================================
// Publishing
// =============================================================

const publishResult = (channel, result) => {
  const ok = channel.sendToQueue(
    CODE_SUBMISSION_RESULT_QUEUE_NAME,
    Buffer.from(JSON.stringify(result)),
    {
      persistent: true,
      contentType: "application/json",
      messageId: result.jobId,
    }
  );

  console.log(
    `[EXECUTOR][publish] job=${result.jobId} verdict=${result.verdict} ` +
      `sendToQueue returned ${ok}`
  );
};

// Infrastructure / job-level failure (docker crashed, bad job, unsupported
// language ...). This is NOT the student's fault, so it is SYSTEM_ERROR
// (previously RUNTIME_ERROR, which would be counted against the student).
const createFailureResult = (job, errorMessage) => ({
  jobId: job.jobId,
  submissionId: job.submissionId,
  studentId: job.studentId,
  problemId: job.problemId,
  language: job.language,

  status: "error",
  verdict: "SYSTEM_ERROR",

  totalTestCases: 0,
  passedTestCases: 0,
  testCasesResult: [],

  stdout: "",
  stderr: truncate(errorMessage),
  exitCode: -1,
  executionTime: null,
  memoryUsed: null,

  errorMessage: truncate(errorMessage),
  completedAt: new Date().toISOString(),
});

// =============================================================
// Safe parser for driver output
// (accepts strict JSON AND Node's console.log / util.inspect style:
//  unquoted keys, single-quoted strings, trailing commas, 'a' + 'b'
//  string concatenation, [Object] placeholders, "... n more items").
// It NEVER evaluates code, so student output cannot execute anything.
// =============================================================

const parseLooseValue = (source) => {
  const s = source;
  let i = 0;

  const fail = (msg) => {
    throw new Error(`${msg} at position ${i}`);
  };

  const skipWs = () => {
    while (i < s.length && /\s/.test(s[i])) i++;
  };

  const ESCAPES = { n: "\n", t: "\t", r: "\r", b: "\b", f: "\f", v: "\v", 0: "\0" };

  const parseQuoted = () => {
    const quote = s[i++];
    let out = "";

    while (i < s.length) {
      const c = s[i++];

      if (c === quote) return out;

      if (c === "\\") {
        const n = s[i++];

        if (n === "u") {
          const hex = s.slice(i, i + 4);
          if (!/^[0-9a-fA-F]{4}$/.test(hex)) fail("Bad \\u escape");
          out += String.fromCharCode(parseInt(hex, 16));
          i += 4;
        } else if (n === "x") {
          const hex = s.slice(i, i + 2);
          if (!/^[0-9a-fA-F]{2}$/.test(hex)) fail("Bad \\x escape");
          out += String.fromCharCode(parseInt(hex, 16));
          i += 2;
        } else {
          out += ESCAPES[n] ?? n;
        }
      } else {
        out += c;
      }
    }

    return fail("Unterminated string");
  };

  // Handles util.inspect splitting long strings: 'abc\n' +\n  'def'
  const parseString = () => {
    let out = parseQuoted();

    for (;;) {
      const save = i;
      skipWs();

      if (s[i] === "+") {
        i++;
        skipWs();
        if (s[i] === "'" || s[i] === '"' || s[i] === "`") {
          out += parseQuoted();
          continue;
        }
      }

      i = save;
      return out;
    }
  };

  const parseKey = () => {
    if (s[i] === "'" || s[i] === '"' || s[i] === "`") return parseQuoted();

    const m = /^[A-Za-z_$][\w$]*/.exec(s.slice(i));
    if (!m) fail("Invalid object key");
    i += m[0].length;
    return m[0];
  };

  const parseObject = () => {
    const obj = {};
    i++; // {
    skipWs();

    while (i < s.length && s[i] !== "}") {
      const key = parseKey();
      skipWs();
      if (s[i] !== ":") fail("Expected ':'");
      i++;
      skipWs();
      obj[key] = parseValue();
      skipWs();
      if (s[i] === ",") {
        i++;
        skipWs();
      } else if (s[i] !== "}") {
        fail("Expected ',' or '}'");
      }
    }

    if (s[i] !== "}") fail("Unterminated object");
    i++;
    return obj;
  };

  const parseArray = () => {
    const arr = [];
    i++; // [
    skipWs();

    while (i < s.length && s[i] !== "]") {
      // util.inspect: "... 12 more items"
      if (s.startsWith("...", i)) {
        while (i < s.length && s[i] !== "]" && s[i] !== ",") i++;
      } else {
        arr.push(parseValue());
      }

      skipWs();
      if (s[i] === ",") {
        i++;
        skipWs();
      } else if (s[i] !== "]") {
        fail("Expected ',' or ']'");
      }
    }

    if (s[i] !== "]") fail("Unterminated array");
    i++;
    return arr;
  };

  function parseValue() {
    skipWs();
    const c = s[i];

    if (c === "{") return parseObject();

    // util.inspect depth placeholders: [Object], [Array], [Function: x]
    const placeholder = /^\[(Object|Array|Function|Circular)[^\]]*\]/.exec(s.slice(i));
    if (placeholder) {
      i += placeholder[0].length;
      return null;
    }

    if (c === "[") return parseArray();
    if (c === "'" || c === '"' || c === "`") return parseString();

    const num = /^-?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/.exec(s.slice(i));
    if (num) {
      i += num[0].length;
      return Number(num[0]);
    }

    const word = /^[A-Za-z_$][\w$]*/.exec(s.slice(i));
    if (word) {
      i += word[0].length;
      switch (word[0]) {
        case "true":
          return true;
        case "false":
          return false;
        case "null":
        case "undefined":
          return null;
        case "NaN":
          return NaN;
        case "Infinity":
          return Infinity;
        default:
          return word[0]; // bare word -> string (e.g. status: passed)
      }
    }

    return fail(`Unexpected character '${c}'`);
  }

  const value = parseValue();
  skipWs();
  if (i < s.length) fail("Unexpected trailing content");
  return value;
};

const tryParseObject = (text) => {
  try {
    const strict = JSON.parse(text);
    if (strict && typeof strict === "object") return strict;
  } catch {
    // fall through to the tolerant parser
  }

  const loose = parseLooseValue(text.trim());
  if (!loose || typeof loose !== "object") {
    throw new Error("Parsed value is not an object");
  }
  return loose;
};

// Finds the driver's result object inside stdout. The student's own
// prints may be mixed in, so several strategies are tried in order.
const extractDriverResult = (stdout, log) => {
  const candidates = [];

  const markerIdx = stdout.lastIndexOf(DRIVER_MARKER);
  if (markerIdx !== -1) {
    candidates.push({
      name: "marker",
      text: stdout.slice(markerIdx + DRIVER_MARKER.length),
      pre: stdout.slice(0, markerIdx),
    });
  }

  candidates.push({ name: "whole-stdout", text: stdout, pre: "" });

  // top-level "{" at column 0, last one first
  const starts = [...stdout.matchAll(/^\{/gm)].map((m) => m.index).reverse();
  for (const idx of starts) {
    candidates.push({
      name: `from-line-start@${idx}`,
      text: stdout.slice(idx),
      pre: stdout.slice(0, idx),
    });
  }

  const errors = [];

  for (const candidate of candidates) {
    try {
      const parsed = tryParseObject(candidate.text);

      if (!("totalTestCases" in parsed) || !("passedTestCases" in parsed)) {
        throw new Error("Object has no totalTestCases / passedTestCases");
      }

      log("PARSE", `Driver result parsed using strategy "${candidate.name}"`);
      return { driverResult: parsed, userStdout: candidate.pre };
    } catch (error) {
      errors.push(`${candidate.name}: ${error.message}`);
    }
  }

  log("PARSE", "All parse strategies failed", errors);
  throw new Error(`Could not parse driver output (${errors[0] ?? "unknown"})`);
};

// =============================================================
// Classification
// =============================================================

const detectFailureKind = (execution, status, exitCode, stderr) => {
  if (
    execution.timedOut === true ||
    TLE_STATUSES.has(status) ||
    exitCode === 124
  ) {
    return "TIME_LIMIT_EXCEEDED";
  }

  if (
    execution.oomKilled === true ||
    MLE_STATUSES.has(status) ||
    MEMORY_PATTERNS.test(stderr)
  ) {
    return "MEMORY_LIMIT_EXCEEDED";
  }

  if (
    COMPILE_STATUSES.has(status) ||
    execution.phase === "compile" ||
    COMPILE_PATTERNS.some((re) => re.test(stderr))
  ) {
    return "COMPILATION_ERROR";
  }

  // SIGKILL without a timeout flag: the container was killed by the
  // memory cgroup in the vast majority of cases.
  if (exitCode === 137) return "MEMORY_LIMIT_EXCEEDED";

  return "RUNTIME_ERROR";
};

const DEFAULT_MESSAGES = {
  TIME_LIMIT_EXCEEDED: "Execution time limit exceeded",
  MEMORY_LIMIT_EXCEEDED: "Memory limit exceeded",
  COMPILATION_ERROR: "Compilation failed",
  RUNTIME_ERROR: "Program execution failed",
};

export const classifyExecution = (execution, ctx = {}) => {
  const log = makeLogger(ctx.jobId);
  const exec = execution ?? {};

  const executionStatus = String(exec.status ?? "").toLowerCase();
  const exitCode =
    exec.exitCode === null || exec.exitCode === undefined
      ? null
      : Number(exec.exitCode);
  const rawStdout = String(exec.stdout ?? "");
  const rawStderr = String(exec.stderr ?? "");

  log("CLASSIFY", "---------- input ----------");
  log("CLASSIFY", `status="${exec.status}" (normalized "${executionStatus}")`);
  log("CLASSIFY", `exitCode=${exitCode} timedOut=${exec.timedOut} oomKilled=${exec.oomKilled} phase=${exec.phase}`);
  log("CLASSIFY", `executionTime=${exec.executionTime} memoryUsed=${exec.memoryUsed}`);
  log("CLASSIFY", `stdout (${rawStdout.length} chars):`, preview(rawStdout));
  log("CLASSIFY", `stderr (${rawStderr.length} chars):`, preview(rawStderr));

  let verdict = "RUNTIME_ERROR";
  let totalTestCases = 0;
  let passedTestCases = 0;
  let testCasesResult = [];
  let errorMessage = String(exec.errorMessage ?? "") || rawStderr;
  let userStdout = rawStdout;
  let reason = "";

  const cleanExit = executionStatus === "success" && exitCode === 0;

  if (!cleanExit) {
    // ---------------------------------------------------------
    // TLE / MLE / compile error / runtime error
    // ---------------------------------------------------------
    verdict = detectFailureKind(exec, executionStatus, exitCode, rawStderr);
    errorMessage ||= DEFAULT_MESSAGES[verdict];
    reason = `non-clean execution (status="${executionStatus}", exitCode=${exitCode})`;
  } else {
    // ---------------------------------------------------------
    // Process exited 0 -> read the driver's result
    // ---------------------------------------------------------
    try {
      if (!rawStdout.trim()) throw new Error("Driver produced empty output");

      const { driverResult, userStdout: pre } = extractDriverResult(rawStdout, log);
      userStdout = pre;

      log("CLASSIFY", "driverResult:", preview(driverResult, 1000));

      testCasesResult = Array.isArray(driverResult.testCasesResult)
        ? driverResult.testCasesResult
        : [];
      totalTestCases = Number(driverResult.totalTestCases);
      passedTestCases = Number(driverResult.passedTestCases);

      // Driver caught an exception itself (e.g. student code threw).
      // Totals may be partial here, so validate leniently.
      if (driverResult.runtimeError) {
        if (!Number.isInteger(totalTestCases) || totalTestCases < 0) totalTestCases = 0;
        if (
          !Number.isInteger(passedTestCases) ||
          passedTestCases < 0 ||
          passedTestCases > totalTestCases
        ) {
          passedTestCases = 0;
        }

        verdict = "RUNTIME_ERROR";
        errorMessage = String(driverResult.runtimeError);
        reason = "driver reported runtimeError";
      } else {
        if (
          !Number.isInteger(totalTestCases) ||
          !Number.isInteger(passedTestCases) ||
          totalTestCases < 1 ||
          passedTestCases < 0 ||
          passedTestCases > totalTestCases
        ) {
          throw new Error(
            `Invalid test-case summary: total=${totalTestCases}, passed=${passedTestCases}`
          );
        }

        if (testCasesResult.length !== totalTestCases) {
          throw new Error(
            `testCasesResult count ${testCasesResult.length} !== totalTestCases ${totalTestCases}`
          );
        }

        // Cross-check the summary against the per-test statuses.
        const recount = testCasesResult.filter((t) => t?.status === "passed").length;
        if (recount !== passedTestCases) {
          log(
            "CLASSIFY",
            `WARNING passedTestCases=${passedTestCases} but ${recount} test cases have status "passed". Trusting per-test results.`
          );
          passedTestCases = recount;
        }

        if (passedTestCases === totalTestCases) {
          verdict = "ACCEPTED";
          errorMessage = "";
          reason = "all test cases passed";
        } else {
          verdict = "WRONG_ANSWER";
          errorMessage = "";
          reason = `${totalTestCases - passedTestCases} test case(s) failed`;
        }
      }
    } catch (error) {
      verdict = "RUNTIME_ERROR";
      errorMessage = `Invalid driver output: ${error.message}`;
      reason = "driver output could not be validated";
      testCasesResult = [];
      totalTestCases = 0;
      passedTestCases = 0;
      log("CLASSIFY", `ERROR ${error.message}`);
    }
  }

  const classification = {
    status: executionStatus || "error",
    verdict,
    totalTestCases,
    passedTestCases,
    testCasesResult,
    stdout: truncate(userStdout),
    stderr: truncate(rawStderr),
    exitCode: exitCode ?? -1,
    executionTime: exec.executionTime ?? null,
    memoryUsed: exec.memoryUsed ?? null,
    errorMessage: truncate(errorMessage),
  };

  log("CLASSIFY", "---------- result ----------");
  log("CLASSIFY", `verdict=${verdict} (${reason})`);
  log("CLASSIFY", `passed=${passedTestCases}/${totalTestCases}`);
  log("CLASSIFY", `errorMessage=${preview(classification.errorMessage)}`);

  return classification;
};

// =============================================================
// Consumer
// =============================================================

export const startCodeSubmissionConsumer = async () => {
  const channel = await getChannel();

  if (!channel) {
    throw new Error("RabbitMQ channel is unavailable");
  }

  await channel.assertQueue(CODE_SUBMISSION_QUEUE_NAME, { durable: true });
  await channel.assertQueue(CODE_SUBMISSION_RESULT_QUEUE_NAME, { durable: true });

  channel.prefetch(1);

  console.log(`[EXECUTOR] Waiting for submissions from ${CODE_SUBMISSION_QUEUE_NAME}...`);

  await channel.consume(
    CODE_SUBMISSION_QUEUE_NAME,
    async (message) => {
      if (!message) return;

      const startedAt = Date.now();
      let job;
      let log = makeLogger(null);

      try {
        job = JSON.parse(message.content.toString());
        log = makeLogger(job?.jobId);

        const { jobId, submissionId, studentId, problemId, language, code } = job;

        if (
          !jobId ||
          !submissionId ||
          !studentId ||
          !problemId ||
          typeof code !== "string" ||
          !code.trim()
        ) {
          throw new Error("Invalid submission job");
        }

        const normalizedLanguage = String(language ?? "").toLowerCase();
        const execute = executors[normalizedLanguage];

        if (!execute) {
          throw new Error(`Unsupported language: ${language}`);
        }

        log("JOB", "========== EXECUTING SUBMISSION ==========");
        log("JOB", `submission=${submissionId} student=${studentId} problem=${problemId}`);
        log("JOB", `language=${normalizedLanguage} codeLength=${code.length}`);

        // Test cases are included in the trusted driver.
        const execution = await execute(code);

        log("JOB", `docker execution finished in ${Date.now() - startedAt}ms`);

        const classified = classifyExecution(execution, { jobId });

        const result = {
          jobId,
          submissionId,
          studentId,
          problemId,
          language: normalizedLanguage,
          ...classified,
          completedAt: new Date().toISOString(),
        };

        publishResult(channel, result);

        log("JOB", `verdict=${result.verdict} passed=${result.passedTestCases}/${result.totalTestCases}`);
        log("JOB", `total job time ${Date.now() - startedAt}ms`);

        channel.ack(message);
      } catch (error) {
        log("JOB", `FAILED: ${error.message}`);
        console.error(error);

        if (job?.jobId && job?.submissionId && job?.studentId && job?.problemId) {
          try {
            publishResult(channel, createFailureResult(job, error.message));
          } catch (publishError) {
            log("JOB", `Failed to publish failure result: ${publishError.message}`);
          }
        } else {
          log("JOB", "Job has no identifiers, cannot publish a failure result");
        }

        channel.ack(message);
      }
    },
    { noAck: false }
  );
};