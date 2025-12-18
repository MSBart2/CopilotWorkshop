/**
 * SMS Sender
 *
 * Handles SMS notifications for TechMart.
 *
 * Same issue as email-sender: throws STRING errors!
 */

const sentMessages = [];

/**
 * Validate phone number
 */
function validatePhone(phone) {
  if (!phone) {
    throw "Phone number is required";
  }

  // Very basic validation
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length < 10) {
    throw "Phone number too short: " + phone;
  }

  return cleaned;
}

/**
 * Send SMS
 */
async function sendSMS(to, message) {
  const phone = validatePhone(to);

  if (!message) throw "Message is required";
  if (message.length > 160) throw "Message exceeds 160 character limit";

  const sms = {
    id: `sms-${Date.now()}`,
    to: phone,
    message,
    sentAt: new Date(),
    status: "sent",
  };

  sentMessages.push(sms);
  console.log(`[SMS] Sent to ${phone}: "${message.substring(0, 30)}..."`);

  return sms;
}

/**
 * Send order update SMS
 */
async function sendOrderUpdate(phone, orderId, status) {
  const messages = {
    confirmed: `TechMart: Order #${orderId} confirmed! We're preparing your items.`,
    shipped: `TechMart: Order #${orderId} shipped! Track at techmart.com/track`,
    delivered: `TechMart: Order #${orderId} delivered! Thanks for shopping with us!`,
  };

  const message = messages[status];
  if (!message) {
    throw "Unknown order status for SMS: " + status;
  }

  return sendSMS(phone, message);
}

function getSentMessages() {
  return [...sentMessages];
}

function clearSentMessages() {
  sentMessages.length = 0;
}

module.exports = {
  sendSMS,
  sendOrderUpdate,
  getSentMessages,
  clearSentMessages,
};
