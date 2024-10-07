import { LoginRepository } from '../domain/loginRepository';
import { Login } from '../domain/login';
import apiClient
 from './apiClient';
import { toast } from 'react-toastify';

export class LoginRepositoryImpl implements LoginRepository {
    async authenticate(login: Login): Promise<{ success: boolean; token?: string; user?: any }> {
      toast.info('Conectado al repositorio implementacion ');
      try {
        const response = await apiClient.post<{ success: boolean; token: string; user: any }>('/login', {
          username: login.username,
          password: login.password,
        });
  
        return {
          success: response.success,
          token: response.token,
          user: response.user,
        };
      } catch (error) {
        console.error('Authentication failed:', error);
        return { success: false };
      }
    }
  }