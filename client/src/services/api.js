import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Change if your backend runs on a different URL
});

export const login = (credentials) => api.post('/login', credentials);
export const register = (credentials) => api.post('/register', credentials);
export const getTransactions = () => api.get('/transactions');
export const addTransaction = (transaction) => api.post('/transactions', transaction);

// Static data for new features
export const getPosts = () => Promise.resolve([
  { content: 'I started composting at home and it’s been great!' },
  { content: 'Reduced my plastic use by bringing my own bags to the store.' },
]);

export const getChallenges = () => Promise.resolve([
  { type: 'reduce-plastic', description: 'Use zero single-use plastics for a week' },
  { type: 'bike-to-work', description: 'Bike to work every day for a month' },
]);

export const getArticles = () => Promise.resolve([
  { title: 'The Impact of Fast Fashion', link: '/articles/fast-fashion' },
  { title: 'How to Reduce Your Carbon Footprint', link: '/articles/reduce-carbon-footprint' },
]);

export const getIncentives = () => Promise.resolve([
  { brand: 'EcoStore', discount: '10% off for 100 green credits' },
  { brand: 'GreenWear', discount: '15% off for 200 green credits' },
]);
