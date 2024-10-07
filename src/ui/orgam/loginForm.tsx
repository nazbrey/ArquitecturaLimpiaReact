import React, { useState } from "react";
import FloatingLabelInput from "../molecules/FloatingInput";
import ButtonPrimary from "../atoms/Buttonprimary";
import Title from "../atoms/Title";
import Logo from "../atoms/Logo";
import { toast } from "react-toastify"; // para notificaciones 
import { LoginService } from "../../login/aplication/loginService"; // importando mi servicio 
import { LoginRepositoryImpl } from "../../login/infraestructure/loginRepositoryimpl"; // importo el repositorio 
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de react-toastify

// instancio el repositorio y el servicio de mi entidad login
const loginRepository = new LoginRepositoryImpl();
const loginService = new LoginService(loginRepository);

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const result = await loginService.authenticate(email, password);
            if (result.success) {
                toast.success('Login successful!');
                // Manejar el éxito del login (por ejemplo, redirigir al usuario)
            } else {
                toast.error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            toast.error('An error occurred during login.');
        }
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col items-center">
            <Logo src="\src\img\logo.jpg" alt="Logo" className="mb-4" />
            <Title text="Welcome" className="mb-6" />
            <FloatingLabelInput label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <FloatingLabelInput label="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <ButtonPrimary type="submit"> Login </ButtonPrimary>
        </form>
    );
};

export default LoginForm;

