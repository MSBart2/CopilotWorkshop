/**
 * Order validation utilities
 * Validates order items, shipping, and payment information
 */

/**
 * Validate an array of order items
 * @param {Array} items - Order items to validate
 * @returns {Object} {isValid: boolean, errors: string[]}
 */
function validateItems(items) {
  const errors = [];

  if (!Array.isArray(items)) {
    return { isValid: false, errors: ["Items must be an array"] };
  }

  if (items.length === 0) {
    return { isValid: false, errors: ["Order must contain at least one item"] };
  }

  // Basic validation - exercises will expand this
  items.forEach((item, index) => {
    if (!item.productId) {
      errors.push(`Item ${index + 1}: Missing product ID`);
    }
    if (typeof item.quantity !== "number" || item.quantity <= 0) {
      errors.push(`Item ${index + 1}: Invalid quantity`);
    }
    if (typeof item.price !== "number" || item.price < 0) {
      errors.push(`Item ${index + 1}: Invalid price`);
    }
  });

  return { isValid: errors.length === 0, errors };
}

// TODO: Implement validateShipping and validatePayment
// Exercise: Use Copilot to implement these validation functions

/**
 * Validate shipping information
 * Required fields: name, address, city, state/province, postalCode, country
 * @param {Object} shipping - Shipping details
 * @returns {Object} {isValid: boolean, errors: string[]}
 */
// function validateShipping(shipping) {

/**
 * Validate payment information
 * Should NOT validate actual card numbers (use payment processor)
 * Validates structure: has required fields, expiry not in past
 * @param {Object} payment - Payment details
 * @returns {Object} {isValid: boolean, errors: string[]}
 */
// function validatePayment(payment) {

/**
 * Validate complete order
 * Combines item, shipping, and payment validation
 * @param {Object} order - Full order object
 * @returns {Object} {isValid: boolean, errors: {items: string[], shipping: string[], payment: string[]}}
 */
// function validateOrder(order) {

/**
 * Check if quantity is within allowed limits
 * @param {number} quantity - Requested quantity
 * @param {number} available - Available stock
 * @param {number} maxPerOrder - Maximum allowed per order (default: 100)
 * @returns {Object} {isValid: boolean, error?: string}
 */
// function validateQuantityLimits(quantity, available, maxPerOrder = 100) {

/**
 * Validate coupon code format
 * Should be alphanumeric, 5-20 characters
 * @param {string} code - Coupon code
 * @returns {boolean} True if valid format
 */
// function isValidCouponFormat(code) {

module.exports = {
  validateItems,
  // validateShipping,
  // validatePayment,
  // validateOrder,
  // validateQuantityLimits,
  // isValidCouponFormat,
};
