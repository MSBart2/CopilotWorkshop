/**
 * User entity for authentication system
 * @property {string} id - Unique user identifier
 * @property {string} email - User's email address
 * @property {string} passwordHash - Hashed password (never store plain text!)
 * @property {string} name - User's display name
 * @property {Object} profile - Additional profile information
 * @property {Date} createdAt - Account creation timestamp
 * @property {Date} lastLogin - Last login timestamp
 */
class User {
  constructor(id, email, passwordHash, name) {
    this.id = id;
    this.email = email;
    this.passwordHash = passwordHash;
    this.name = name;
    this.profile = {};
    this.createdAt = new Date();
    this.lastLogin = null;
  }

  /**
   * Update the last login timestamp
   */
  recordLogin() {
    this.lastLogin = new Date();
  }

  // TODO: Add password hashing and profile methods
  // Exercise: Use Copilot to implement these methods

  /**
   * Hash a plain text password using bcrypt
   * @param {string} plainPassword - The plain text password
   * @returns {Promise<string>} The hashed password
   */
  // static async hashPassword(plainPassword) {

  /**
   * Verify a plain text password against the stored hash
   * @param {string} plainPassword - The plain text password to verify
   * @returns {Promise<boolean>} True if password matches
   */
  // async verifyPassword(plainPassword) {

  /**
   * Update user profile with new data
   * Should merge with existing profile, not replace
   * @param {Object} profileData - New profile data to merge
   */
  // updateProfile(profileData) {

  /**
   * Get safe user data (without password hash) for API responses
   * @returns {Object} User data safe to send to client
   */
  // toSafeObject() {

  /**
   * Check if user account is active
   * Account is considered inactive if no login in 90 days
   * @returns {boolean} True if account is active
   */
  // isActive() {
}

module.exports = User;
