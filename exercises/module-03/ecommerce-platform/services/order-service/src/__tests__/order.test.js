/**
 * Order Service Tests
 *
 * NOTE: These tests are less structured than user-service tests.
 * They don't follow AAA pattern consistently and have inconsistent assertions.
 * (This is intentional for the learning exercise)
 */

const request = require("supertest");
const app = require("../index");
const orderProcessor = require("../order-processor");

// Reset before tests
beforeEach(() => orderProcessor.reset());

// Health check test
test("health endpoint works", async () => {
  const res = await request(app).get("/health");
  expect(res.body.ok).toBe(true);
});

// Get orders
test("can get all orders", async () => {
  const res = await request(app).get("/orders");
  expect(res.status).toBe(200);
  expect(res.body.orders.length).toBeGreaterThan(0);
});

test("get orders with filter", async () => {
  const response = await request(app).get("/orders?userId=user-001");
  expect(response.body.orders).toBeDefined();
  // Not checking if filter actually works properly
});

// Get single order
test("get order by id", async () => {
  const r = await request(app).get("/orders/order-001");
  expect(r.status).toEqual(200);
  expect(r.body.order.id).toEqual("order-001");
});

test("404 for missing order", async () => {
  const res = await request(app).get("/orders/fake-id");
  // Checking status but not the error format
  expect(res.status).toBe(404);
});

// Create order - minimal testing
test("create order requires userId", async () => {
  const res = await request(app)
    .post("/orders")
    .send({ items: [{ sku: "TEST", quantity: 1 }] });
  expect(res.status).toBe(400);
});

test("create order requires items", async () => {
  const res = await request(app).post("/orders").send({ userId: "user-001" });
  expect(res.status).toBe(400);
});

// Status update
test("update order status", async () => {
  // This test might fail if validation is strict
  const res = await request(app)
    .patch("/orders/order-001/status")
    .send({ status: "processing" });
  // Not checking if the transition is valid
  expect(res.status).toBeDefined();
});

// Cancel - very basic
test("cancel endpoint exists", async () => {
  const res = await request(app).post("/orders/order-001/cancel").send({});
  // Just checking it doesn't crash
  expect(res.status).toBeDefined();
});
