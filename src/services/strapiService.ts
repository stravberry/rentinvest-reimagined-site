
import { STRAPI_URL, API_ENDPOINTS, DEFAULT_HEADERS } from '@/config/strapiConfig';

// Types for our content
export interface StrapiHero {
  title: string;
  subtitle: string;
  backgroundImage: {
    data: {
      attributes: {
        url: string;
      }
    }
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
    data: {
      attributes: {
        url: string;
      }
    }
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
    data: {
      attributes: {
        url: string;
      }
    }
  };
}

// Helper function to fetch data from Strapi
const fetchFromStrapi = async <T>(endpoint: string): Promise<T> => {
  try {
    const url = `${STRAPI_URL}${endpoint}`;
    console.log(`Fetching data from: ${url}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: DEFAULT_HEADERS,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Data received from ${endpoint}:`, data);
    return data.data?.attributes || data.data || data;
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
};

// API functions to fetch data
export const fetchHero = async (): Promise<StrapiHero> => {
  return fetchFromStrapi<StrapiHero>(API_ENDPOINTS.HERO);
};

export const fetchClientPaths = async (): Promise<StrapiClientPath[]> => {
  return fetchFromStrapi<StrapiClientPath[]>(API_ENDPOINTS.CLIENT_PATHS);
};

export const fetchStats = async (): Promise<StrapiStat[]> => {
  return fetchFromStrapi<StrapiStat[]>(API_ENDPOINTS.STATS);
};

export const fetchTestimonials = async (): Promise<StrapiTestimonial[]> => {
  return fetchFromStrapi<StrapiTestimonial[]>(API_ENDPOINTS.TESTIMONIALS);
};

// Helper to get full URL for Strapi images
export const getStrapiMediaUrl = (url: string | undefined): string => {
  if (!url) return '';
  
  // If the URL is absolute (includes http/https), return it directly
  if (url.startsWith('http')) {
    return url;
  }
  
  // Otherwise, prepend the Strapi URL
  return `${STRAPI_URL}${url}`;
};
