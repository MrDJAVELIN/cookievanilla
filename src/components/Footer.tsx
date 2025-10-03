import React from "react";
import Logo from "./Logo";
import djavelin from "../assets/djavelin.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content container">
                <div className="footer__left">
                    <Link className="header-content__logo thovered" href="/#">
                        <Logo
                            className="hlogo"
                            type="logo"
                            width={50}
                            height={50}
                            radius={50}
                        />
                        <span>&copy; Cookie Vanilla | 2022-2025</span>
                    </Link>
                    <p>
                        Копирование страниц, а также их содержимого без согласия
                        Администрации запрещается! Мы никак не связаны с
                        Minecraft®, Mojang Studios® или Microsoft®.
                    </p>
                </div>
                <div className="footer__badges">
                    <Link
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
                        <Image src={djavelin} width={110} alt="" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
