/**
 * Base application error class
 * All custom errors should extend this class
 */
class AppError extends Error {
  constructor(message, statusCode = 500, code = "INTERNAL_ERROR") {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true; // Distinguish from programming errors

    Error.captureStackTrace(this, this.constructor);
  }

  /**
   * Convert error to JSON for API responses
   * @returns {Object} Error object safe for client
   */
  toJSON() {
    return {
      error: {
        code: this.code,
        message: this.message,
        statusCode: this.statusCode,
      },
    };
  }
}

// TODO: Add NotFoundError, ValidationError, AuthorizationError subclasses
// Exercise: Use Copilot to implement these error subclasses

/**
 * Error for resources that cannot be found
 * Should set statusCode to 404
 * @param {string} resource - The type of resource (e.g., 'User', 'Order')
 * @param {string} identifier - The identifier that was not found
 */
// class NotFoundError extends AppError {

/**
 * Error for validation failures
 * Should set statusCode to 400
 * Should accept an array of validation errors
 * @param {string} message - Error message
 * @param {Array} errors - Array of field-specific errors
 */
// class ValidationError extends AppError {

/**
 * Error for unauthorized access attempts
 * Should set statusCode to 401
 * @param {string} message - Error message (default: 'Unauthorized')
 */
// class AuthorizationError extends AppError {

/**
 * Error for forbidden actions (authenticated but not permitted)
 * Should set statusCode to 403
 * @param {string} action - The action that was forbidden
 * @param {string} resource - The resource being accessed
 */
// class ForbiddenError extends AppError {

/**
 * Error for rate limiting
 * Should set statusCode to 429
 * @param {number} retryAfter - Seconds until retry is allowed
 */
// class RateLimitError extends AppError {

module.exports = AppError;
