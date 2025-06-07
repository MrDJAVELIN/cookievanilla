import React from "react";

const EmptyButton = ({ text, icon, className }: EmptyButtonProps) => {
    return (
        <span className={`lbtn ${className}`}>
            {icon}
            {text}
        </span>
    );
};

export default EmptyButton;
