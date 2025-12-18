const { HTTP_STATUS } = require("../config/constants");

/**
 * Authentication middleware for Express-style applications
 * Validates JWT tokens and attaches user to request
 */

/**
 * Create authentication middleware
 * @param {Object} tokenManager - Token manager instance for validation
 * @returns {Function} Express middleware function
 */
function createAuthMiddleware(tokenManager) {
  return async (req, res, next) => {
    // Basic structure - exercises will complete this
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        error: "No authorization header provided",
      });
    }

    // TODO: Implement token extraction, validation, and error responses
    // Exercise: Use Copilot to complete this middleware

    next();
  };
}

// TODO: Implement these helper functions and middleware
// Exercise: Use Copilot to implement token extraction and validation

/**
 * Extract Bearer token from Authorization header
 * Header format: "Bearer <token>"
 * @param {string} authHeader - Full authorization header value
 * @returns {string|null} Token if valid Bearer format, null otherwise
 */
// function extractBearerToken(authHeader) {

/**
 * Middleware to check if user has required role
 * Should be used after authentication middleware
 * @param {string[]} allowedRoles - Array of roles that can access the route
 * @returns {Function} Express middleware function
 */
// function requireRole(allowedRoles) {

/**
 * Middleware to check if user is accessing their own resource
 * Compares req.user.id with req.params.userId
 * @returns {Function} Express middleware function
 */
// function requireSelf() {

/**
 * Optional authentication middleware
 * Validates token if present but doesn't require it
 * Attaches user to request if valid token found
 * @param {Object} tokenManager - Token manager instance
 * @returns {Function} Express middleware function
 */
// function createOptionalAuthMiddleware(tokenManager) {

module.exports = {
  createAuthMiddleware,
  // extractBearerToken,
  // requireRole,
  // requireSelf,
  // createOptionalAuthMiddleware,
};
