"use client";
import Logo from "../components/Logo";
import Button from "../components/Button";
import {
    CalendarClock,
    Clipboard,
    Cookie,
    Copy,
    ExternalLink,
    Sun,
    TriangleAlert,
    Users,
} from "lucide-react";
import PlayerList from "../components/PlayerList";
import EmptyButton from "../components/EmptyButton";
import Faq from "../components/Faq";
import Link from "next/link";

const Home = () => {
    const ip = "cookiev.xyz";

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
                            <div className="hero__titles">
                                <h1 className="hero__titles__title">
                                    <Cookie width={30} height={30} />
                                    Cookie Vanilla
                                </h1>
                                <span className="hero__titles__season">
                                    <CalendarClock width={25} height={25} />{" "}
                                    ЛЕТНИЙ СЕЗОН
                                </span>
                            </div>
                            <p className="hero__description">
                                — приватный ванильный RolePlay сервер minecraft
                                с крутыми фишками, которые не портят ванильное
                                выживание. Сервер основан на дружеском и конечно
                                же классическом выживании без гриферства и
                                привата.
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
                                <Link href="https://discord.gg/8FGHHKsphg">
                                    <EmptyButton
                                        text="Подать Заявку"
                                        icon={
                                            <ExternalLink
                                                width={24}
                                                id="zayavkaIcon"
                                            />
                                        }
                                        className="thovered"
                                    />
                                </Link>
                            </div>
                        </div>
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
                        question="Можно ли грать с телефона или приставки?"
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
