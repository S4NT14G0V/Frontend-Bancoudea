import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getAllClients = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/customers`);
      return response.data;
    } catch (error) {
      console.error('Error en getAllClients:', error);
      throw error;
    }
};

export const getClientById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/api/customers/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error en getClientById:', error);
      throw error;
    }
};

export const createClient = async (customer) => {
    try {
      const response = await axios.post(`${API_URL}/api/customers`, customer);
      return response.data;
    } catch (error) {
      console.error('Error en createClient:', error);
      throw error;
    }
};

export const updateClient = async (customer) => {
    try {
        const response = await axios.put(`${API_URL}/api/customers`, customer);
        return response.data;
        }
    catch (error) {
        console.error('Error en updateClient:', error);
        throw error;
    }
}

export const deleteClient = async (customer) => {
    try {
        const response = await axios.delete(`${API_URL}/api/customers`, customer);
        return response.data;
    } catch (error) {
        console.error('Error en deleteClient:', error);
        throw error;
    }
};