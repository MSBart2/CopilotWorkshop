/**
 * Order entity for e-commerce system
 * @property {string} id - Unique order identifier
 * @property {string} customerId - Reference to customer
 * @property {Array} items - Array of order items
 * @property {string} status - Order status: 'pending', 'processing', 'shipped', 'delivered', 'cancelled'
 * @property {Date} createdAt - Order creation timestamp
 */
class Order {
  constructor(id, customerId, items, status = "pending") {
    this.id = id;
    this.customerId = customerId;
    this.items = items;
    this.status = status;
    this.createdAt = new Date();
  }

  /**
   * Calculate the total price of the order
   * @returns {number} Total price
   */
  calculateTotal() {
    return this.items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

  // TODO: Add validation methods
  // Exercise: Use Copilot to implement these methods

  /**
   * Validate that all items have positive quantities
   * @returns {boolean} True if all quantities are valid
   */
  // validateQuantities() {

  /**
   * Validate that all items have valid prices (positive numbers)
   * @returns {boolean} True if all prices are valid
   */
  // validatePrices() {

  /**
   * Check if the order can be cancelled
   * Only pending or processing orders can be cancelled
   * @returns {boolean} True if order can be cancelled
   */
  // canCancel() {

  /**
   * Get a summary of the order for display
   * @returns {Object} Order summary with item count, total, and status
   */
  // getSummary() {
}

module.exports = Order;
