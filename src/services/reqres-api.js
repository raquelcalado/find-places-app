import axios from 'axios';
import { responseMiddleware, errorMiddleware } from './middlewares';

const reqresApi = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

reqresApi.defaults.timeout = 3000;

reqresApi.interceptors.response.use(responseMiddleware, errorMiddleware);

export default reqresApi;
