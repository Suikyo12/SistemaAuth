//Archivo coonfiguración que permite comunicar frontend con backend.
import axios from 'axios'; //librearía para realizar llamados
//import Credentials from 'next-auth/providers/credentials';
//import { config } from 'next/dist/build/templates/pages';

const API_URL = 'http://localhost:5000/api'; //ruta al backend Flask.

const api = axios.create({  
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

export const registerUser = (userdata) => api.post('/auth/register', userdata); //funcion que recibe datos de formulario, y mediante peticion POST envía userDAta.

export const loginUser = (credentials) => api.post('/auth/login', credentials); //funcion para login, mada datos al backen y espera token

export const getUserProfile = () => api.get('/user/profile'); //funcion para obtener el perfil mediante GET a user/profile

