import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomfox.ca/floof',
});

export default api;
