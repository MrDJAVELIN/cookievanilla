"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BMenuProps {
    stat: boolean;
    closeMenu: () => void;
}

const BMenu = ({ stat, closeMenu }: BMenuProps) => {
    return (
        <>
            <div
                className={`backdrop ${stat ? "open" : ""}`}
                onClick={closeMenu}
            >
                <div className="menu">
                    <ul>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <Link href="/#">Главная</Link>
                        </li>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <Link href="seasons">Сезоны</Link>
                        </li>
                        <div className="menu__line"></div>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <Link
                                href="https://shop.cookiev.cv/"
                                target="_blank"
                            >
                                Превилегии
                            </Link>
                        </li>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <Link
                                href="https://wiki.cookiev.cv/"
                                target="_blank"
                            >
                                Вики
                            </Link>
                        </li>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <Link
                                href="https://map.cookiev.cv/"
                                target="_blank"
                            >
                                Карта
                            </Link>
                        </li>
                        <div className="menu__line"></div>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <Link
                                href="https://discord.gg/8FGHHKsphg"
                                target="_blank"
                            >
                                Discord
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BMenu;
