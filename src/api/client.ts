import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com'
});

export { apiClient };
