import axios from 'axios';

const api = axios.create({
  baseURL: 'api.openweathermap.org/data/2.5',
  params: {
    appid: process.env.OPEN_WEATHER_API_KEY,
    units: 'metric',
    lang: 'pt',
  },
});

export default api;
