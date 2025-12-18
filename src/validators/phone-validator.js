/**
 * Phone number validation utilities
 * Supports US and international formats
 */

// TODO: Implement phone validation regex patterns
// Exercise: Use Copilot to implement regex patterns for different formats

/**
 * US phone number regex (10 digits)
 * Should match: (555) 123-4567, 555-123-4567, 5551234567
 */
// const US_PHONE_REGEX =

/**
 * International phone regex with country code
 * Should match: +1-555-123-4567, +44 20 7123 4567
 */
// const INTL_PHONE_REGEX =

/**
 * Validate a phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone format
 */
function isValidPhone(phone) {
  if (!phone || typeof phone !== "string") {
    return false;
  }

  // Basic check - remove non-digits and check length
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

/**
 * Validate phone with format specification
 * @param {string} phone - Phone number to validate
 * @param {string} format - 'us', 'international', or 'any'
 * @returns {Object} {isValid: boolean, error?: string, formatted?: string}
 */
// function validatePhone(phone, format = 'any') {

/**
 * Format phone number to standard format
 * @param {string} phone - Phone number to format
 * @param {string} format - Output format: 'us', 'international', 'e164'
 * @returns {string} Formatted phone number
 */
// function formatPhone(phone, format = 'us') {

/**
 * Extract country code from international number
 * @param {string} phone - International phone number
 * @returns {string|null} Country code or null
 */
// function getCountryCode(phone) {

/**
 * Normalize phone number to digits only
 * @param {string} phone - Phone number
 * @returns {string} Digits only
 */
// function normalizePhone(phone) {

/**
 * Check if two phone numbers are the same (ignoring formatting)
 * @param {string} phone1 - First phone number
 * @param {string} phone2 - Second phone number
 * @returns {boolean} True if same number
 */
// function phonesMatch(phone1, phone2) {

module.exports = {
  isValidPhone,
  // US_PHONE_REGEX,
  // INTL_PHONE_REGEX,
  // validatePhone,
  // formatPhone,
  // getCountryCode,
  // normalizePhone,
  // phonesMatch,
};
