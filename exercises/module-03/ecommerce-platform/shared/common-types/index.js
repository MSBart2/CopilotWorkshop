/**
 * Common Types for TechMart E-Commerce Platform
 *
 * These DTOs are used across services for consistent data structures.
 * Note: In a real TypeScript project, these would be interfaces/types.
 * For this JavaScript example, we use JSDoc and factory functions.
 */

/**
 * @typedef {Object} UserDTO
 * @property {string} id - Unique user identifier
 * @property {string} email - User email address
 * @property {string} name - User display name
 * @property {string} [phone] - Optional phone number
 * @property {Date} createdAt - Account creation timestamp
 * @property {boolean} isActive - Whether the account is active
 */

/**
 * Creates a UserDTO object
 * @param {Partial<UserDTO>} data
 * @returns {UserDTO}
 */
function createUserDTO(data) {
  return {
    id: data.id || null,
    email: data.email || "",
    name: data.name || "",
    phone: data.phone || null,
    createdAt: data.createdAt || new Date(),
    isActive: data.isActive !== undefined ? data.isActive : true,
  };
}

/**
 * @typedef {Object} ProductDTO
 * @property {string} id - Unique product identifier
 * @property {string} sku - Stock keeping unit
 * @property {string} name - Product name
 * @property {string} description - Product description
 * @property {number} price - Price in cents
 * @property {string} currency - Currency code (e.g., 'USD')
 */

/**
 * Creates a ProductDTO object
 * @param {Partial<ProductDTO>} data
 * @returns {ProductDTO}
 */
function createProductDTO(data) {
  return {
    id: data.id || null,
    sku: data.sku || "",
    name: data.name || "",
    description: data.description || "",
    price: data.price || 0,
    currency: data.currency || "USD",
  };
}

/**
 * @typedef {Object} OrderItemDTO
 * @property {string} productId - Reference to product
 * @property {string} sku - Product SKU
 * @property {number} quantity - Quantity ordered
 * @property {number} unitPrice - Price per unit in cents
 * @property {number} totalPrice - Total price for this line item
 */

/**
 * @typedef {Object} OrderDTO
 * @property {string} id - Unique order identifier
 * @property {string} userId - Reference to user
 * @property {OrderItemDTO[]} items - Order line items
 * @property {number} subtotal - Subtotal in cents
 * @property {number} tax - Tax amount in cents
 * @property {number} total - Total amount in cents
 * @property {string} status - Order status
 * @property {Date} createdAt - Order creation timestamp
 * @property {Date} [updatedAt] - Last update timestamp
 */

/**
 * Creates an OrderDTO object
 * @param {Partial<OrderDTO>} data
 * @returns {OrderDTO}
 */
function createOrderDTO(data) {
  return {
    id: data.id || null,
    userId: data.userId || null,
    items: data.items || [],
    subtotal: data.subtotal || 0,
    tax: data.tax || 0,
    total: data.total || 0,
    status: data.status || "pending",
    createdAt: data.createdAt || new Date(),
    updatedAt: data.updatedAt || null,
  };
}

/**
 * @typedef {Object} PaymentDTO
 * @property {string} id - Unique payment identifier
 * @property {string} orderId - Reference to order
 * @property {string} userId - Reference to user
 * @property {number} amount - Amount in cents
 * @property {string} currency - Currency code
 * @property {string} status - Payment status
 * @property {string} [transactionId] - External payment provider transaction ID
 * @property {Date} createdAt - Payment creation timestamp
 */

/**
 * Creates a PaymentDTO object
 * @param {Partial<PaymentDTO>} data
 * @returns {PaymentDTO}
 */
function createPaymentDTO(data) {
  return {
    id: data.id || null,
    orderId: data.orderId || null,
    userId: data.userId || null,
    amount: data.amount || 0,
    currency: data.currency || "USD",
    status: data.status || "pending",
    transactionId: data.transactionId || null,
    createdAt: data.createdAt || new Date(),
  };
}

/**
 * @typedef {Object} InventoryItemDTO
 * @property {string} productId - Reference to product
 * @property {string} sku - Product SKU
 * @property {number} quantity - Available quantity
 * @property {number} reserved - Reserved quantity (in pending orders)
 * @property {string} warehouse - Warehouse location code
 */

/**
 * Creates an InventoryItemDTO object
 * @param {Partial<InventoryItemDTO>} data
 * @returns {InventoryItemDTO}
 */
function createInventoryItemDTO(data) {
  return {
    productId: data.productId || null,
    sku: data.sku || "",
    quantity: data.quantity || 0,
    reserved: data.reserved || 0,
    warehouse: data.warehouse || "DEFAULT",
  };
}

// Order statuses
const OrderStatus = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
  REFUNDED: "refunded",
};

// Payment statuses
const PaymentStatus = {
  PENDING: "pending",
  PROCESSING: "processing",
  COMPLETED: "completed",
  FAILED: "failed",
  REFUNDED: "refunded",
};

module.exports = {
  createUserDTO,
  createProductDTO,
  createOrderDTO,
  createPaymentDTO,
  createInventoryItemDTO,
  OrderStatus,
  PaymentStatus,
};
