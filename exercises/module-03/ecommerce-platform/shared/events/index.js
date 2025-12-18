/**
 * Event System for TechMart E-Commerce Platform
 *
 * This module provides an EventEmitter singleton for inter-service communication.
 * Services can emit and listen for domain events without tight coupling.
 *
 * In production, this would be replaced with a message broker (RabbitMQ, Kafka, etc.)
 */

const EventEmitter = require("events");

// Singleton event bus
const eventBus = new EventEmitter();

// Increase max listeners to avoid warnings in multi-service setup
eventBus.setMaxListeners(50);

/**
 * Event name constants
 * Using constants prevents typos and enables autocomplete
 */
const Events = {
  // User events
  USER_CREATED: "user:created",
  USER_UPDATED: "user:updated",
  USER_DELETED: "user:deleted",

  // Order events
  ORDER_CREATED: "order:created",
  ORDER_CONFIRMED: "order:confirmed",
  ORDER_CANCELLED: "order:cancelled",
  ORDER_SHIPPED: "order:shipped",
  ORDER_DELIVERED: "order:delivered",

  // Payment events
  PAYMENT_INITIATED: "payment:initiated",
  PAYMENT_COMPLETED: "payment:completed",
  PAYMENT_FAILED: "payment:failed",
  PAYMENT_REFUNDED: "payment:refunded",

  // Inventory events
  INVENTORY_RESERVED: "inventory:reserved",
  INVENTORY_RELEASED: "inventory:released",
  INVENTORY_LOW_STOCK: "inventory:low_stock",
  INVENTORY_OUT_OF_STOCK: "inventory:out_of_stock",

  // Notification events (triggers for notification service)
  SEND_EMAIL: "notification:send_email",
  SEND_SMS: "notification:send_sms",
  SEND_PUSH: "notification:send_push",
};

/**
 * Emit an event with payload
 * @param {string} eventName - Event name from Events constants
 * @param {Object} payload - Event data
 */
function emit(eventName, payload) {
  const eventData = {
    event: eventName,
    timestamp: new Date().toISOString(),
    payload,
  };

  // Log event emission for debugging
  console.log(
    `[EVENT] Emitting: ${eventName}`,
    JSON.stringify(payload).substring(0, 100)
  );

  eventBus.emit(eventName, eventData);
}

/**
 * Subscribe to an event
 * @param {string} eventName - Event name from Events constants
 * @param {Function} handler - Event handler function
 */
function on(eventName, handler) {
  eventBus.on(eventName, handler);
}

/**
 * Subscribe to an event once
 * @param {string} eventName - Event name from Events constants
 * @param {Function} handler - Event handler function
 */
function once(eventName, handler) {
  eventBus.once(eventName, handler);
}

/**
 * Remove event listener
 * @param {string} eventName - Event name from Events constants
 * @param {Function} handler - Event handler function to remove
 */
function off(eventName, handler) {
  eventBus.off(eventName, handler);
}

module.exports = {
  Events,
  emit,
  on,
  once,
  off,
  // Expose raw eventBus for testing
  _eventBus: eventBus,
};
