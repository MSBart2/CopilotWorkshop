/**
 * Payment Service Tests
 *
 * NOTE: These tests use a different assertion style than user-service.
 * They check the { success, error, data } pattern used by this service.
 * (Intentionally different style for the learning exercise)
 */

const request = require("supertest");
const app = require("../index");
const paymentProcessor = require("../payment-processor");

beforeEach(() => paymentProcessor.reset());

describe("Payment Service", () => {
  describe("Health Check", () => {
    test("returns healthy status", async () => {
      const response = await request(app).get("/health");
      expect(response.body.healthy).toBeTruthy();
      expect(response.body.name).toEqual("payment-service");
    });
  });

  describe("GET /payments", () => {
    test("lists all payments", async () => {
      const response = await request(app).get("/payments");

      // Using different assertion style - checking success property
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(2);
    });

    test("filters by userId", async () => {
      const response = await request(app).get("/payments?userId=user-001");
      expect(response.body.success).toBe(true);
      response.body.data.forEach((p) => {
        expect(p.userId).toBe("user-001");
      });
    });
  });

  describe("GET /payments/:id", () => {
    test("returns payment when found", async () => {
      const response = await request(app).get("/payments/pay-001");

      expect(response.status).toBe(200); // Always 200!
      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe("pay-001");
    });

    test("returns success:false when not found", async () => {
      const response = await request(app).get("/payments/nonexistent");

      // Note: Still 200 status!
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(false);
      expect(response.body.error.code).toBe("NOT_FOUND");
    });
  });

  describe("POST /payments", () => {
    test("processes valid payment", async () => {
      const paymentData = {
        orderId: "order-003",
        userId: "user-001",
        amount: 5000,
        currency: "USD",
        cardNumber: "4242424242424242",
      };

      const response = await request(app).post("/payments").send(paymentData);

      expect(response.body.success).toBe(true);
      expect(response.body.data.transactionId).toBeDefined();
      expect(response.body.data.cardLast4).toBe("4242");
    });

    test("rejects invalid card", async () => {
      const paymentData = {
        orderId: "order-003",
        amount: 1000,
        cardNumber: "123", // Too short
      };

      const response = await request(app).post("/payments").send(paymentData);

      // Still 200!
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(false);
      expect(response.body.error.code).toBe("INVALID_CARD");
    });

    test("handles declined card", async () => {
      const paymentData = {
        orderId: "order-003",
        amount: 1000,
        cardNumber: "4000000000000002", // Blocked card
      };

      const response = await request(app).post("/payments").send(paymentData);

      expect(response.body.success).toBeFalsy();
      expect(response.body.error.code).toEqual("CARD_DECLINED");
    });
  });

  describe("POST /payments/:id/refund", () => {
    test("processes refund", async () => {
      const response = await request(app)
        .post("/payments/pay-001/refund")
        .send({ reason: "Customer request" });

      expect(response.body.success).toBe(true);
      expect(response.body.data.status).toBe("refunded");
    });

    test("prevents double refund", async () => {
      // First refund
      await request(app).post("/payments/pay-001/refund").send({});

      // Second refund attempt
      const response = await request(app)
        .post("/payments/pay-001/refund")
        .send({});

      expect(response.body.success).toBe(false);
      expect(response.body.error.code).toBe("ALREADY_REFUNDED");
    });
  });
});
