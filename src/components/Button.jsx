import React from "react";

const Button = ({ text, onClick, icon, className }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {icon}
            {text}
        </button>
    );
};

export default Button;
