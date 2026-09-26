class ApiError extends Error {
  constructor(statusCode, message, errors = [], cause) {
    super(message, { cause });

    this.name = "ApiError";
    Object.defineProperty(this, "message", {
      configurable: true,
      enumerable: true,
      value: message,
      writable: true,
    });
    this.success = false;
    this.statusCode = statusCode;
    this.errors = errors;

    if (cause instanceof Error && cause.stack) {
      this.stack = cause.stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;