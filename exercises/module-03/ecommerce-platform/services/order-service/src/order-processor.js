/**
 * Order Processor
 *
 * Handles order creation and processing logic.
 * Makes HTTP calls to user-service and inventory-service.
 *
 * NOTE: This service uses console.log for error logging and throws generic Error objects.
 * This is INCONSISTENT with user-service's custom error classes.
 * (This inconsistency is intentional for the learning exercise)
 */

const { v4: uuidv4 } = require("uuid");
const httpClient = require("../../../shared/http-client");
const events = require("../../../shared/events");

// In-memory order store
const orders = new Map();

// Seed data
const seedOrders = [
  {
    id: "order-001",
    userId: "user-001",
    items: [
      {
        productId: "prod-001",
        sku: "WIDGET-001",
        quantity: 2,
        unitPrice: 1999,
        totalPrice: 3998,
      },
    ],
    subtotal: 3998,
    tax: 320,
    total: 4318,
    status: "confirmed",
    createdAt: new Date("2024-06-01"),
    updatedAt: new Date("2024-06-01"),
  },
  {
    id: "order-002",
    userId: "user-002",
    items: [
      {
        productId: "prod-002",
        sku: "GADGET-001",
        quantity: 1,
        unitPrice: 4999,
        totalPrice: 4999,
      },
      {
        productId: "prod-003",
        sku: "CABLE-USB",
        quantity: 3,
        unitPrice: 599,
        totalPrice: 1797,
      },
    ],
    subtotal: 6796,
    tax: 544,
    total: 7340,
    status: "shipped",
    createdAt: new Date("2024-06-15"),
    updatedAt: new Date("2024-06-18"),
  },
];

seedOrders.forEach((order) => orders.set(order.id, order));

/**
 * Validate that a user exists by calling user-service
 */
async function validateUser(userId) {
  try {
    const user = await httpClient.get("user", `/users/${userId}`);
    return user.data;
  } catch (err) {
    // Bad practice: using console.log instead of proper error handling
    console.log("ERROR: Failed to validate user - " + err.message);
    return null;
  }
}

/**
 * Check inventory availability by calling inventory-service
 */
async function checkInventory(items) {
  try {
    for (const item of items) {
      const inventory = await httpClient.get(
        "inventory",
        `/inventory/${item.sku}`
      );
      if (!inventory.data || inventory.data.available < item.quantity) {
        console.log("WARNING: Insufficient inventory for " + item.sku);
        return false;
      }
    }
    return true;
  } catch (err) {
    console.log("ERROR: Inventory check failed - " + err.message);
    // Bad practice: returning false instead of throwing, hiding the real error
    return false;
  }
}

/**
 * Reserve inventory for an order
 */
async function reserveInventory(items) {
  try {
    for (const item of items) {
      await httpClient.post("inventory", `/inventory/${item.sku}/reserve`, {
        quantity: item.quantity,
      });
    }
    return true;
  } catch (err) {
    console.log("ERROR: Failed to reserve inventory - " + err.message);
    return false;
  }
}

/**
 * Create a new order
 */
async function createOrder(userId, items) {
  // Validate user exists
  const user = await validateUser(userId);
  if (!user) {
    // Bad practice: throwing generic Error instead of custom error class
    throw new Error("User validation failed");
  }

  // Check inventory
  const hasInventory = await checkInventory(items);
  if (!hasInventory) {
    throw new Error("Insufficient inventory");
  }

  // Calculate totals
  let subtotal = 0;
  const orderItems = items.map((item) => {
    const totalPrice = item.unitPrice * item.quantity;
    subtotal += totalPrice;
    return {
      productId: item.productId,
      sku: item.sku,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      totalPrice,
    };
  });

  const tax = Math.round(subtotal * 0.08); // 8% tax
  const total = subtotal + tax;

  // Create the order
  const order = {
    id: uuidv4(),
    userId,
    items: orderItems,
    subtotal,
    tax,
    total,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  orders.set(order.id, order);

  // Try to reserve inventory
  const reserved = await reserveInventory(items);
  if (!reserved) {
    // Bad practice: just logging and continuing
    console.log("WARNING: Could not reserve inventory for order " + order.id);
  }

  // Emit event
  events.emit(events.Events.ORDER_CREATED, {
    orderId: order.id,
    userId: order.userId,
    total: order.total,
  });

  return order;
}

/**
 * Get all orders
 */
function getAllOrders(filters = {}) {
  let result = Array.from(orders.values());

  if (filters.userId) {
    result = result.filter((o) => o.userId === filters.userId);
  }
  if (filters.status) {
    result = result.filter((o) => o.status === filters.status);
  }

  return result;
}

/**
 * Get order by ID
 */
function getOrderById(id) {
  const order = orders.get(id);
  if (!order) {
    // Bad practice: throwing generic Error
    throw new Error("Order not found");
  }
  return order;
}

/**
 * Update order status
 */
async function updateOrderStatus(orderId, newStatus) {
  const order = orders.get(orderId);
  if (!order) {
    throw new Error("Order not found");
  }

  const validTransitions = {
    pending: ["confirmed", "cancelled"],
    confirmed: ["processing", "cancelled"],
    processing: ["shipped", "cancelled"],
    shipped: ["delivered"],
    delivered: [],
    cancelled: [],
  };

  if (!validTransitions[order.status].includes(newStatus)) {
    // Bad practice: console.log + generic error
    console.log(
      `ERROR: Invalid status transition from ${order.status} to ${newStatus}`
    );
    throw new Error("Invalid status transition");
  }

  order.status = newStatus;
  order.updatedAt = new Date();
  orders.set(orderId, order);

  // Emit appropriate event
  const eventMap = {
    confirmed: events.Events.ORDER_CONFIRMED,
    cancelled: events.Events.ORDER_CANCELLED,
    shipped: events.Events.ORDER_SHIPPED,
    delivered: events.Events.ORDER_DELIVERED,
  };

  if (eventMap[newStatus]) {
    events.emit(eventMap[newStatus], {
      orderId: order.id,
      userId: order.userId,
      status: newStatus,
    });
  }

  return order;
}

/**
 * Cancel an order
 */
async function cancelOrder(orderId, reason) {
  console.log("Cancelling order " + orderId + " - Reason: " + reason);

  try {
    const order = await updateOrderStatus(orderId, "cancelled");

    // Release inventory
    for (const item of order.items) {
      try {
        await httpClient.post("inventory", `/inventory/${item.sku}/release`, {
          quantity: item.quantity,
        });
      } catch (err) {
        console.log("WARNING: Failed to release inventory for " + item.sku);
      }
    }

    return order;
  } catch (err) {
    console.log("ERROR: Failed to cancel order - " + err.message);
    throw err;
  }
}

// For testing
function reset() {
  orders.clear();
  seedOrders.forEach((order) => orders.set(order.id, { ...order }));
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  cancelOrder,
  reset,
};
