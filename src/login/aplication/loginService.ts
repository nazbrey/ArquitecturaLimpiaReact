
import { toast } from 'react-toastify';
import { Login } from '../domain/login';
import { LoginRepository } from '../domain/loginRepository';

export class LoginService {
    constructor(private loginRepository: LoginRepository) {}
    
    async authenticate(mail: string, password: string): Promise<{ success: boolean; token?: string; user?: any }> {
      
      toast.info('Conectado al servicio');

      const login = new Login(mail, password);
      
      return this.loginRepository.authenticate(login);
    }
}