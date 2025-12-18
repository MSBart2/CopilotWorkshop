/**
 * Tests for Finance utilities
 * Exercise: Use Copilot to add assertions for compound interest calculations
 */

const { roundCurrency } = require("../utils/finance");

describe("Finance utilities", () => {
  describe("roundCurrency", () => {
    it("should round to 2 decimal places by default", () => {
      expect(roundCurrency(10.456)).toBe(10.46);
      expect(roundCurrency(10.454)).toBe(10.45);
    });

    it("should round to specified decimal places", () => {
      expect(roundCurrency(10.4567, 3)).toBe(10.457);
      expect(roundCurrency(10.4567, 1)).toBe(10.5);
    });

    it("should handle whole numbers", () => {
      expect(roundCurrency(10)).toBe(10);
      expect(roundCurrency(10, 2)).toBe(10);
    });
  });

  // TODO: Add tests for calculateCompoundInterest once implemented
  // describe('calculateCompoundInterest', () => {
  //   it('should calculate compound interest correctly', () => {
  //     // Principal: $1000, Rate: 5%, Time: 10 years, Compound: annually (n=1)
  //     // Formula: A = P(1 + r/n)^(nt) = 1000(1 + 0.05/1)^(1*10) = 1628.89
  //     // TODO: Implement test
  //   });

  //   it('should calculate quarterly compounding', () => {
  //     // Principal: $1000, Rate: 5%, Time: 10 years, Compound: quarterly (n=4)
  //     // TODO: Implement test
  //   });

  //   it('should calculate monthly compounding', () => {
  //     // Principal: $1000, Rate: 5%, Time: 10 years, Compound: monthly (n=12)
  //     // TODO: Implement test
  //   });

  //   it('should handle zero interest rate', () => {
  //     // TODO: Implement test
  //   });

  //   it('should handle zero time period', () => {
  //     // TODO: Implement test
  //   });
  // });

  // TODO: Add tests for calculateLoanAmortization once implemented
  // describe('calculateLoanAmortization', () => {
  //   it('should calculate monthly payment correctly', () => {
  //     // Loan: $200,000, Rate: 6%, Term: 30 years
  //     // Expected monthly payment: ~$1199.10
  //     // TODO: Implement test
  //   });

  //   it('should calculate 15-year mortgage payment', () => {
  //     // TODO: Implement test
  //   });

  //   it('should handle zero interest rate', () => {
  //     // TODO: Implement test
  //   });
  // });

  // TODO: Add tests for calculateSimpleInterest once implemented
  // describe('calculateSimpleInterest', () => {
  //   it('should calculate simple interest correctly', () => {
  //     // TODO: Implement test
  //   });
  // });

  // TODO: Add tests for calculateFutureValue once implemented
  // describe('calculateFutureValue', () => {
  //   it('should calculate future value of regular investments', () => {
  //     // TODO: Implement test
  //   });
  // });

  // Edge cases
  // describe('edge cases', () => {
  //   it('should handle very small amounts', () => {
  //     // TODO: Implement test
  //   });

  //   it('should handle very large amounts', () => {
  //     // TODO: Implement test
  //   });

  //   it('should handle negative values appropriately', () => {
  //     // TODO: Implement test
  //   });
  // });
});
