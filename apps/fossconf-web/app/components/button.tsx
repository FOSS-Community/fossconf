import React from 'react';

interface ButtonProps {
    text: string;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
    return (
        <a 
           href={href} 
           className="cursor-pointer text-yellow-200 font-bold px-6 py-2 border-b-2 border-yellow-200 backdrop-blur-sm hover:backdrop-blur-md transition duration-300 flex items-center justify-center whitespace-nowrap"
        >
            {text}
        </a>
    );
}

export default Button;
