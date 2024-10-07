import { toast } from "react-toastify";


const API_BASE_URL = 'https://example.com/api'; // Reemplaza con la URL real de tu API

const apiClient = {
  async post<T>(endpoint: string, data: any): Promise<T> {

    toast.info('Conectado al apiclient metodo post');

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) { 
      
      const errorMessage = await response.text(); // Captura el mensaje de error
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    
    return response.json();
  },
  
  // OBTENER 
  async get<T>(endpoint: string, token?: string): Promise<T> {
    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, { headers });

    if (!response.ok) {
      const errorMessage = await response.text(); // Captura el mensaje de error
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    return response.json();
  }
};

export default apiClient;