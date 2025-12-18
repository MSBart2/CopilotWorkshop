/**
 * Application-wide constants
 * Centralized configuration for the application
 */

// API Configuration
const API_CONFIG = {
  baseUrl: process.env.API_BASE_URL || "https://api.example.com",
  timeout: 30000, // 30 seconds
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
};

// Customer Tier Names
const TIER_NAMES = {
  BRONZE: "bronze",
  SILVER: "silver",
  GOLD: "gold",
  PLATINUM: "platinum",
};

// HTTP Status Codes
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

// Token Configuration
const TOKEN_CONFIG = {
  expiresIn: "24h",
  refreshExpiresIn: "7d",
  algorithm: "HS256",
};

// Rate Limiting
const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100,
};

module.exports = {
  API_CONFIG,
  TIER_NAMES,
  HTTP_STATUS,
  TOKEN_CONFIG,
  RATE_LIMIT_CONFIG,
};
