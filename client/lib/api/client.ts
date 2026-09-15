const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
  } catch {
    throw new ApiError("Unable to connect to the server. Please try again.", 0);
  }

  const payload = (await response.json().catch(() => null)) as
    | { message?: string; data?: T }
    | null;

  if (!response.ok) {
    throw new ApiError(
      payload?.message ?? "Something went wrong. Please try again.",
      response.status,
    );
  }

  return (payload?.data ?? payload) as T;
}
