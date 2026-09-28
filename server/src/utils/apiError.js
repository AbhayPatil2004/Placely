class ApiError extends Error {
    constructor(statusCode, message, errors = []) {
        super(message);

<<<<<<< HEAD
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
=======
        this.success = false;
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
>>>>>>> a6b8baa86f3ece7ad7a80b5d3640f6435511647f

        Error.captureStackTrace(this, this.constructor);
    }
}

export default ApiError;