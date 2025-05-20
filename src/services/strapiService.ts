import { Strapi } from '@strapi/strapi-sdk-js';

// Create a Strapi client instance
// You'll need to update this URL to point to your Strapi backend once it's deployed
const strapiUrl = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';
const strapi = new Strapi({
  url: strapiUrl,
  store: {
    key: 'strapi_jwt',
    useLocalStorage: true,
    cookieOptions: { path: '/' }
  },
});

// Types for our content
export interface StrapiHero {
  title: string;
  subtitle: string;
  backgroundImage: {
    url: string;
  };
  features: {
    id: number;
    text: string;
  }[];
}

export interface StrapiClientPath {
  number: string;
  title: string;
  description: string;
  link: string;
  image: {
    url: string;
  };
}

export interface StrapiStat {
  number: string;
  label: string;
}

export interface StrapiTestimonial {
  name: string;
  title: string;
  quote: string;
  image: {
    url: string;
  };
}

// API functions to fetch data
export const fetchHero = async (): Promise<StrapiHero> => {
  try {
    const response = await strapi.find('hero');
    return response.data;
  } catch (error) {
    console.error('Error fetching hero data:', error);
    throw error;
  }
};

export const fetchClientPaths = async (): Promise<StrapiClientPath[]> => {
  try {
    const response = await strapi.find('client-paths');
    return response.data;
  } catch (error) {
    console.error('Error fetching client paths:', error);
    throw error;
  }
};

export const fetchStats = async (): Promise<StrapiStat[]> => {
  try {
    const response = await strapi.find('stats');
    return response.data;
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};

export const fetchTestimonials = async (): Promise<StrapiTestimonial[]> => {
  try {
    const response = await strapi.find('testimonials');
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

// Helper to get full URL for Strapi images
export const getStrapiMediaUrl = (url: string | undefined): string => {
  if (!url) return '';
  
  // If the URL is absolute (includes http/https), return it directly
  if (url.startsWith('http')) {
    return url;
  }
  
  // Otherwise, prepend the Strapi URL
  return `${strapiUrl}${url}`;
};

export default strapi;
