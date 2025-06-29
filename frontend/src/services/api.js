import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',});

export default {
    getImoveis: () => api.get(`/`),
    getImovel: () => api.get(`/${id}`),
    createImovel: () => api.post(`/`, data),
    updateImovel: () => api.put(`/${id}`, data),
    deleteImovel: () => api.delete(`/${id}`),
}