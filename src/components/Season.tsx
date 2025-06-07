import React from "react";
import EmptyButton from "./EmptyButton";
import { Download } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface SeasonProps {
    name: string;
    icon: StaticImageData;
    dateStart: string;
    dateEnd: string;
    size: string;
    link: string;
}

const Season = ({
    name,
    icon,
    dateStart,
    dateEnd,
    size,
    link,
}: SeasonProps) => {
    return (
        <>
            <div className="season">
                <Image src={icon} alt="" />
                <h3>{name}</h3>
                <div className="season__description">
                    <span>Начало: {dateStart}</span>
                    <span>Конец: {dateEnd}</span>
                    <span>Размер: {size}</span>
                </div>
                <Link href={link} target="_blank" rel="noreferrer" download>
                    <EmptyButton
                        text="Загрузить"
                        icon={<Download />}
                        className={""}
                    />
                </Link>
            </div>
        </>
    );
};

export default Season;
