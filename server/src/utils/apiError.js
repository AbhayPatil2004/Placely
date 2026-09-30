class ApiError extends Error {
    constructor(statusCode, message, errors = []) {
        super(message);

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

        Error.captureStackTrace(this, this.constructor);
    }
}

export default ApiError;