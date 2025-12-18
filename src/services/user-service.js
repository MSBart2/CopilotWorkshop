const User = require("../models/user");

/**
 * User service for managing user accounts
 * Handles CRUD operations and user lookups
 */
class UserService {
  constructor() {
    this.users = new Map(); // In-memory storage for exercises
  }

  /**
   * Get a user by ID
   * @param {string} userId - User ID
   * @returns {User|null} User if found
   */
  getUser(userId) {
    return this.users.get(userId) || null;
  }

  // TODO: Implement CRUD methods, findByEmail, updateProfile
  // Exercise: Use Copilot to complete these methods

  /**
   * Create a new user account
   * Should hash password before storing
   * Should check for duplicate email
   * @param {string} email - User email
   * @param {string} password - Plain text password
   * @param {string} name - User display name
   * @returns {Promise<User>} Created user (without password hash in response)
   * @throws {Error} If email already exists or validation fails
   */
  // async createUser(email, password, name) {

  /**
   * Find a user by email address
   * Used for login and duplicate checking
   * @param {string} email - Email to search
   * @returns {User|null} User if found
   */
  // findByEmail(email) {

  /**
   * Update user profile information
   * Should not allow email or password changes through this method
   * @param {string} userId - User ID
   * @param {Object} profileData - Profile fields to update
   * @returns {User} Updated user
   * @throws {Error} If user not found
   */
  // updateProfile(userId, profileData) {

  /**
   * Change user password
   * Should verify old password before changing
   * @param {string} userId - User ID
   * @param {string} oldPassword - Current password
   * @param {string} newPassword - New password
   * @returns {Promise<boolean>} True if password changed successfully
   * @throws {Error} If old password incorrect or user not found
   */
  // async changePassword(userId, oldPassword, newPassword) {

  /**
   * Delete a user account
   * Should be a soft delete (mark as deleted, don't remove)
   * @param {string} userId - User ID
   * @returns {boolean} True if deleted
   */
  // deleteUser(userId) {

  /**
   * List all active users
   * @param {Object} options - Pagination options
   * @param {number} options.page - Page number (1-indexed)
   * @param {number} options.limit - Items per page
   * @returns {Object} {users: User[], total: number, page: number}
   */
  // listUsers(options = { page: 1, limit: 10 }) {
}

module.exports = UserService;
