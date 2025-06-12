import type { Metadata } from "next";
import "@/styles/main.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: "Cookie Vanilla",
    description:
        "Cookie vanilla — приватный ванильный ролевой сервер Minecraft с крутыми фишками, которые не портят ванильное выживание. Сервер основан на дружеском и конечно же классическом выживании без гриферства и привата.",
    icons: {
        icon: "/logo.png",
    },
};

export const metadata = {
    title: "Cookie Vanilla",
    description:
        "Cookie vanilla — приватный ванильный ролевой сервер Minecraft с крутыми фишками, которые не портят ванильное выживание. Сервер основан на дружеском и конечно же классическом выживании без гриферства и привата.",
    openGraph: {
        title: "Cookie Vanilla",
        description:
            "Cookie vanilla — приватный ванильный ролевой сервер Minecraft с крутыми фишками, которые не портят ванильное выживание. Сервер основан на дружеском и конечно же классическом выживании без гриферства и привата.",
        url: "https://cookiev.xyz",
        siteName: "Cookie Vanilla",
        images: [
            {
                url: "/logo.png",
                width: 512,
                height: 512,
                alt: "Cookie Vanilla Logo",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
