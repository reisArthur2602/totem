import axios from 'axios';
import { EXTERNAL_API_URL } from '../contants';

export const axiosConnection = axios.create({
    baseURL: EXTERNAL_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
