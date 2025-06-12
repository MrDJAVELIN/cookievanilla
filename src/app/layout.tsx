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
    themeColor: "#ff0000",
    openGraph: {
        title: "Cookie Vanilla",
        description:
            "Приватный ванильный ролевой Minecraft сервер без привата и гриферства.",
        url: "https://cookiev.xyz",
        siteName: "Cookie Vanilla",
        images: [
            {
                url: "/bg.png",
                width: 1200,
                height: 630,
                alt: "Cookie Vanilla Preview",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        images: ["/bg.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className={`${poppins.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
