import React from "react";
import '../../index.css';
import RegisForm from "../orgam/RegisForm";
import ThemeToggle from "../atoms/themeToggle";
// Creamos el componente funcional
const Login: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full flex justify-end p-12">
                <ThemeToggle />
            </div>
            <div className="shadow-2xl shadow-gray-500/50 p-8 bg-white rounded sm:mx-6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-5/12 2xl:w-6/12 min-h-48">
                <RegisForm />
            </div>
        </div>
    );
};

export default Login;
