const { TOKEN_CONFIG } = require("../config/constants");

/**
 * Token manager for JWT authentication
 * Handles token generation, validation, and refresh
 */
class TokenManager {
  constructor(secret) {
    this.secret =
      secret || process.env.JWT_SECRET || "default-secret-change-in-production";
    this.algorithm = TOKEN_CONFIG.algorithm;
    this.expiresIn = TOKEN_CONFIG.expiresIn;
    this.refreshExpiresIn = TOKEN_CONFIG.refreshExpiresIn;
  }

  /**
   * Basic token structure for exercises
   * In production, use a proper JWT library like jsonwebtoken
   */

  // TODO: Implement generateToken, validateToken, refreshToken methods
  // Exercise: Use Copilot to implement JWT token management

  /**
   * Generate a new access token for a user
   * Token should include: userId, email, role, iat (issued at), exp (expiry)
   * @param {Object} payload - User data to encode
   * @param {string} payload.userId - User's unique ID
   * @param {string} payload.email - User's email
   * @param {string} payload.role - User's role (optional)
   * @returns {string} JWT access token
   */
  // generateToken(payload) {

  /**
   * Generate a refresh token with longer expiry
   * Used to obtain new access tokens without re-authentication
   * @param {string} userId - User's unique ID
   * @returns {string} JWT refresh token
   */
  // generateRefreshToken(userId) {

  /**
   * Validate an access token
   * Should check signature and expiry
   * @param {string} token - JWT token to validate
   * @returns {Object|null} Decoded payload if valid, null if invalid
   */
  // validateToken(token) {

  /**
   * Refresh an access token using a refresh token
   * Should validate refresh token first
   * @param {string} refreshToken - Valid refresh token
   * @param {Object} userService - User service to fetch fresh user data
   * @returns {Promise<Object>} New tokens {accessToken, refreshToken}
   * @throws {Error} If refresh token is invalid or expired
   */
  // async refreshToken(refreshToken, userService) {

  /**
   * Decode a token without validating
   * Useful for debugging or extracting data from expired tokens
   * @param {string} token - JWT token
   * @returns {Object|null} Decoded payload or null if malformed
   */
  // decodeToken(token) {

  /**
   * Check if a token is expired
   * @param {string} token - JWT token
   * @returns {boolean} True if expired
   */
  // isTokenExpired(token) {

  /**
   * Revoke a refresh token
   * In production, maintain a blacklist in Redis/database
   * @param {string} refreshToken - Token to revoke
   */
  // revokeRefreshToken(refreshToken) {
}

module.exports = TokenManager;
