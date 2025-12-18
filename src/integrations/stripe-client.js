const { API_CONFIG } = require("../config/constants");

/**
 * Stripe-like payment client
 * Mock implementation for training exercises
 */
class StripeClient {
  constructor(apiKey) {
    this.apiKey = apiKey || process.env.STRIPE_API_KEY;
    this.baseUrl = "https://api.stripe.com/v1";
    this.headers = {
      Authorization: `Bearer ${this.apiKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    };
  }

  /**
   * Make an authenticated request to Stripe API
   * @param {string} endpoint - API endpoint
   * @param {string} method - HTTP method
   * @param {Object} data - Request data
   * @returns {Promise<Object>} Response data
   */
  async _request(endpoint, method = "GET", data = null) {
    const url = `${this.baseUrl}${endpoint}`;
    const options = {
      method,
      headers: this.headers,
    };

    if (data && method !== "GET") {
      options.body = new URLSearchParams(data).toString();
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `Stripe API error: ${error.error?.message || response.statusText}`
      );
    }

    return response.json();
  }

  // TODO: Implement createCharge, createRefund, getPaymentIntent
  // Exercise: Use Copilot to implement these Stripe API methods

  /**
   * Create a charge
   * @param {Object} chargeData - Charge information
   * @param {number} chargeData.amount - Amount in cents
   * @param {string} chargeData.currency - Currency code (e.g., 'usd')
   * @param {string} chargeData.source - Payment source (token or card)
   * @param {string} chargeData.description - Charge description (optional)
   * @returns {Promise<Object>} Charge object
   */
  // async createCharge(chargeData) {

  /**
   * Create a refund for a charge
   * @param {string} chargeId - Original charge ID
   * @param {Object} refundData - Refund options
   * @param {number} refundData.amount - Amount to refund in cents (optional, full refund if omitted)
   * @param {string} refundData.reason - Reason code: 'duplicate', 'fraudulent', 'requested_by_customer'
   * @returns {Promise<Object>} Refund object
   */
  // async createRefund(chargeId, refundData = {}) {

  /**
   * Get payment intent details
   * @param {string} paymentIntentId - Payment intent ID
   * @returns {Promise<Object>} Payment intent object
   */
  // async getPaymentIntent(paymentIntentId) {

  /**
   * Create a payment intent
   * @param {Object} intentData - Payment intent data
   * @param {number} intentData.amount - Amount in cents
   * @param {string} intentData.currency - Currency code
   * @param {string[]} intentData.paymentMethodTypes - Allowed payment methods
   * @returns {Promise<Object>} Payment intent object with client_secret
   */
  // async createPaymentIntent(intentData) {

  /**
   * List all charges for a customer
   * @param {string} customerId - Stripe customer ID
   * @param {Object} options - List options
   * @param {number} options.limit - Max results (default: 10)
   * @returns {Promise<Object>} List of charges
   */
  // async listCharges(customerId, options = {}) {

  /**
   * Create a customer
   * @param {Object} customerData - Customer information
   * @param {string} customerData.email - Customer email
   * @param {string} customerData.name - Customer name
   * @param {Object} customerData.metadata - Additional metadata
   * @returns {Promise<Object>} Customer object
   */
  // async createCustomer(customerData) {
}

module.exports = StripeClient;
