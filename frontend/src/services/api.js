import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getImoveis = () => api.get('/api');
export const getImovel = (id) => api.get(`/api/${id}`);
export const createImovel = (data) => api.post('/api', data);
export const updateImovel = (id, data) => api.put(`/api/${id}`, data);
export const deleteImovel = (id) => api.delete(`/api/${id}`);

export default {
  getImoveis,
  getImovel,
  createImovel,
  updateImovel,
  deleteImovel,
};