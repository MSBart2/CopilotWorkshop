/**
 * Inventory Service - Main Entry Point
 *
 * Manages stock levels for TechMart products.
 *
 * Port: 3003
 *
 * NOTE: This service mixes snake_case and camelCase naming conventions.
 * The response formats also vary across endpoints.
 */

const express = require("express");
const stockManager = require("./stock-manager");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

// Health
app.get("/health", (req, res) => {
  res.send({ status: "ok", service: "inventory-service", port: PORT });
});

// Get all inventory
app.get("/inventory", (req, res) => {
  const items = stockManager.getAllItems({
    warehouseCode: req.query.warehouse,
    lowStock: req.query.lowStock === "true",
    outOfStock: req.query.outOfStock === "true",
  });

  // Response format different from other services
  res.json({
    items,
    count: items.length,
  });
});

// Get single item
app.get("/inventory/:sku", (req, res) => {
  const item = stockManager.get_item_by_sku(req.params.sku);

  // Note: Returns 200 with empty body for not found (inconsistent!)
  if (!item) {
    return res.json({ item: null, found: false });
  }

  res.json({ item, found: true });
});

// Check availability
app.get("/inventory/:sku/availability", (req, res) => {
  const quantity = parseInt(req.query.quantity) || 1;
  const result = stockManager.check_availability(req.params.sku, quantity);

  if (!result) {
    return res.json({ available: false, reason: "SKU not found" });
  }

  res.json(result);
});

// Reserve stock
app.post("/inventory/:sku/reserve", (req, res) => {
  const quantity = req.body.quantity;

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ error: "quantity must be positive" });
  }

  const result = stockManager.reserve_stock(req.params.sku, quantity);

  if (!result) {
    // Could mean not found OR insufficient stock - ambiguous!
    return res.json({ reserved: false, message: "Could not reserve stock" });
  }

  res.json({ reserved: true, ...result });
});

// Release stock
app.post("/inventory/:sku/release", (req, res) => {
  const quantity = req.body.quantity;

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ error: "quantity must be positive" });
  }

  const result = stockManager.release_stock(req.params.sku, quantity);

  if (!result) {
    return res.json({ released: false });
  }

  res.json({ released: true, ...result });
});

// Update quantity
app.put("/inventory/:sku/quantity", (req, res) => {
  const new_quantity = req.body.quantity;

  if (new_quantity === undefined || new_quantity < 0) {
    return res.status(400).json({ error: "valid quantity required" });
  }

  const result = stockManager.updateQuantity(req.params.sku, new_quantity);

  if (!result) {
    return res.json({ updated: false });
  }

  res.json({ updated: true, ...result });
});

// Add new item
app.post("/inventory", (req, res) => {
  const { sku, name, quantity, productId, warehouseCode } = req.body;

  if (!sku) {
    return res.status(400).json({ error: "sku required" });
  }

  const result = stockManager.add_item({
    sku,
    name,
    quantity,
    productId,
    warehouseCode,
  });

  if (!result) {
    // SKU already exists - but we just return null info
    return res.json({ created: false, message: "Could not create item" });
  }

  res.status(201).json({ created: true, item: result });
});

// 404
app.use((req, res) => {
  res.status(404).send({ error: "not found" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Inventory Service running: ${PORT}`);
  });
}

module.exports = app;
