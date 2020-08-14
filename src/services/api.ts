import axios from 'axios';

const api = axios.create({
  baseURL: 'api.openweathermap.org/data/2.5',
  params: {
    appid: '56cd1e8db1435f9c17de8b0349caaee9',
  },
});

export default api;
