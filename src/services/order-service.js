const Order = require("../models/order");

/**
 * Order service for managing orders
 * Handles order creation, validation, and lifecycle
 */
class OrderService {
  constructor(paymentService, pricingService) {
    this.paymentService = paymentService;
    this.pricingService = pricingService;
    this.orders = new Map(); // In-memory storage for exercises
  }

  /**
   * Get an order by ID
   * @param {string} orderId - Order ID
   * @returns {Order|null} Order if found
   */
  getOrder(orderId) {
    return this.orders.get(orderId) || null;
  }

  // TODO: Implement createOrder, validateOrder, and error handling
  // Exercise: Use Copilot to complete these methods

  /**
   * Create a new order
   * Should validate the order before creation
   * Should calculate total using pricing service if customer provided
   * @param {string} customerId - Customer ID
   * @param {Array} items - Array of {productId, name, price, quantity}
   * @param {Customer} customer - Optional customer for discount calculation
   * @returns {Promise<Order>} Created order
   * @throws {Error} If validation fails
   */
  // async createOrder(customerId, items, customer = null) {

  /**
   * Validate an order's items
   * Check: items array not empty, all quantities positive, all prices valid
   * @param {Array} items - Order items to validate
   * @returns {Object} {isValid: boolean, errors: string[]}
   */
  // validateOrder(items) {

  /**
   * Update order status
   * Valid transitions:
   * - pending -> processing, cancelled
   * - processing -> shipped, cancelled
   * - shipped -> delivered
   * @param {string} orderId - Order ID
   * @param {string} newStatus - New status
   * @returns {Order} Updated order
   * @throws {Error} If invalid transition or order not found
   */
  // updateOrderStatus(orderId, newStatus) {

  /**
   * Cancel an order and process refund if payment was made
   * @param {string} orderId - Order ID
   * @param {string} reason - Cancellation reason
   * @returns {Promise<Object>} Cancellation result with refund info if applicable
   */
  // async cancelOrder(orderId, reason) {

  /**
   * Get all orders for a customer
   * @param {string} customerId - Customer ID
   * @returns {Order[]} Array of orders
   */
  // getOrdersByCustomer(customerId) {
}

module.exports = OrderService;
