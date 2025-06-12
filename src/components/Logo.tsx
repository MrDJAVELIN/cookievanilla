"use client";

import React from "react";

import title from "../assets/title.png";
import logo from "../assets/logo.png";
import Image from "next/image";

interface LogoProps {
    type: "title" | "logo";
    width: number;
    height: number;
    radius: number;
    className?: string;
}

const Logo = ({ type, width, height, radius, className }: LogoProps) => {
    return type === "title" ? (
        <Image
            className={`logo ${className}`}
            src={title}
            width={width}
            height={height}
            alt="title"
            style={{ borderRadius: radius }}
        />
    ) : (
        <Image
            className={`logo ${className}`}
            src={logo}
            width={width}
            height={height}
            alt="logo"
            style={{ borderRadius: radius }}
        />
    );
};

export default Logo;
