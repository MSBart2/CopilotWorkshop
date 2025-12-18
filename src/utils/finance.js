/**
 * Financial calculation utilities
 * Originally converted from Python (first-test.py)
 */

// TODO: Implement calculateCompoundInterest and calculateLoanAmortization
// Exercise: Use Copilot to implement these financial functions
// Type the function signature and let Copilot suggest the implementation

/**
 * Calculate compound interest
 * Formula: A = P(1 + r/n)^(nt)
 * @param {number} principal - Initial investment amount
 * @param {number} rate - Annual interest rate (as decimal, e.g., 0.05 for 5%)
 * @param {number} time - Time period in years
 * @param {number} n - Number of times interest compounds per year
 * @returns {number} Final amount after compound interest
 */
// function calculateCompoundInterest(principal, rate, time, n) {

/**
 * Calculate monthly loan payment (amortization)
 * Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
 * @param {number} principal - Loan amount
 * @param {number} annualRate - Annual interest rate (as decimal)
 * @param {number} years - Loan term in years
 * @returns {number} Monthly payment amount
 */
// function calculateLoanAmortization(principal, annualRate, years) {

/**
 * Calculate simple interest
 * Formula: I = P * r * t
 * @param {number} principal - Initial amount
 * @param {number} rate - Interest rate (as decimal)
 * @param {number} time - Time period in years
 * @returns {number} Interest earned
 */
// function calculateSimpleInterest(principal, rate, time) {

/**
 * Calculate future value of regular investments
 * Formula: FV = PMT * [((1 + r)^n - 1) / r]
 * @param {number} payment - Regular payment amount
 * @param {number} rate - Interest rate per period (as decimal)
 * @param {number} periods - Number of periods
 * @returns {number} Future value
 */
// function calculateFutureValue(payment, rate, periods) {

/**
 * Generate amortization schedule
 * @param {number} principal - Loan amount
 * @param {number} annualRate - Annual interest rate (as decimal)
 * @param {number} years - Loan term in years
 * @returns {Array} Array of {month, payment, principal, interest, balance}
 */
// function generateAmortizationSchedule(principal, annualRate, years) {

/**
 * Calculate present value
 * Formula: PV = FV / (1 + r)^n
 * @param {number} futureValue - Future amount
 * @param {number} rate - Discount rate (as decimal)
 * @param {number} periods - Number of periods
 * @returns {number} Present value
 */
// function calculatePresentValue(futureValue, rate, periods) {

/**
 * Round to specified decimal places (financial rounding)
 * @param {number} value - Value to round
 * @param {number} decimals - Decimal places (default: 2)
 * @returns {number} Rounded value
 */
function roundCurrency(value, decimals = 2) {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

module.exports = {
  roundCurrency,
  // calculateCompoundInterest,
  // calculateLoanAmortization,
  // calculateSimpleInterest,
  // calculateFutureValue,
  // generateAmortizationSchedule,
  // calculatePresentValue,
};
