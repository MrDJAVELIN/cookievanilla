import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import Sidebar from "@/components/Sidebar";
import NotFound from "@/app/not-found";

const wikiRoutes = [
    {
        type: "category",
        path: "important",
        name: "🍫 Важное",
        files: [
            { type: "file", path: "rules.md", name: "📗 Правила" },
            { type: "file", path: "linking.md", name: "⛓️‍💥 Привязка" },
            {
                type: "file",
                path: "play.md",
                name: "🕹️ Как попасть на сервер?",
            },
            { type: "file", path: "mods.md", name: "🧩 Модификации" },
            {
                type: "file",
                path: "answers.md",
                name: "❓ Часто задаваемые вопросы",
            },
        ],
    },
    {
        type: "category",
        path: "mechanics",
        name: "⚙️ Кастомные Механики",
        files: [
            { type: "file", path: "commands.md", name: "🎵 Команды" },
            { type: "file", path: "skin-url.md", name: "🎡 Скины" },
            { type: "file", path: "chat.md", name: "💬 Чат" },
            { type: "file", path: "brew.md", name: "🍻 Напитки" },
            { type: "file", path: "crafts.md", name: "💡 Крафты" },
            {
                type: "file",
                path: "podpis-predmetov.md",
                name: "✍️ Подпись предметов",
            },
            { type: "file", path: "plasmovoice.md", name: "🔊 Голосовой Чат" },
        ],
    },
    {
        type: "category",
        path: "roleplay",
        name: "🧢 Roleplay",
        files: [{ type: "file", path: "roles.md", name: "🎭 Роли" }],
    },
];

export async function generateStaticParams() {
    return wikiRoutes.flatMap((category) =>
        category.files.map((file) => ({
            slug: [category.path, file.path.replace(/\.md$/, "")],
        }))
    );
}

async function getPageContent(slug: string[]) {
    const filePath = path.join(
        process.cwd(),
        "src/wiki",
        slug[0],
        `${slug[1]}.md`
    );
    if (!fs.existsSync(filePath)) throw new Error("File not found");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent);

    const processed = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(content);

    return processed.toString();
}

interface PageProps {
    params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const filePath = path.join(
        process.cwd(),
        "src/wiki",
        slug[0],
        `${slug[1]}.md`
    );
    if (!fs.existsSync(filePath)) {
        return { title: "Страница не найдена" };
    }

    return { title: `Wiki: ${slug[1]}` };
}

export default async function WikiPage({ params }: PageProps) {
    const resolvedParams = await params;

    let html = "";
    try {
        html = await getPageContent(resolvedParams.slug);
    } catch {
        return <NotFound />;
    }

    return (
        <div style={{ display: "flex" }} className="container">
            <Sidebar data={wikiRoutes} />
            <div style={{ padding: 24, maxWidth: 800 }}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </div>
    );
}
