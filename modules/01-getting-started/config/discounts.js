/**
 * Discount configuration for customer tiers
 * Percentages are expressed as decimals (0.10 = 10%)
 */
const TIER_DISCOUNTS = {
  bronze: 0.05,
  silver: 0.1,
  gold: 0.15,
  platinum: 0.25,
};

const LOYALTY_BONUS = {
  yearsRequired: 5,
  additionalDiscount: 0.05,
};

module.exports = { TIER_DISCOUNTS, LOYALTY_BONUS };
