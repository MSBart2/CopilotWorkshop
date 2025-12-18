const Customer = require("../models/customer");
const { TIER_DISCOUNTS, LOYALTY_BONUS } = require("../config/discounts");

/**
 * Pricing service for calculating customer-specific prices
 */
class PricingService {
  // TODO: Implement calculateTierDiscount and applyDiscount methods
  // Exercise: Use Copilot to complete these methods
  // Keep customer.js and discounts.js open in VS Code tabs for context
  /**
   * Get the base discount percentage for a customer's tier
   * @param {string} tier - Customer tier: 'bronze', 'silver', 'gold', 'platinum'
   * @returns {number} Discount percentage as decimal (e.g., 0.10 for 10%)
   */
  // calculateTierDiscount(tier) {
  /**
   * Apply a discount to a base price
   * @param {number} basePrice - Original price before discount
   * @param {number} discountPercent - Discount as decimal (e.g., 0.10 for 10%)
   * @returns {number} Price after discount, rounded to 2 decimal places
   */
  // applyDiscount(basePrice, discountPercent) {
  /**
   * Calculate the discount percentage for a customer
   * based on their tier and loyalty years
   * @param {Customer} customer - The customer object
   * @returns {number} Total discount percentage as decimal
   */
  // calculateCustomerDiscount(customer) {
  /**
   * Calculate the final price for a customer
   * @param {Customer} customer - The customer object
   * @param {number} basePrice - Original price before discount
   * @returns {number} Final price after all discounts
   */
  // calculateFinalPrice(customer, basePrice) {
}

module.exports = PricingService;
