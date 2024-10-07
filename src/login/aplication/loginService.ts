
import { toast } from 'react-toastify';
import { Login } from '../domain/login';
import { LoginRepository } from '../domain/loginRepository';

export class LoginService {
    constructor(private loginRepository: LoginRepository) {}
    
    async authenticate(username: string, password: string): Promise<{ success: boolean; token?: string; user?: any }> {
      
      toast.info('Conectado al servicio');

      const login = new Login(username, password);
      
      return this.loginRepository.authenticate(login);
    }
}