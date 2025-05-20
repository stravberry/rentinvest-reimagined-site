
/**
 * Strapi CMS Configuration
 * 
 * This file contains configuration details for connecting to your Strapi CMS.
 * Update these values according to your Strapi deployment.
 */

// The base URL for your Strapi backend
export const STRAPI_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

// API endpoints for different content types
export const API_ENDPOINTS = {
  HERO: '/api/hero',
  CLIENT_PATHS: '/api/client-paths',
  STATS: '/api/stats',
  TESTIMONIALS: '/api/testimonials',
  ABOUT: '/api/about',
  CONTACT: '/api/contact',
  LOCATION: '/api/location',
};

// Default request headers
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

// Helper function to construct full API URL
export const getApiUrl = (endpoint: string): string => `${STRAPI_URL}${endpoint}`;

// Configuration for Strapi media uploads
export const MEDIA_CONFIG = {
  UPLOAD_ENDPOINT: '/api/upload',
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB max file size
  ALLOWED_FORMATS: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
};
