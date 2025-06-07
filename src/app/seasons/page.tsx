import React from "react";
import Season from "@/components/Season";

import bh1 from "@/assets/seasonsIcons/bh-season1.png";
import bh2 from "@/assets/seasonsIcons/bh-season2.png";
import cv2 from "@/assets/seasonsIcons/season2.png";
import cv3 from "@/assets/seasonsIcons/season3.png";
import empty from "@/assets/seasonsIcons/empty.png";

const Seasons = () => {
    const seasons = [
        {
            name: "Beehive 1",
            dateStart: "Сентябрь 2023",
            dateEnd: "Ноябрь 2023",
            size: "11.79GB",
            link: "http://176.108.240.184:25564/BeeHive-1season.zip",
            icon: bh1,
        },
        {
            name: "Beehive 2",
            dateStart: "Ноябрь 2023",
            dateEnd: "Январь 2023",
            size: "5.12GB",
            link: "http://176.108.240.184:25564/beeh.2-season.zip",
            icon: bh2,
        },
        {
            name: "CookieVanilla 2",
            dateStart: "06.04.2024",
            dateEnd: "31.05.2024",
            size: "2.73GB",
            link: "http://176.108.240.184:25564/cookie-2season.zip",
            icon: cv2,
        },
        {
            name: "CookieVanilla 3",
            dateStart: "01.08.2024",
            dateEnd: "25.09.2024",
            size: "9.12GB",
            link: "http://176.108.240.184:25564/cookie-3seasonv2.zip",
            icon: cv3,
        },
        {
            name: "CookieVanilla 4",
            dateStart: "28.12.2024",
            dateEnd: "21.01.2025",
            size: "2.94GB",
            link: "http://176.108.240.184:25564/cookie-4season.zip",
            icon: empty,
        },
        {
            name: "CookieVanilla 5(dev)",
            dateStart: "03.03.2025",
            dateEnd: "04.04.2025",
            size: "???GB",
            link: "http://176.108.240.184:25564/cookie-5season-dev.zip",
            icon: empty,
        },
    ];

    return (
        <main>
            <section className="seasons container">
                <div className="section__title seasons__title">Сезоны</div>
                <div className="seasons__list">
                    {seasons.map((season) => (
                        <Season
                            key={season.name}
                            name={season.name}
                            icon={season.icon}
                            dateStart={season.dateStart}
                            dateEnd={season.dateEnd}
                            size={season.size}
                            link={season.link}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Seasons;
