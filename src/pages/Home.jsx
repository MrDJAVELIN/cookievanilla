import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import {
    CalendarClock,
    Clipboard,
    Cookie,
    Copy,
    ExternalLink,
    Sun,
    Users,
} from "lucide-react";
import PlayerList from "../components/PlayerList";
import EmptyButton from "../components/EmptyButton";
import axios from "axios";
import Faq from "../components/Faq";

const Home = () => {
    const [stats, setStats] = useState(null);
    const [ip, setIp] = useState("cookiev.xyz");

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get(
                    "https://api.mcsrvstat.us/2/cookiev.xyz"
                );
                setStats(res.data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        const interval = setInterval(fetchStats, 5000);
        fetchStats();

        return () => clearInterval(interval);
    }, []);

    function copyIp() {
        var copyText = ip;

        navigator.clipboard.writeText(copyText);

        alert("Copied: " + copyText);
    }

    return (
        <>
            <main>
                <section className="hero">
                    <div className="hero__content container">
                        <div className="hero__left">
                            <div className="hero__titles shadow">
                                <h1 className="hero__titles__title">
                                    <Cookie width={30} height={30} />
                                    Cookie Vanilla
                                </h1>
                                <span className="hero__titles__season">
                                    <CalendarClock width={25} height={25} />{" "}
                                    ЛЕТНИЙ СЕЗОН
                                </span>
                            </div>
                            <p className="hero__description shadow">
                                — приватный ванильный
                                <b> RolePlay</b> сервер minecraft с крутыми
                                фишками, которые не портят ванильное выживание.
                                Сервер основан на дружеском и конечно же
                                классическом выживании <b>без гриферства</b> и
                                <b> привата</b>.
                            </p>
                            <div className="hero__buttons">
                                <Button
                                    text={ip}
                                    className="thovered"
                                    icon={<Copy width={20} height={20} />}
                                    onClick={() => {
                                        copyIp();
                                    }}
                                />
                                <a href="https://discord.gg/8FGHHKsphg">
                                    <EmptyButton
                                        text="Подать Заявку"
                                        icon={
                                            <ExternalLink
                                                width={24}
                                                id="zayavkaIcon"
                                            />
                                        }
                                        className="thovered"
                                        link="https://discord.gg/8FGHHKsphg"
                                    />
                                </a>
                            </div>
                        </div>
                        <PlayerList />
                    </div>
                </section>
                <section className="faq container">
                    <h2 className="section__title faq__title">
                        Часто задаваемые вопросы
                    </h2>
                    <Faq
                        question="Сколько длится сезон?"
                        answer="Минимум месяц. Окончательная продолжительность сезона зависит от выхода новых версий и интереса игроков к серверу."
                    />
                    <Faq
                        question="Какая версия сервера?"
                        answer="Версия: Java Edition 1.21.4"
                    />
                    <Faq
                        question="Могу ли я играть с телефона, приставки или Windows 10 Edition (Bedrock)?"
                        answer="Нет, сервер доступен только на Java Edition. Но вы можете попробовать скачать Pojavlauncher себе на телефон!"
                    />
                    <Faq
                        question="Какая валюта на сервере?"
                        answer="Основная валюта сервера - Алмазная руда и Алмазоносный глубинный сланец."
                    />
                    <Faq
                        question="Как связаться с модерацией?"
                        answer="Если вы столкнулись с проблемами на сервере или хотите задать вопрос, обращение к модерации возможно написав жалобу в канале #🎫поддержка в Discord сервере. (Личные сообщения - не поддержка сервера, Ваше обращение может остаться без ответа.)"
                    />
                    <Faq
                        question="Я не умею строить, что делать?"
                        answer="Совсем не обязательно уметь красиво строить, чтобы играть на сервере Cookie Vanilla. На сервере каждый может найти себя в других занятиях, таких как: создание и участие в ивентах, строительство ферм, торговля, коммуникация с другими игроками, совместная добыча ресурсов, строительство артов и многое другое."
                    />
                    <Faq
                        question="А можно не участвовать в ивентах?"
                        answer="Несмотря на то, что мы делаем упор на сплоченности сообщества, устраивая ивенты, совместные постройки и добычу ресурсов, мы никого не заставляем взаимодействовать с другими игроками. Вы можете спокойно выживать вдали от всех."
                    />
                </section>
            </main>
        </>
    );
};

export default Home;
