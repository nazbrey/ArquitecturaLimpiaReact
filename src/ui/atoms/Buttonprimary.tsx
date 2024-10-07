import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonPrimary: React.FC<Props> = (props) => {
    return (
        <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            {...props}
        />
    );
};

export default ButtonPrimary;
