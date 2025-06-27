import axios from 'axios';

const api = axios.create({
  baseURL: 'https://focusflow-backend-xpi5.onrender.com',
});

export default api;

