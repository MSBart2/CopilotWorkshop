/**
 * HTTP Client for TechMart E-Commerce Platform
 *
 * Simple fetch wrapper for inter-service HTTP communication.
 * Provides consistent error handling and logging across services.
 */

/**
 * Service base URLs
 * In production, these would come from environment variables or service discovery
 */
const SERVICE_URLS = {
  user: process.env.USER_SERVICE_URL || "http://localhost:3001",
  order: process.env.ORDER_SERVICE_URL || "http://localhost:3002",
  inventory: process.env.INVENTORY_SERVICE_URL || "http://localhost:3003",
  payment: process.env.PAYMENT_SERVICE_URL || "http://localhost:3004",
  notification: process.env.NOTIFICATION_SERVICE_URL || "http://localhost:3005",
};

/**
 * Default request timeout in milliseconds
 */
const DEFAULT_TIMEOUT = 5000;

/**
 * Make an HTTP request to another service
 * @param {string} service - Service name (user, order, inventory, payment, notification)
 * @param {string} path - API path (e.g., '/users/123')
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} Response data
 */
async function request(service, path, options = {}) {
  const baseUrl = SERVICE_URLS[service];
  if (!baseUrl) {
    throw new Error(`Unknown service: ${service}`);
  }

  const url = `${baseUrl}${path}`;
  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    options.timeout || DEFAULT_TIMEOUT
  );

  const fetchOptions = {
    ...options,
    signal: controller.signal,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  // Convert body to JSON string if it's an object
  if (options.body && typeof options.body === "object") {
    fetchOptions.body = JSON.stringify(options.body);
  }

  try {
    console.log(`[HTTP] ${options.method || "GET"} ${url}`);

    const response = await fetch(url, fetchOptions);
    clearTimeout(timeout);

    // Parse response
    const contentType = response.headers.get("content-type");
    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    // Handle non-2xx responses
    if (!response.ok) {
      const error = new Error(
        data.message || data || `HTTP ${response.status}`
      );
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    clearTimeout(timeout);

    if (error.name === "AbortError") {
      const timeoutError = new Error(`Request to ${service} timed out`);
      timeoutError.code = "TIMEOUT";
      throw timeoutError;
    }

    // Log the error for debugging
    console.error(`[HTTP] Error calling ${service}:`, error.message);
    throw error;
  }
}

/**
 * GET request helper
 * @param {string} service - Service name
 * @param {string} path - API path
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object>}
 */
async function get(service, path, options = {}) {
  return request(service, path, { ...options, method: "GET" });
}

/**
 * POST request helper
 * @param {string} service - Service name
 * @param {string} path - API path
 * @param {Object} body - Request body
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object>}
 */
async function post(service, path, body, options = {}) {
  return request(service, path, { ...options, method: "POST", body });
}

/**
 * PUT request helper
 * @param {string} service - Service name
 * @param {string} path - API path
 * @param {Object} body - Request body
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object>}
 */
async function put(service, path, body, options = {}) {
  return request(service, path, { ...options, method: "PUT", body });
}

/**
 * DELETE request helper
 * @param {string} service - Service name
 * @param {string} path - API path
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object>}
 */
async function del(service, path, options = {}) {
  return request(service, path, { ...options, method: "DELETE" });
}

module.exports = {
  SERVICE_URLS,
  request,
  get,
  post,
  put,
  del,
};
