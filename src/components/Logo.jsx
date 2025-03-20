import React from "react";

import title from "../assets/title.png";
import logo from "../assets/logo.png";

const Logo = ({ type, width, height, radius, className }) => {
    return type === "title" ? (
        <img
            className={`logo ${className}`}
            src={title}
            width={width}
            height={height}
            alt="title"
            style={{ borderRadius: radius }}
        />
    ) : (
        <img
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
