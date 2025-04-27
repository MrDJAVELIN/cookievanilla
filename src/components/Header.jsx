import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import discord from "../assets/discord.svg";
import { Menu } from "lucide-react";
import BMenu from "./BMenu";

const Header = () => {
    const [blurHeader, setBlurHeader] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setBlurHeader(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={blurHeader ? `header header-blur` : `header`}>
                <div className="header-content container">
                    <a className="header-content__logo thovered" href="/#">
                        <Logo
                            className="hlogo"
                            type="logo"
                            width={50}
                            height={50}
                            radius={15}
                        />
                        <span>Cookie Vanilla</span>
                    </a>
                    <nav className="header-content__nav shadow">
                        <ul>
                            <li className="thovered">
                                <a href="/#">Главная</a>
                            </li>
                            {/* <li className="thovered">
                                <a href="builds">Постройки</a>
                            </li> */}
                            <li className="thovered">
                                <a href="seasons">Сезоны</a>
                            </li>
                            <li className="thovered">
                                <a
                                    href="https://shop.cookiev.xyz/"
                                    target="_blank"
                                >
                                    Превилегии
                                </a>
                            </li>
                            <li className="thovered">
                                <a
                                    href="https://wiki.cookiev.xyz/"
                                    target="_blank"
                                >
                                    Вики
                                </a>
                            </li>
                            <li className="thovered">
                                <a
                                    href="https://map.cookiev.xyz/"
                                    target="_blank"
                                >
                                    Карта
                                </a>
                            </li>
                        </ul>

                        <a
                            className="header-content__discord"
                            href="https://discord.gg/8FGHHKsphg"
                            target="_blank"
                        >
                            <img
                                src={discord}
                                alt="discord"
                                className="thovered"
                            />
                        </a>
                    </nav>
                    <Menu
                        width={35}
                        height={35}
                        onClick={() => {
                            setOpenMenu(!openMenu);
                        }}
                        style={{ cursor: "pointer" }}
                        id="menubtn"
                    />
                </div>
            </header>
            {openMenu && <BMenu closeMenu={() => setOpenMenu(false)} />}
        </>
    );
};

export default Header;
