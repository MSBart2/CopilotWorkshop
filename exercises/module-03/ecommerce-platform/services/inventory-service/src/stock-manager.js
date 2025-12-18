/**
 * Stock Manager
 *
 * Handles inventory tracking for TechMart products.
 *
 * WARNING: This module uses INCONSISTENT naming conventions!
 * Some variables use snake_case while others use camelCase.
 * This is INTENTIONAL for the learning exercise to demonstrate
 * what happens when coding standards aren't documented.
 *
 * ERROR PATTERN: Returns null for not-found cases instead of
 * throwing errors. This is different from ALL other services.
 */

const events = require("../../../shared/events");

// In-memory inventory store - note the snake_case keys!
const inventory_items = new Map();

// Seed data - mixing naming styles
const seed_data = [
  {
    product_id: "prod-001",
    sku: "WIDGET-001",
    name: "Premium Widget",
    quantity: 100,
    reserved_quantity: 5,
    warehouse_code: "WH-EAST",
    reorder_level: 20,
    last_updated: new Date("2024-06-01"),
  },
  {
    product_id: "prod-002",
    sku: "GADGET-001",
    name: "Super Gadget",
    quantity: 50,
    reserved_quantity: 2,
    warehouse_code: "WH-EAST",
    reorder_level: 10,
    last_updated: new Date("2024-06-10"),
  },
  {
    product_id: "prod-003",
    sku: "CABLE-USB",
    name: "USB-C Cable 2m",
    quantity: 500,
    reserved_quantity: 0,
    warehouse_code: "WH-WEST",
    reorder_level: 100,
    last_updated: new Date("2024-06-15"),
  },
  {
    product_id: "prod-004",
    sku: "WIDGET-002",
    name: "Basic Widget",
    quantity: 0,
    reserved_quantity: 0,
    warehouse_code: "WH-EAST",
    reorder_level: 25,
    last_updated: new Date("2024-05-01"),
  },
];

seed_data.forEach((item) => inventory_items.set(item.sku, item));

/**
 * Get inventory item by SKU
 * Returns null if not found (not an error!)
 */
function get_item_by_sku(sku) {
  const item = inventory_items.get(sku);
  // Returns null instead of throwing - caller must check!
  return item ? { ...item } : null;
}

/**
 * Get all inventory items
 * Uses camelCase for parameters but snake_case internally
 */
function getAllItems(filters = {}) {
  let result = Array.from(inventory_items.values());

  // Filter by warehouse - note mixing of naming styles
  if (filters.warehouseCode) {
    result = result.filter(
      (item) => item.warehouse_code === filters.warehouseCode
    );
  }

  // Filter for low stock
  if (filters.lowStock) {
    result = result.filter((item) => {
      const available = item.quantity - item.reserved_quantity;
      return available <= item.reorder_level;
    });
  }

  // Filter out of stock
  if (filters.outOfStock) {
    result = result.filter((item) => item.quantity === 0);
  }

  return result;
}

/**
 * Check availability for a SKU
 */
function check_availability(sku, requested_quantity) {
  const item = inventory_items.get(sku);

  // Returns null for not found
  if (!item) {
    return null;
  }

  const available_quantity = item.quantity - item.reserved_quantity;

  return {
    sku: item.sku,
    available: available_quantity,
    requested: requested_quantity,
    is_available: available_quantity >= requested_quantity,
  };
}

/**
 * Reserve inventory for an order
 */
function reserve_stock(sku, quantity) {
  const item = inventory_items.get(sku);

  if (!item) {
    return null; // Not found
  }

  const available = item.quantity - item.reserved_quantity;
  if (available < quantity) {
    return null; // Insufficient stock, but we return null, not an error!
  }

  item.reserved_quantity += quantity;
  item.last_updated = new Date();
  inventory_items.set(sku, item);

  // Check if low stock
  const new_available = item.quantity - item.reserved_quantity;
  if (new_available <= item.reorder_level) {
    events.emit(events.Events.INVENTORY_LOW_STOCK, {
      sku: item.sku,
      available: new_available,
      reorder_level: item.reorder_level,
    });
  }

  events.emit(events.Events.INVENTORY_RESERVED, {
    sku,
    quantity,
    remaining: new_available,
  });

  return {
    sku,
    reserved: quantity,
    total_reserved: item.reserved_quantity,
    available: new_available,
  };
}

/**
 * Release reserved inventory
 */
function release_stock(sku, quantity) {
  const item = inventory_items.get(sku);

  if (!item) return null;

  // Don't release more than reserved
  const release_amount = Math.min(quantity, item.reserved_quantity);
  item.reserved_quantity -= release_amount;
  item.last_updated = new Date();
  inventory_items.set(sku, item);

  events.emit(events.Events.INVENTORY_RELEASED, {
    sku,
    released: release_amount,
  });

  return {
    sku,
    released: release_amount,
    total_reserved: item.reserved_quantity,
    available: item.quantity - item.reserved_quantity,
  };
}

/**
 * Update stock quantity (e.g., after receiving shipment)
 */
function updateQuantity(sku, newQuantity) {
  const item = inventory_items.get(sku);

  if (!item) return null;

  const old_quantity = item.quantity;
  item.quantity = newQuantity;
  item.last_updated = new Date();
  inventory_items.set(sku, item);

  // Check out of stock
  if (newQuantity === 0) {
    events.emit(events.Events.INVENTORY_OUT_OF_STOCK, {
      sku: item.sku,
      product_id: item.product_id,
    });
  }

  return {
    sku,
    oldQuantity: old_quantity,
    newQuantity,
    available: newQuantity - item.reserved_quantity,
  };
}

/**
 * Add new inventory item
 */
function add_item(itemData) {
  // Validate SKU doesn't exist
  if (inventory_items.has(itemData.sku)) {
    return null; // Already exists, return null (no error thrown)
  }

  const new_item = {
    product_id: itemData.productId || itemData.product_id,
    sku: itemData.sku,
    name: itemData.name,
    quantity: itemData.quantity || 0,
    reserved_quantity: 0,
    warehouse_code:
      itemData.warehouseCode || itemData.warehouse_code || "WH-DEFAULT",
    reorder_level: itemData.reorderLevel || itemData.reorder_level || 10,
    last_updated: new Date(),
  };

  inventory_items.set(new_item.sku, new_item);
  return { ...new_item };
}

// For testing
function reset() {
  inventory_items.clear();
  seed_data.forEach((item) => inventory_items.set(item.sku, { ...item }));
}

module.exports = {
  get_item_by_sku,
  getAllItems,
  check_availability,
  reserve_stock,
  release_stock,
  updateQuantity,
  add_item,
  reset,
};
