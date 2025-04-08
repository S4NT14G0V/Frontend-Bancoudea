import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getAllTransactions = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/transactions`);
      return response.data;
    } catch (error) {
      console.error('Error en getAllTransactions:', error);
      throw error;
    }
};

export const getTransactionsByAccountNumber = async (accountNumber) => {
    try {
      const response = await axios.get(`${API_URL}/api/transactions/${accountNumber}`);
      return response.data;
    } catch (error) {
      console.error('Error en getTransactionsByAccountNumber:', error);
      throw error;
    }
};

export const createTransaction = async (transaction) => {
    try {
      const response = await axios.post(`${API_URL}/api/transactions`, transaction);
      return response.data;
    } catch (error) {
      console.error('Error en createTransaction:', error);
      throw error;
    }
};