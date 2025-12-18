/**
 * User Controller - HTTP Request Handlers
 *
 * This module contains all HTTP handlers for user-related endpoints.
 * Each handler follows the pattern:
 * 1. Extract and validate input
 * 2. Call repository/service
 * 3. Return appropriate response
 *
 * Error handling is done via custom error classes that are caught
 * by the global error handler middleware.
 */

const userRepository = require("./user-repository");
const { ValidationError } = require("./errors");
const events = require("../../../shared/events");

/**
 * GET /users
 * List all users with optional filtering
 */
async function listUsers(req, res, next) {
  try {
    const filters = {};

    // Parse isActive filter
    if (req.query.isActive !== undefined) {
      filters.isActive = req.query.isActive === "true";
    }

    const users = userRepository.findAll(filters);

    res.json({
      success: true,
      data: users,
      count: users.length,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /users/:id
 * Get a single user by ID
 */
async function getUser(req, res, next) {
  try {
    const { id } = req.params;
    const user = userRepository.findById(id);

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /users
 * Create a new user
 */
async function createUser(req, res, next) {
  try {
    const { email, name, phone } = req.body;

    // Validate required fields
    if (!email) {
      throw new ValidationError("Email is required", "email");
    }
    if (!name) {
      throw new ValidationError("Name is required", "name");
    }

    // Validate email format (basic check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new ValidationError("Invalid email format", "email");
    }

    const user = userRepository.create({ email, name, phone });

    // Emit event for other services
    events.emit(events.Events.USER_CREATED, {
      userId: user.id,
      email: user.email,
      name: user.name,
    });

    res.status(201).json({
      success: true,
      data: user,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
}

/**
 * PUT /users/:id
 * Update an existing user
 */
async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const { email, name, phone, isActive } = req.body;

    // Build updates object with only provided fields
    const updates = {};
    if (email !== undefined) updates.email = email;
    if (name !== undefined) updates.name = name;
    if (phone !== undefined) updates.phone = phone;
    if (isActive !== undefined) updates.isActive = isActive;

    // Validate email format if provided
    if (updates.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(updates.email)) {
        throw new ValidationError("Invalid email format", "email");
      }
    }

    const user = userRepository.update(id, updates);

    // Emit event for other services
    events.emit(events.Events.USER_UPDATED, {
      userId: user.id,
      changes: Object.keys(updates),
    });

    res.json({
      success: true,
      data: user,
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /users/:id
 * Delete a user
 */
async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;

    // Get user info before deletion for event
    const user = userRepository.findById(id);

    userRepository.remove(id);

    // Emit event for other services
    events.emit(events.Events.USER_DELETED, {
      userId: id,
      email: user.email,
    });

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /users/email/:email
 * Find user by email
 */
async function getUserByEmail(req, res, next) {
  try {
    const { email } = req.params;
    const user = userRepository.findByEmail(email);

    if (!user) {
      const { NotFoundError } = require("./errors");
      throw new NotFoundError("User", email);
    }

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
};
