import React, { useState, useEffect } from "react";
import '../../index.css'; // importar el css 

// Defino una interfaz que hereda props de input
interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

// Defino un componente funcional con const
const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, type = 'text', value: propValue, onChange, ...props }) => {
    const [isFocused, setIsFocused] = useState(false); // estado para manejar si el input está enfocado
    const [value, setValue] = useState(propValue || ''); // almacena el estado del input

    useEffect(() => {
        if (propValue) {
            setValue(propValue as string);
        }
    }, [propValue]);

    const handleFocus = () => {
        setIsFocused(true); // activar cuando el input tiene foco
    };

    const handleBlur = () => {
        if (!value) {
            setIsFocused(false); // se desactiva cuando pierde el foco y no hay valor en el input
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value); // almacena el valor del input conforme el usuario escribe
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <div className="relative mb-6 w-full">
            <input
                type={type}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                className={`block w-full px-2 py-2 text-lg border border-gray-300 rounded-md transition-colors duration-200 ease-in-out  ${isFocused || value ? 'pt-3' : 'pt-2'}`}
                {...props}
            />
            <label className={`absolute left-3  transition-all duration-200 ease-in-out ${isFocused || value ? 'text-blue-600 text-xs -top-4' : 'text-gray-400 top-2'}`}>
                {label}
            </label>
        </div>
    );
};

export default FloatingLabelInput;


