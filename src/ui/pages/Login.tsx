import React from "react";
import LoginForm from "../orgam/loginForm";
import '../../index.css'
//creamos en componente funcional 

const Login:React.FC =() =>{
    return(
        <div className="flex justify-center items-center h-screen">
        <div className=" shadow-2xl shadow-gray-500/50 p-8 bg-white rounded sm:mx-6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 min-h-48">
            <LoginForm />
        </div>
    </div>
    );
};
export default Login