/**
 * User Service - Main Entry Point
 *
 * This service handles user management for the TechMart platform.
 * It provides CRUD operations for user accounts and emits events
 * for other services to react to user changes.
 *
 * Port: 3001
 *
 * API Endpoints:
 * - GET    /users          - List all users
 * - GET    /users/:id      - Get user by ID
 * - GET    /users/email/:email - Get user by email
 * - POST   /users          - Create new user
 * - PUT    /users/:id      - Update user
 * - DELETE /users/:id      - Delete user
 * - GET    /health         - Health check
 */

const express = require("express");
const userController = require("./user-controller");
const { AppError } = require("./errors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "user-service",
    timestamp: new Date().toISOString(),
  });
});

// User routes
app.get("/users", userController.listUsers);
app.get("/users/email/:email", userController.getUserByEmail);
app.get("/users/:id", userController.getUser);
app.post("/users", userController.createUser);
app.put("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Not Found",
    message: `Cannot ${req.method} ${req.path}`,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  // Log error for debugging
  console.error(`[ERROR] ${err.name}: ${err.message}`);

  // Handle known operational errors
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.name,
      message: err.message,
      ...(err.field && { field: err.field }),
    });
  }

  // Handle unknown errors
  res.status(500).json({
    success: false,
    error: "InternalServerError",
    message:
      process.env.NODE_ENV === "production"
        ? "An unexpected error occurred"
        : err.message,
  });
});

// Start server (only if not in test mode)
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`🚀 User Service running on port ${PORT}`);
    console.log(`   Health check: http://localhost:${PORT}/health`);
  });
}

// Export for testing
module.exports = app;
