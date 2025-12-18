/**
 * Payment Service - Main Entry Point
 *
 * Handles payment processing for TechMart.
 * Uses Stripe-like API patterns.
 *
 * Port: 3004
 *
 * NOTE: This service returns { success, error?, data? } objects
 * instead of using HTTP status codes consistently.
 */

const express = require("express");
const paymentProcessor = require("./payment-processor");

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());

// Health
app.get("/health", (req, res) => {
  res.json({
    healthy: true,
    name: "payment-service",
    time: Date.now(),
  });
});

// List payments
app.get("/payments", (req, res) => {
  const result = paymentProcessor.getAllPayments({
    userId: req.query.userId,
    status: req.query.status,
  });

  // Always returns 200, success indicated in body
  res.json(result);
});

// Get single payment
app.get("/payments/:id", (req, res) => {
  const result = paymentProcessor.getPayment(req.params.id);

  // Note: Returns 200 even on "not found" - success: false in body
  // This is INCONSISTENT with REST conventions
  res.json(result);
});

// Get payments for order
app.get("/orders/:orderId/payments", (req, res) => {
  const result = paymentProcessor.getPaymentsByOrder(req.params.orderId);
  res.json(result);
});

// Process payment
app.post("/payments", async (req, res) => {
  const result = await paymentProcessor.processPayment({
    orderId: req.body.orderId,
    userId: req.body.userId,
    amount: req.body.amount,
    currency: req.body.currency,
    cardNumber: req.body.cardNumber,
  });

  // Returns 200 for both success and failure
  // Success/failure determined by result.success
  res.json(result);
});

// Process refund
app.post("/payments/:id/refund", async (req, res) => {
  const result = await paymentProcessor.processRefund(
    req.params.id,
    req.body.amount,
    req.body.reason
  );

  res.json(result);
});

// 404
app.use((req, res) => {
  res.json({
    success: false,
    error: { code: "NOT_FOUND", message: "Endpoint not found" },
  });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Payment Service listening on ${PORT}`);
  });
}

module.exports = app;
