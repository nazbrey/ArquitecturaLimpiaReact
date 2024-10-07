import { Login } from './login';

export interface LoginRepository {
    authenticate(login: Login): Promise<{ success: boolean; token?: string; user?: any }>;
}