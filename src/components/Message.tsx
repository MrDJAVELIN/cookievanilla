import { X } from "lucide-react";
import React from "react";

interface MessageProps {
    text: string;
    icon?: React.ReactNode;
    type: "success" | "error" | "warning" | "info";
}

const Message = ({ text, icon, type }: MessageProps) => {
    return (
        <div className={`message message__${type}`}>
            <div className="message__left">
                {icon}
                {text}
            </div>
            <X
                width={20}
                height={20}
                onClick={() => {
                    const messageElement = document.querySelector(".message");
                    if (messageElement) {
                        messageElement.remove();
                    }
                }}
            />
        </div>
    );
};

export default Message;
