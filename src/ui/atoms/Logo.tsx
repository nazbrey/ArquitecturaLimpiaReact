import React from "react";

interface LogoProps {
    src: string;
    alt: string;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`h-12 w-12 rounded-full border-4 border-gray-300 shadow-lg ${className}`}
        />
    );
};

export default Logo;
