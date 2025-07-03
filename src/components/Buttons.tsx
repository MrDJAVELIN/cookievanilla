"use client";

import Link from "next/link";
import Button from "./Button";
import EmptyButton from "./EmptyButton";
import { Copy, ExternalLink } from "lucide-react";

const Buttons = () => {
    const ip = "cookiev.cv";

    function copyIp() {
        var copyText = ip;

        navigator.clipboard.writeText(copyText);

        alert("Copied: " + copyText);
    }

    return (
        <>
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
                    icon={<ExternalLink width={24} id="zayavkaIcon" />}
                    className="thovered"
                />
            </Link>
        </>
    );
};

export default Buttons;
