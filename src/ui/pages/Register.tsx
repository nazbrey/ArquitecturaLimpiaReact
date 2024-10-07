import React from "react";
import '../../index.css'
import RegisForm from "../orgam/RegisForm";
//creamos en componente funcional 

const Login:React.FC =() =>{
    return(
        <div className="flex justify-center items-center h-screen ">
        <div className=" shadow-2xl shadow-gray-500/50 p-8 bg-white rounded w-1/3">
            <RegisForm />
        </div>
    </div>
    );
};
export default Login