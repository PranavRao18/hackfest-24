import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Change if your backend runs on a different URL
});

export const login = (credentials) => api.post('/login', credentials);
export const register = (credentials) => api.post('/register', credentials);
export const getTransactions = () => api.get('/transactions');
export const addTransaction = (transaction) => api.post('/transactions', transaction);
