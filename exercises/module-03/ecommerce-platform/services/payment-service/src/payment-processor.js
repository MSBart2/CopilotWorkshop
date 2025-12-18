/**
 * Payment Processor
 *
 * Handles payment processing for TechMart orders.
 * Simulates integration with a payment provider (like Stripe).
 *
 * PATTERN: This service uses object-based error returns { success, error, data }
 * instead of throwing exceptions. This is DIFFERENT from user-service and order-service.
 * (This inconsistency is intentional for the learning exercise)
 */

const { v4: uuidv4 } = require("uuid");
const events = require("../../../shared/events");

// In-memory payment store
const payments = new Map();

// Simulated card validation rules
const BLOCKED_CARDS = ["4000000000000002", "4000000000009995"];
const INSUFFICIENT_FUNDS_CARD = "4000000000009995";

// Seed data
const seedPayments = [
  {
    id: "pay-001",
    orderId: "order-001",
    userId: "user-001",
    amount: 4318,
    currency: "USD",
    status: "completed",
    transactionId: "txn_abc123",
    cardLast4: "4242",
    createdAt: new Date("2024-06-01"),
  },
  {
    id: "pay-002",
    orderId: "order-002",
    userId: "user-002",
    amount: 7340,
    currency: "USD",
    status: "completed",
    transactionId: "txn_def456",
    cardLast4: "1234",
    createdAt: new Date("2024-06-15"),
  },
];

seedPayments.forEach((p) => payments.set(p.id, p));

/**
 * Simulate card validation with external provider
 * Returns object instead of throwing
 */
function validateCard(cardNumber) {
  // Simulate network delay
  if (BLOCKED_CARDS.includes(cardNumber)) {
    return {
      success: false,
      error: {
        code: "CARD_DECLINED",
        message: "This card has been declined",
      },
    };
  }

  // Basic Luhn check simulation
  if (cardNumber.length < 13 || cardNumber.length > 19) {
    return {
      success: false,
      error: {
        code: "INVALID_CARD",
        message: "Invalid card number format",
      },
    };
  }

  return {
    success: true,
    data: {
      last4: cardNumber.slice(-4),
      brand: cardNumber.startsWith("4") ? "visa" : "mastercard",
    },
  };
}

/**
 * Process a payment
 * Returns { success, error?, data? } object
 */
async function processPayment(paymentDetails) {
  const { orderId, userId, amount, currency, cardNumber } = paymentDetails;

  // Validate required fields
  if (!orderId) {
    return {
      success: false,
      error: { code: "MISSING_ORDER_ID", message: "Order ID is required" },
    };
  }

  if (!amount || amount <= 0) {
    return {
      success: false,
      error: {
        code: "INVALID_AMOUNT",
        message: "Amount must be greater than 0",
      },
    };
  }

  if (!cardNumber) {
    return {
      success: false,
      error: { code: "MISSING_CARD", message: "Card number is required" },
    };
  }

  // Validate card
  const cardValidation = validateCard(cardNumber);
  if (!cardValidation.success) {
    return cardValidation;
  }

  // Check for insufficient funds (simulated)
  if (cardNumber === INSUFFICIENT_FUNDS_CARD) {
    return {
      success: false,
      error: { code: "INSUFFICIENT_FUNDS", message: "Insufficient funds" },
    };
  }

  // Create payment record
  const payment = {
    id: `pay-${uuidv4().substring(0, 8)}`,
    orderId,
    userId,
    amount,
    currency: currency || "USD",
    status: "completed",
    transactionId: `txn_${uuidv4().substring(0, 12)}`,
    cardLast4: cardValidation.data.last4,
    cardBrand: cardValidation.data.brand,
    createdAt: new Date(),
  };

  payments.set(payment.id, payment);

  // Emit event
  events.emit(events.Events.PAYMENT_COMPLETED, {
    paymentId: payment.id,
    orderId: payment.orderId,
    amount: payment.amount,
  });

  return {
    success: true,
    data: payment,
  };
}

/**
 * Process a refund
 */
async function processRefund(paymentId, amount, reason) {
  const payment = payments.get(paymentId);

  if (!payment) {
    return {
      success: false,
      error: { code: "PAYMENT_NOT_FOUND", message: "Payment not found" },
    };
  }

  if (payment.status === "refunded") {
    return {
      success: false,
      error: {
        code: "ALREADY_REFUNDED",
        message: "Payment has already been refunded",
      },
    };
  }

  const refundAmount = amount || payment.amount;
  if (refundAmount > payment.amount) {
    return {
      success: false,
      error: {
        code: "INVALID_REFUND_AMOUNT",
        message: "Refund amount exceeds payment amount",
      },
    };
  }

  // Update payment
  payment.status = "refunded";
  payment.refundAmount = refundAmount;
  payment.refundReason = reason || "Customer request";
  payment.refundedAt = new Date();
  payments.set(paymentId, payment);

  // Emit event
  events.emit(events.Events.PAYMENT_REFUNDED, {
    paymentId: payment.id,
    orderId: payment.orderId,
    refundAmount,
  });

  return {
    success: true,
    data: payment,
  };
}

/**
 * Get payment by ID
 */
function getPayment(paymentId) {
  const payment = payments.get(paymentId);
  if (!payment) {
    return {
      success: false,
      error: { code: "NOT_FOUND", message: "Payment not found" },
    };
  }
  return {
    success: true,
    data: payment,
  };
}

/**
 * Get payments for an order
 */
function getPaymentsByOrder(orderId) {
  const orderPayments = Array.from(payments.values()).filter(
    (p) => p.orderId === orderId
  );

  return {
    success: true,
    data: orderPayments,
  };
}

/**
 * Get all payments
 */
function getAllPayments(filters = {}) {
  let result = Array.from(payments.values());

  if (filters.userId) {
    result = result.filter((p) => p.userId === filters.userId);
  }
  if (filters.status) {
    result = result.filter((p) => p.status === filters.status);
  }

  return {
    success: true,
    data: result,
  };
}

// For testing
function reset() {
  payments.clear();
  seedPayments.forEach((p) => payments.set(p.id, { ...p }));
}

module.exports = {
  processPayment,
  processRefund,
  getPayment,
  getPaymentsByOrder,
  getAllPayments,
  reset,
};
