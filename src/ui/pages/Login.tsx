import React from "react";
import LoginForm from "../orgam/loginForm";
import '../../index.css'
import ThemeToggle from "../atoms/themeToggle";
//creamos en componente funcional 

const Login:React.FC =() =>{
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full flex justify-end p-12">
                <ThemeToggle />
            </div>
        <div className=" shadow-2xl shadow-gray-500/50 p-8 bg-white rounded sm:mx-6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 min-h-48">
            <LoginForm />
        </div>
    </div>
    );
};
export default Login