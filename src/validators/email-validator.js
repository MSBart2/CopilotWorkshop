/**
 * Email validation utilities
 */

// TODO: Implement email validation regex pattern
// Exercise: Use Copilot to implement the regex pattern

/**
 * Basic email regex pattern
 * Should match: user@domain.com, user.name@domain.co.uk
 * Should not match: user@, @domain.com, user@domain
 */
// const EMAIL_REGEX =

/**
 * Validate an email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
  if (!email || typeof email !== "string") {
    return false;
  }

  // Basic check - exercises will implement proper regex
  return email.includes("@") && email.includes(".");
}

/**
 * Validate email with detailed result
 * @param {string} email - Email to validate
 * @returns {Object} {isValid: boolean, error?: string}
 */
// function validateEmail(email) {

/**
 * Normalize email address
 * - Lowercase the domain
 * - Trim whitespace
 * - Handle Gmail dot trick (optional)
 * @param {string} email - Email to normalize
 * @returns {string} Normalized email
 */
// function normalizeEmail(email) {

/**
 * Extract domain from email
 * @param {string} email - Valid email address
 * @returns {string|null} Domain or null if invalid
 */
// function getEmailDomain(email) {

/**
 * Check if email domain is in allowed list
 * @param {string} email - Email to check
 * @param {string[]} allowedDomains - List of allowed domains
 * @returns {boolean} True if domain is allowed
 */
// function isAllowedDomain(email, allowedDomains) {

module.exports = {
  isValidEmail,
  // EMAIL_REGEX,
  // validateEmail,
  // normalizeEmail,
  // getEmailDomain,
  // isAllowedDomain,
};
