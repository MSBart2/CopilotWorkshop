/**
 * Notification Service - Main Entry Point
 *
 * Event-driven notification service for TechMart.
 * Listens to domain events and sends appropriate notifications.
 *
 * Port: 3005
 *
 * This service is primarily event-driven but also exposes
 * HTTP endpoints for direct notification requests.
 */

const express = require("express");
const events = require("../../../shared/events");
const emailSender = require("./email-sender");
const smsSender = require("./sms-sender");

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

// ============================================
// EVENT LISTENERS
// ============================================

// Listen for order events
events.on(events.Events.ORDER_CREATED, async (eventData) => {
  console.log("[NOTIFICATION] Received ORDER_CREATED event");
  try {
    // In real app, would fetch user details to get email
    // For demo, we log the intent
    console.log(
      `Would send order confirmation email for order ${eventData.payload.orderId}`
    );
  } catch (err) {
    // Note: catching string throws here
    console.error("[NOTIFICATION] Failed to process ORDER_CREATED:", err);
  }
});

events.on(events.Events.ORDER_SHIPPED, async (eventData) => {
  console.log("[NOTIFICATION] Received ORDER_SHIPPED event");
  try {
    console.log(
      `Would send shipping notification for order ${eventData.payload.orderId}`
    );
  } catch (err) {
    console.error("[NOTIFICATION] Failed to process ORDER_SHIPPED:", err);
  }
});

events.on(events.Events.PAYMENT_COMPLETED, async (eventData) => {
  console.log("[NOTIFICATION] Received PAYMENT_COMPLETED event");
  try {
    console.log(
      `Would send payment receipt for ${eventData.payload.paymentId}`
    );
  } catch (err) {
    console.error("[NOTIFICATION] Failed to process PAYMENT_COMPLETED:", err);
  }
});

events.on(events.Events.PAYMENT_FAILED, async (eventData) => {
  console.log("[NOTIFICATION] Received PAYMENT_FAILED event");
  try {
    console.log(
      `Would send payment failure alert for order ${eventData.payload.orderId}`
    );
  } catch (err) {
    console.error("[NOTIFICATION] Failed:", err);
  }
});

events.on(events.Events.INVENTORY_LOW_STOCK, async (eventData) => {
  console.log("[NOTIFICATION] Received INVENTORY_LOW_STOCK event");
  console.log(
    `Low stock alert: ${eventData.payload.sku} - ${eventData.payload.available} remaining`
  );
});

// ============================================
// HTTP ENDPOINTS
// ============================================

app.get("/health", (req, res) => {
  res.json({ up: true, service: "notification-service" });
});

// Send email directly
app.post("/email", async (req, res) => {
  const { to, template, data } = req.body;

  try {
    const result = await emailSender.sendEmail(to, template, data);
    res.json({ sent: true, email: result });
  } catch (err) {
    // err might be a string!
    res.status(400).json({ sent: false, error: String(err) });
  }
});

// Send raw email
app.post("/email/raw", async (req, res) => {
  const { to, subject, body } = req.body;

  try {
    const result = await emailSender.sendRawEmail(to, subject, body);
    res.json({ sent: true, email: result });
  } catch (err) {
    res.status(400).json({ sent: false, error: String(err) });
  }
});

// Send SMS directly
app.post("/sms", async (req, res) => {
  const { to, message } = req.body;

  try {
    const result = await smsSender.sendSMS(to, message);
    res.json({ sent: true, sms: result });
  } catch (err) {
    res.status(400).json({ sent: false, error: String(err) });
  }
});

// Get available templates
app.get("/templates", (req, res) => {
  res.json({ templates: emailSender.templates });
});

// Get sent emails (for debugging/testing)
app.get("/debug/emails", (req, res) => {
  res.json({ emails: emailSender.getSentEmails() });
});

// Get sent SMS (for debugging/testing)
app.get("/debug/sms", (req, res) => {
  res.json({ messages: smsSender.getSentMessages() });
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: "endpoint not found" });
});

// Error handler
app.use((err, req, res, next) => {
  // Handle both Error objects and strings
  const message = err instanceof Error ? err.message : String(err);
  res.status(500).json({ error: message });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Notification Service listening on ${PORT}`);
    console.log(
      "Subscribed to events: ORDER_CREATED, ORDER_SHIPPED, PAYMENT_COMPLETED, PAYMENT_FAILED, INVENTORY_LOW_STOCK"
    );
  });
}

module.exports = app;
