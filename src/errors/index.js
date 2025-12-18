/**
 * Error classes index
 * Export all error classes from a single entry point
 */

const AppError = require("./app-error");

// TODO: Export all error subclasses once implemented
// Exercise: Add exports for NotFoundError, ValidationError, etc.

module.exports = {
  AppError,
  // NotFoundError,
  // ValidationError,
  // AuthorizationError,
  // ForbiddenError,
  // RateLimitError,
};
