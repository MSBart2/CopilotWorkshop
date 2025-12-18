const { HTTP_STATUS, RATE_LIMIT_CONFIG } = require("../config/constants");

/**
 * Rate limiter middleware
 * Limits requests per IP address within a time window
 */

/**
 * In-memory request store
 * In production, use Redis or similar
 */
const requestStore = new Map();

/**
 * Create rate limiter middleware
 * @param {Object} options - Rate limiter options
 * @param {number} options.windowMs - Time window in milliseconds
 * @param {number} options.maxRequests - Maximum requests per window
 * @returns {Function} Express middleware function
 */
function createRateLimiter(options = {}) {
  const windowMs = options.windowMs || RATE_LIMIT_CONFIG.windowMs;
  const maxRequests = options.maxRequests || RATE_LIMIT_CONFIG.maxRequests;

  return (req, res, next) => {
    const clientIp = req.ip || req.connection.remoteAddress;
    const now = Date.now();

    // Basic implementation
    if (!requestStore.has(clientIp)) {
      requestStore.set(clientIp, { count: 1, windowStart: now });
      return next();
    }

    const clientData = requestStore.get(clientIp);

    // Check if window has expired
    if (now - clientData.windowStart > windowMs) {
      requestStore.set(clientIp, { count: 1, windowStart: now });
      return next();
    }

    // Increment count
    clientData.count++;

    if (clientData.count > maxRequests) {
      const retryAfter = Math.ceil(
        (clientData.windowStart + windowMs - now) / 1000
      );
      res.set("Retry-After", retryAfter);
      return res.status(HTTP_STATUS.TOO_MANY_REQUESTS || 429).json({
        error: "Too many requests",
        retryAfter,
      });
    }

    next();
  };
}

// TODO: Implement request counting, window management, Redis integration stub
// Exercise: Use Copilot to implement these functions

/**
 * Clean up expired entries from the request store
 * Should be called periodically to prevent memory leaks
 * @param {number} windowMs - Time window in milliseconds
 */
// function cleanupExpiredEntries(windowMs) {

/**
 * Redis-compatible rate limiter store interface
 * Stub for Redis integration exercise
 */
// class RedisRateLimitStore {
//   constructor(redisClient) {
//     this.client = redisClient;
//   }
//
//   /**
//    * Increment request count for a client
//    * @param {string} key - Client identifier (usually IP)
//    * @param {number} windowMs - Window duration
//    * @returns {Promise<{count: number, ttl: number}>}
//    */
//   async increment(key, windowMs) {
//
//   /**
//    * Get current count for a client
//    * @param {string} key - Client identifier
//    * @returns {Promise<number>}
//    */
//   async getCount(key) {
// }

/**
 * Create rate limiter with Redis store
 * @param {Object} redisClient - Redis client instance
 * @param {Object} options - Rate limiter options
 * @returns {Function} Express middleware function
 */
// function createRedisRateLimiter(redisClient, options = {}) {

module.exports = {
  createRateLimiter,
  requestStore, // Exported for testing
  // cleanupExpiredEntries,
  // RedisRateLimitStore,
  // createRedisRateLimiter,
};
