"use client";

import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    className?: string;
}

const Button = ({ text, onClick, icon, className }: ButtonProps) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {icon}
            {text}
        </button>
    );
};

export default Button;
