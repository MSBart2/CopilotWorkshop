const { API_CONFIG } = require("../config/constants");

/**
 * Payment service for processing transactions
 * Integrates with payment gateway (Stripe-like interface)
 */
class PaymentService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = API_CONFIG.baseUrl + "/payments";
  }

  /**
   * Process a payment charge
   * @param {Object} paymentDetails - Payment information
   * @param {number} paymentDetails.amount - Amount in cents
   * @param {string} paymentDetails.currency - Currency code (e.g., 'usd')
   * @param {string} paymentDetails.customerId - Customer identifier
   * @returns {Promise<Object>} Payment result
   */
  async processPayment(paymentDetails) {
    // Basic implementation - exercises will expand this
    const { amount, currency, customerId } = paymentDetails;

    if (!amount || amount <= 0) {
      throw new Error("Invalid payment amount");
    }

    // Simulate API call
    return {
      id: `pay_${Date.now()}`,
      amount,
      currency,
      customerId,
      status: "succeeded",
      createdAt: new Date().toISOString(),
    };
  }

  // TODO: Add retry logic with exponential backoff and refund processing
  // Exercise: Use Copilot to implement these methods

  /**
   * Process payment with automatic retry on failure
   * Uses exponential backoff: wait 1s, 2s, 4s between retries
   * @param {Object} paymentDetails - Payment information
   * @param {number} maxRetries - Maximum retry attempts (default: 3)
   * @returns {Promise<Object>} Payment result
   */
  // async processPaymentWithRetry(paymentDetails, maxRetries = 3) {

  /**
   * Process a refund for a previous payment
   * @param {string} paymentId - Original payment ID
   * @param {number} amount - Amount to refund in cents (optional, full refund if not provided)
   * @param {string} reason - Reason for refund
   * @returns {Promise<Object>} Refund result
   */
  // async processRefund(paymentId, amount, reason) {

  /**
   * Get the status of a payment
   * @param {string} paymentId - Payment ID to check
   * @returns {Promise<Object>} Payment status and details
   */
  // async getPaymentStatus(paymentId) {

  /**
   * Helper: Sleep for specified milliseconds
   * Used for exponential backoff
   * @param {number} ms - Milliseconds to sleep
   * @returns {Promise<void>}
   */
  // _sleep(ms) {
}

module.exports = PaymentService;
