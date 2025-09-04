import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Contact API
export const contactAPI = {
  submitContact: (data) => api.post('/contact', data),
  getContacts: (params) => api.get('/contact', { params }),
  getContact: (id) => api.get(`/contact/${id}`),
  updateContact: (id, data) => api.put(`/contact/${id}`, data),
};

// Newsletter API
export const newsletterAPI = {
  subscribe: (data) => api.post('/newsletter', data),
  unsubscribe: (data) => api.delete('/newsletter', { data }),
  getSubscribers: (params) => api.get('/newsletter', { params }),
  getStats: () => api.get('/newsletter/stats'),
};

// Portfolio API
export const portfolioAPI = {
  getCompanies: (params) => api.get('/portfolio', { params }),
  getCompany: (id) => api.get(`/portfolio/${id}`),
  getStats: () => api.get('/portfolio/stats/overview'),
  createCompany: (data) => api.post('/portfolio', data),
  updateCompany: (id, data) => api.put(`/portfolio/${id}`, data),
  deleteCompany: (id) => api.delete(`/portfolio/${id}`),
};

export default api;
