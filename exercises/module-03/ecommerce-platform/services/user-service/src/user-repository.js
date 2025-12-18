/**
 * User Repository - In-Memory Data Store
 *
 * This module handles data persistence for users.
 * In production, this would be replaced with a real database.
 *
 * Pattern: Repository pattern separates data access from business logic.
 */

const { v4: uuidv4 } = require("uuid");
const { NotFoundError, ConflictError } = require("./errors");

// In-memory data store
const users = new Map();

// Seed some initial data for testing
const seedData = [
  {
    id: "user-001",
    email: "alice@techmart.com",
    name: "Alice Johnson",
    phone: "+1-555-0101",
    createdAt: new Date("2024-01-15"),
    isActive: true,
  },
  {
    id: "user-002",
    email: "bob@techmart.com",
    name: "Bob Smith",
    phone: "+1-555-0102",
    createdAt: new Date("2024-02-20"),
    isActive: true,
  },
  {
    id: "user-003",
    email: "charlie@example.com",
    name: "Charlie Brown",
    phone: null,
    createdAt: new Date("2024-03-10"),
    isActive: false,
  },
];

// Initialize with seed data
seedData.forEach((user) => users.set(user.id, user));

/**
 * Find all users
 * @param {Object} filters - Optional filters
 * @returns {Array} List of users
 */
function findAll(filters = {}) {
  let result = Array.from(users.values());

  if (filters.isActive !== undefined) {
    result = result.filter((u) => u.isActive === filters.isActive);
  }

  return result;
}

/**
 * Find a user by ID
 * @param {string} id - User ID
 * @returns {Object} User object
 * @throws {NotFoundError} If user not found
 */
function findById(id) {
  const user = users.get(id);
  if (!user) {
    throw new NotFoundError("User", id);
  }
  return { ...user };
}

/**
 * Find a user by email
 * @param {string} email - User email
 * @returns {Object|null} User object or null
 */
function findByEmail(email) {
  const user = Array.from(users.values()).find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  return user ? { ...user } : null;
}

/**
 * Create a new user
 * @param {Object} userData - User data
 * @returns {Object} Created user
 * @throws {ConflictError} If email already exists
 */
function create(userData) {
  // Check for duplicate email
  const existing = findByEmail(userData.email);
  if (existing) {
    throw new ConflictError(
      `User with email '${userData.email}' already exists`
    );
  }

  const user = {
    id: uuidv4(),
    email: userData.email,
    name: userData.name,
    phone: userData.phone || null,
    createdAt: new Date(),
    isActive: true,
  };

  users.set(user.id, user);
  return { ...user };
}

/**
 * Update an existing user
 * @param {string} id - User ID
 * @param {Object} updates - Fields to update
 * @returns {Object} Updated user
 * @throws {NotFoundError} If user not found
 * @throws {ConflictError} If new email already exists
 */
function update(id, updates) {
  const user = users.get(id);
  if (!user) {
    throw new NotFoundError("User", id);
  }

  // Check email uniqueness if changing email
  if (updates.email && updates.email !== user.email) {
    const existing = findByEmail(updates.email);
    if (existing) {
      throw new ConflictError(
        `User with email '${updates.email}' already exists`
      );
    }
  }

  const updatedUser = {
    ...user,
    ...updates,
    id: user.id, // Prevent ID change
    createdAt: user.createdAt, // Prevent createdAt change
  };

  users.set(id, updatedUser);
  return { ...updatedUser };
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {boolean} True if deleted
 * @throws {NotFoundError} If user not found
 */
function remove(id) {
  if (!users.has(id)) {
    throw new NotFoundError("User", id);
  }
  users.delete(id);
  return true;
}

/**
 * Clear all users (for testing)
 */
function clear() {
  users.clear();
}

/**
 * Reset to seed data (for testing)
 */
function reset() {
  clear();
  seedData.forEach((user) => users.set(user.id, { ...user }));
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  update,
  remove,
  clear,
  reset,
};
