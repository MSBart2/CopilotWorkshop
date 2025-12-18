/**
 * Email Sender
 *
 * Handles email notifications for TechMart.
 *
 * BAD PRACTICE ALERT: This module throws STRING errors instead of
 * Error objects. This is considered an anti-pattern in JavaScript
 * because you lose stack traces and can't use instanceof checks.
 *
 * Example of what NOT to do:
 *   throw 'Something went wrong'  // Bad!
 *
 * Should be:
 *   throw new Error('Something went wrong')  // Good!
 */

// Simulated sent emails (for testing/demo)
const sentEmails = [];

// Email templates
const templates = {
  orderConfirmation: (data) => ({
    subject: `Order Confirmation #${data.orderId}`,
    body: `
      Hi ${data.customerName},

      Your order #${data.orderId} has been confirmed!

      Total: $${(data.total / 100).toFixed(2)}

      Thank you for shopping with TechMart!
    `.trim(),
  }),

  orderShipped: (data) => ({
    subject: `Your order #${data.orderId} has shipped!`,
    body: `
      Hi ${data.customerName},

      Great news! Your order is on its way.

      Tracking: ${data.trackingNumber || "Coming soon"}

      Thanks,
      TechMart Team
    `.trim(),
  }),

  paymentReceipt: (data) => ({
    subject: `Payment Receipt - $${(data.amount / 100).toFixed(2)}`,
    body: `
      Payment received for order #${data.orderId}
      Amount: $${(data.amount / 100).toFixed(2)}
      Transaction ID: ${data.transactionId}
    `.trim(),
  }),

  paymentFailed: (data) => ({
    subject: "Payment Failed - Action Required",
    body: `
      We couldn't process your payment for order #${data.orderId}.

      Reason: ${data.reason || "Unknown"}

      Please update your payment method.
    `.trim(),
  }),
};

/**
 * Validate email address
 */
function validateEmail(email) {
  if (!email) {
    // BAD: Throwing a string instead of Error!
    throw "Email address is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    // BAD: Another string throw!
    throw "Invalid email format: " + email;
  }

  return true;
}

/**
 * Send an email
 * @param {string} to - Recipient email
 * @param {string} template - Template name
 * @param {Object} data - Template data
 */
async function sendEmail(to, template, data) {
  // Validate
  validateEmail(to);

  if (!templates[template]) {
    // BAD: String throw
    throw "Unknown email template: " + template;
  }

  // Generate email content
  const content = templates[template](data);

  // Simulate sending (would call email provider API in production)
  const email = {
    id: `email-${Date.now()}`,
    to,
    from: "noreply@techmart.com",
    subject: content.subject,
    body: content.body,
    template,
    sentAt: new Date(),
    status: "sent",
  };

  // Simulate occasional failures
  if (Math.random() < 0.01) {
    email.status = "failed";
    throw "Email provider temporarily unavailable";
  }

  sentEmails.push(email);
  console.log(`[EMAIL] Sent "${content.subject}" to ${to}`);

  return email;
}

/**
 * Send raw email (no template)
 */
async function sendRawEmail(to, subject, body) {
  validateEmail(to);

  if (!subject) throw "Subject is required";
  if (!body) throw "Body is required";

  const email = {
    id: `email-${Date.now()}`,
    to,
    from: "noreply@techmart.com",
    subject,
    body,
    template: null,
    sentAt: new Date(),
    status: "sent",
  };

  sentEmails.push(email);
  console.log(`[EMAIL] Sent "${subject}" to ${to}`);

  return email;
}

/**
 * Get sent emails (for testing)
 */
function getSentEmails() {
  return [...sentEmails];
}

/**
 * Clear sent emails (for testing)
 */
function clearSentEmails() {
  sentEmails.length = 0;
}

module.exports = {
  sendEmail,
  sendRawEmail,
  getSentEmails,
  clearSentEmails,
  templates: Object.keys(templates),
};
