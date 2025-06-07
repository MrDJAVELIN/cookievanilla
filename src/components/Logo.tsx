import React from "react";

import title from "../assets/title.png";
import logo from "../assets/logo.png";
import Image from "next/image";

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
