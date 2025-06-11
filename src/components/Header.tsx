"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu } from "lucide-react";
import BMenu from "./BMenu";
import Link from "next/link";

const Header = () => {
    const [blurHeader, setBlurHeader] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [lightTheme, setLightTheme] = useState(false);

    useEffect(() => {
        if (lightTheme) {
            document.body.classList.add("light-theme");
        } else {
            document.body.classList.remove("light-theme");
        }
        localStorage.setItem("lightTheme", JSON.stringify(lightTheme));
    }, [lightTheme]);

    useEffect(() => {
        const handleScroll = () => {
            setBlurHeader(window.scrollY >= 150);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={blurHeader ? "header header-blur" : "header"}>
                <div className="header-content container">
                    <Link className="header-content__logo thovered" href="/#">
                        <Logo
                            className="hlogo"
                            type="logo"
                            width={50}
                            height={50}
                            radius={50}
                        />
                        <span>Cookie Vanilla</span>
                    </Link>

                    <nav className="header-content__nav">
                        <ul className="header-content__nav__ul">
                            <li className="thovered">
                                <Link href="/#">Главная</Link>
                            </li>
                            <li className="thovered">
                                <Link href="/seasons">Сезоны</Link>
                            </li>
                            <li className="thovered">
                                <Link
                                    href="https://shop.cookiev.xyz/"
                                    target="_blank"
                                >
                                    Превилегии
                                </Link>
                            </li>
                            <li className="thovered">
                                <Link
                                    href="https://wiki.cookiev.xyz/"
                                    target="_blank"
                                >
                                    Вики
                                </Link>
                            </li>
                            <li className="thovered">
                                <Link
                                    href="https://map.cookiev.xyz/"
                                    target="_blank"
                                >
                                    Карта
                                </Link>
                            </li>
                        </ul>

                        <Menu
                            width={35}
                            height={35}
                            onClick={() => setOpenMenu(!openMenu)}
                            style={{ cursor: "pointer" }}
                            id="menubtn"
                        />
                    </nav>
                </div>
            </header>
            <BMenu stat={openMenu} closeMenu={() => setOpenMenu(false)} />
        </>
    );
};

export default Header;
