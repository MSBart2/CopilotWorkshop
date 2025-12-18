/**
 * Custom Error Classes for User Service
 *
 * This service uses a consistent error handling pattern with custom error classes.
 * Each error type has a specific HTTP status code and can carry additional context.
 *
 * This is considered a BEST PRACTICE for error handling in Node.js services.
 */

/**
 * Base error class for application errors
 */
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = true; // Distinguishes operational errors from programming errors
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Error for resources that cannot be found
 * HTTP Status: 404
 */
class NotFoundError extends AppError {
  constructor(resource = "Resource", identifier = "") {
    const message = identifier
      ? `${resource} with identifier '${identifier}' not found`
      : `${resource} not found`;
    super(message, 404);
    this.resource = resource;
    this.identifier = identifier;
  }
}

/**
 * Error for invalid input data
 * HTTP Status: 400
 */
class ValidationError extends AppError {
  constructor(message, field = null) {
    super(message, 400);
    this.field = field;
  }
}

/**
 * Error for duplicate resources (e.g., email already exists)
 * HTTP Status: 409
 */
class ConflictError extends AppError {
  constructor(message) {
    super(message, 409);
  }
}

/**
 * Error for unauthorized access
 * HTTP Status: 401
 */
class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

module.exports = {
  AppError,
  NotFoundError,
  ValidationError,
  ConflictError,
  UnauthorizedError,
};
