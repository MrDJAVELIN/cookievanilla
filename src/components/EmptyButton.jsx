import React from "react";

const EmptyButton = ({ text, icon, className }) => {
    return (
        <button className={`lbtn ${className}`}>
            {icon}
            {text}
        </button>
    );
};

export default EmptyButton;
