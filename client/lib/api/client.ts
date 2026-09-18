const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000").replace(/\/$/, "");
const REQUEST_RATE_LIMIT_MS = 1500;
const authRequestTimestamps = new Map<string, number>();

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

function protectRequest(endpoint: string) {
  const key = endpoint.split("?")[0];
  const now = Date.now();
  const previous = authRequestTimestamps.get(key) ?? 0;

  if (now - previous < REQUEST_RATE_LIMIT_MS) {
    throw new ApiError("Please wait a moment before trying again.", 429);
  }

  authRequestTimestamps.set(key, now);
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const method = (options.method ?? "GET").toUpperCase();
  const isAuthAction = /(login|signup|logout|forgot-password|verify-otp)/i.test(endpoint);

  if (isAuthAction && method !== "GET") {
    protectRequest(endpoint);
  }

  let response: Response;

  try {
    response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      credentials: "include",
      headers: {
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        Accept: "application/json",
        ...options.headers,
      },
    });
  } catch {
    throw new ApiError("Unable to connect to the server. Please try again.", 0);
  }

  const contentType = response.headers.get("content-type") ?? "";
  const payload = contentType.includes("application/json")
    ? ((await response.json().catch(() => null)) as { message?: string; data?: T } | null)
    : ((await response.text().catch(() => null)) as T | string | null);

  if (!response.ok) {
    const message =
      typeof payload === "object" && payload && "message" in payload
        ? String(payload.message)
        : typeof payload === "string" && payload.length > 0
          ? payload
          : "Something went wrong. Please try again.";

    throw new ApiError(message, response.status);
  }

  if (payload && typeof payload === "object" && "data" in payload) {
    return (payload.data ?? (payload as T)) as T;
  }

  return (payload ?? ({} as T)) as T;
}
