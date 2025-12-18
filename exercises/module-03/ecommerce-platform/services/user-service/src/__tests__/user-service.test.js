/**
 * User Service Tests
 *
 * These tests follow the Arrange-Act-Assert (AAA) pattern for clarity.
 * Each test is structured as:
 * - Arrange: Set up test data and preconditions
 * - Act: Execute the code under test
 * - Assert: Verify the expected outcome
 *
 * This is considered a BEST PRACTICE for test organization.
 */

const request = require("supertest");
const app = require("../index");
const userRepository = require("../user-repository");

describe("User Service API", () => {
  // Reset data before each test for isolation
  beforeEach(() => {
    userRepository.reset();
  });

  describe("GET /health", () => {
    it("should return healthy status", async () => {
      // Arrange
      // (no setup needed for health check)

      // Act
      const response = await request(app).get("/health");

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.status).toBe("healthy");
      expect(response.body.service).toBe("user-service");
    });
  });

  describe("GET /users", () => {
    it("should return all users", async () => {
      // Arrange
      // (using seed data from repository)

      // Act
      const response = await request(app).get("/users");

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.count).toBeGreaterThan(0);
    });

    it("should filter users by active status", async () => {
      // Arrange
      const filterValue = "true";

      // Act
      const response = await request(app).get(`/users?isActive=${filterValue}`);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.data.every((user) => user.isActive === true)).toBe(
        true
      );
    });
  });

  describe("GET /users/:id", () => {
    it("should return a user by ID", async () => {
      // Arrange
      const userId = "user-001";

      // Act
      const response = await request(app).get(`/users/${userId}`);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe(userId);
      expect(response.body.data.email).toBe("alice@techmart.com");
    });

    it("should return 404 for non-existent user", async () => {
      // Arrange
      const nonExistentId = "user-999";

      // Act
      const response = await request(app).get(`/users/${nonExistentId}`);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.error).toBe("NotFoundError");
    });
  });

  describe("POST /users", () => {
    it("should create a new user", async () => {
      // Arrange
      const newUser = {
        email: "newuser@example.com",
        name: "New User",
        phone: "+1-555-0199",
      };

      // Act
      const response = await request(app).post("/users").send(newUser);

      // Assert
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.email).toBe(newUser.email);
      expect(response.body.data.name).toBe(newUser.name);
      expect(response.body.data.id).toBeDefined();
    });

    it("should return 400 for missing email", async () => {
      // Arrange
      const invalidUser = {
        name: "No Email User",
      };

      // Act
      const response = await request(app).post("/users").send(invalidUser);

      // Assert
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error).toBe("ValidationError");
      expect(response.body.field).toBe("email");
    });

    it("should return 400 for invalid email format", async () => {
      // Arrange
      const invalidUser = {
        email: "not-an-email",
        name: "Invalid Email User",
      };

      // Act
      const response = await request(app).post("/users").send(invalidUser);

      // Assert
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain("Invalid email");
    });

    it("should return 409 for duplicate email", async () => {
      // Arrange
      const duplicateUser = {
        email: "alice@techmart.com", // Already exists in seed data
        name: "Duplicate Alice",
      };

      // Act
      const response = await request(app).post("/users").send(duplicateUser);

      // Assert
      expect(response.status).toBe(409);
      expect(response.body.success).toBe(false);
      expect(response.body.error).toBe("ConflictError");
    });
  });

  describe("PUT /users/:id", () => {
    it("should update an existing user", async () => {
      // Arrange
      const userId = "user-001";
      const updates = {
        name: "Alice Updated",
        phone: "+1-555-9999",
      };

      // Act
      const response = await request(app).put(`/users/${userId}`).send(updates);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe(updates.name);
      expect(response.body.data.phone).toBe(updates.phone);
      expect(response.body.data.email).toBe("alice@techmart.com"); // Unchanged
    });

    it("should return 404 for non-existent user", async () => {
      // Arrange
      const nonExistentId = "user-999";
      const updates = { name: "Ghost User" };

      // Act
      const response = await request(app)
        .put(`/users/${nonExistentId}`)
        .send(updates);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe("DELETE /users/:id", () => {
    it("should delete an existing user", async () => {
      // Arrange
      const userId = "user-003"; // Charlie, the inactive user

      // Act
      const response = await request(app).delete(`/users/${userId}`);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toContain("deleted");

      // Verify deletion
      const getResponse = await request(app).get(`/users/${userId}`);
      expect(getResponse.status).toBe(404);
    });

    it("should return 404 for non-existent user", async () => {
      // Arrange
      const nonExistentId = "user-999";

      // Act
      const response = await request(app).delete(`/users/${nonExistentId}`);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe("GET /users/email/:email", () => {
    it("should find user by email", async () => {
      // Arrange
      const email = "bob@techmart.com";

      // Act
      const response = await request(app).get(`/users/email/${email}`);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.email).toBe(email);
      expect(response.body.data.name).toBe("Bob Smith");
    });

    it("should return 404 for non-existent email", async () => {
      // Arrange
      const email = "nobody@example.com";

      // Act
      const response = await request(app).get(`/users/email/${email}`);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });
});
