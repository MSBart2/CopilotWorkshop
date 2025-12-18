/**
 * Order Service - Main Entry Point
 *
 * Handles order management for TechMart.
 *
 * Port: 3002
 */

const express = require("express");
const orderProcessor = require("./order-processor");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Logging - inconsistent format compared to user-service
app.use((req, res, next) => {
  console.log(`>> ${req.method} ${req.url}`);
  next();
});

// Health check
app.get("/health", (req, res) => {
  res.json({ ok: true, service: "order-service" });
});

// Get all orders
app.get("/orders", (req, res) => {
  try {
    const filters = {};
    if (req.query.userId) filters.userId = req.query.userId;
    if (req.query.status) filters.status = req.query.status;

    const orders = orderProcessor.getAllOrders(filters);
    res.json({ orders, total: orders.length });
  } catch (err) {
    console.log("Error getting orders: " + err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get single order
app.get("/orders/:id", (req, res) => {
  try {
    const order = orderProcessor.getOrderById(req.params.id);
    res.json({ order });
  } catch (err) {
    // Inconsistent error response format
    if (err.message === "Order not found") {
      res.status(404).json({ error: "not_found", message: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

// Create order
app.post("/orders", async (req, res) => {
  try {
    const { userId, items } = req.body;

    // Basic validation - inconsistent with user-service validation
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "items array is required" });
    }

    const order = await orderProcessor.createOrder(userId, items);
    res.status(201).json({ order, message: "Order created" });
  } catch (err) {
    console.log("Failed to create order: " + err.message);
    // Generic error handling - inconsistent status codes
    res.status(400).json({ error: err.message });
  }
});

// Update order status
app.patch("/orders/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ error: "status is required" });
    }

    const order = await orderProcessor.updateOrderStatus(req.params.id, status);
    res.json({ order });
  } catch (err) {
    console.log("Status update failed: " + err.message);
    res.status(400).json({ error: err.message });
  }
});

// Cancel order
app.post("/orders/:id/cancel", async (req, res) => {
  try {
    const { reason } = req.body;
    const order = await orderProcessor.cancelOrder(
      req.params.id,
      reason || "No reason provided"
    );
    res.json({ order, message: "Order cancelled" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 404 - different format than user-service
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Error handler - much simpler than user-service
app.use((err, req, res, next) => {
  console.log("Unhandled error: " + err.message);
  res.status(500).json({ error: "Internal server error" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Order Service started on port ${PORT}`);
  });
}

module.exports = app;
