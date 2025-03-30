import React from "react";
import Logo from "./Logo";
import djavelin from "../assets/djavelin.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content container">
                <div className="footer__left">
                    <a className="header-content__logo thovered" href="/#">
                        <Logo
                            className="hlogo"
                            type="logo"
                            width={50}
                            height={50}
                            radius={15}
                        />
                        <span>&copy; Cookiev.xyz 2022-2025</span>
                    </a>
                    <p>
                        Копирование страниц, а также их содержимого без согласия
                        Администрации запрещается! Мы никак не связаны с
                        Minecraft®, Mojang Studios® или Microsoft®.
                    </p>
                </div>
                <div className="footer__badges">
                    <a
                        className="dbd"
                        href="https://djavelin.vercel.app/"
                        target="_blank"
                        style={{
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "1px",

                            fontSize: "1rem",
                            color: "#ffffffcc",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        Developed by
                        <img src={djavelin} width={110} />
                    </a>
                    <span className="soroksim">#47</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
