"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface FaqProps {
    question: string;
    answer: string;
}

const Faq = ({ question, answer }: FaqProps) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <div className={`faq-element ${active ? "faq-active" : ""}`}>
                <div
                    className="faq-question"
                    onClick={() => {
                        setActive(!active);
                    }}
                >
                    <span>{question}</span>
                    <ChevronDown className="faq-icon" width={30} height={30} />
                </div>
                <div className="faq-answer">
                    <p>— {answer}</p>
                </div>
            </div>
        </>
    );
};

export default Faq;
