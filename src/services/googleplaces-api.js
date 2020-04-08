import axios from 'axios';
import { responseMiddleware, errorMiddleware } from './middlewares';

const placesApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/nearbysearch/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

placesApi.defaults.timeout = 3000;

placesApi.interceptors.response.use(responseMiddleware, errorMiddleware);

export default placesApi;
