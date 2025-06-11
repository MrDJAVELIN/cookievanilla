import React from "react";

interface EmptyButtonProps {
    text: string;
    icon: React.ReactNode;
    className?: string;
}

const EmptyButton = ({ text, icon, className }: EmptyButtonProps) => {
    return (
        <span className={`lbtn ${className}`}>
            {icon}
            {text}
        </span>
    );
};

export default EmptyButton;
