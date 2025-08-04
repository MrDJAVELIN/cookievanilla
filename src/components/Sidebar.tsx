"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
    data: {
        path: string;
        name: string;
        files: { path: string; name: string }[];
    }[];
}

export default function Sidebar({ data }: { data: SidebarProps["data"] }) {
    const pathname = usePathname();

    return (
        <aside
            style={{
                width: 250,
                padding: "1rem",
                borderRight: "1px solid #ddd",
                height: "100vh",
                overflowY: "auto",
            }}
        >
            {data.map((category, idx) => (
                <div key={idx} style={{ marginBottom: "1.5rem" }}>
                    <h4 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                        {category.name}
                    </h4>
                    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                        {category.files.map((file, fIdx) => {
                            const fullPath = `/wiki/${
                                category.path
                            }/${file.path.replace(/\.md$/, "")}`;
                            const isActive = pathname === fullPath;

                            return (
                                <li
                                    key={fIdx}
                                    style={{ marginBottom: "0.25rem" }}
                                >
                                    <Link href={fullPath}>
                                        <span
                                            style={{
                                                padding: "4px 8px",
                                                display: "block",
                                                borderRadius: 6,
                                                background: isActive
                                                    ? "#eee"
                                                    : "transparent",
                                                fontWeight: isActive
                                                    ? "bold"
                                                    : "normal",
                                                transition: "background 0.2s",
                                            }}
                                        >
                                            {file.name}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </aside>
    );
}
