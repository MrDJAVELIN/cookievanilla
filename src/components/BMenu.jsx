import { ExternalLink } from "lucide-react";
import React from "react";

const BMenu = (props) => {
    return (
        <>
            <div className="backdrop" onClick={props.closeMenu}>
                <div className="menu">
                    <ul>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <a href="/#">Главная</a>
                        </li>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <a href="builds">Постройки</a>
                        </li>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <a href="seasons">Сезоны</a>
                        </li>
                        <div className="menu__line"></div>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <a href="https://shop.cookiev.xyz/" target="_blank">
                                Превилегии
                            </a>
                        </li>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <a href="https://wiki.cookiev.xyz/" target="_blank">
                                Вики
                            </a>
                        </li>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <a href="https://map.cookiev.xyz/" target="_blank">
                                Карта
                            </a>
                        </li>
                        <div className="menu__line"></div>
                        <li className="thovered">
                            <ExternalLink width={20} />
                            <a
                                href="https://discord.gg/8FGHHKsphg"
                                target="_blank"
                            >
                                Discord
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BMenu;
