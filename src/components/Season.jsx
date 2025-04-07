import React from "react";
import EmptyButton from "./EmptyButton";
import { Download } from "lucide-react";

const Season = ({ name, icon, dateStart, dateEnd, size, link }) => {
    return (
        <>
            <div className="season">
                <img src={icon} alt="" />
                <h3>{name}</h3>
                <div className="season__description">
                    <span>Начало: {dateStart}</span>
                    <span>Конец: {dateEnd}</span>
                    <span>Размер: {size}</span>
                </div>
                <a href={link} target="_blank" rel="noreferrer" download>
                    <EmptyButton text="Загрузить" icon={<Download />} />
                </a>
            </div>
        </>
    );
};

export default Season;
