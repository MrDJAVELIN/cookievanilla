export const config = {
    runtime: "edge",
};

export default async function handler(req) {
    const { searchParams } = new URL(req.url);
    const file = searchParams.get("file");

    if (!file || !file.endsWith(".zip")) {
        return new Response("Неверный файл", { status: 400 });
    }

    const safeFile = encodeURIComponent(file);
    const fileUrl = `http://176.108.240.184:25564/${safeFile}`;

    try {
        const response = await fetch(fileUrl);

        if (!response.ok) {
            return new Response("Файл не найден", { status: 404 });
        }

        const headers = new Headers({
            "Content-Type": "application/zip",
            "Content-Disposition": `attachment; filename="${file}"`,
        });

        const buffer = await response.arrayBuffer();

        return new Response(buffer, { headers });
    } catch (err) {
        return new Response("Ошибка на сервере", { status: 500 });
    }
}
