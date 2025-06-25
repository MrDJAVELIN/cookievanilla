"use client";

import axios from "axios";
import { Users } from "lucide-react";
import React, { useEffect, useState } from "react";

interface ServerStats {
    players: {
        online: number;
        max: number;
        list: string[];
    };
    online: boolean;
}

const PlayerList = () => {
    const [stats, setStats] = useState<ServerStats | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get(
                    "https://api.mcsrvstat.us/2/c13.play2go.cloud:20004"
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

    return (
        <div className="playerlist thovered">
            <span className="playerlist__online" title="Онлайн/Максимум">
                {stats?.players?.online}/2025
                <Users strokeWidth={2} />
            </span>

            <ul>
                <li>
                    <span>ABCABCABCABCABCABCCABCABCACBACB</span>
                </li>
                {stats?.players?.list ? (
                    stats?.players?.list.map((player) =>
                        player === "DJAVELIN_" ? (
                            <li
                                key={player}
                                style={{ order: "-1", color: "#fff" }}
                                title={player}
                            >
                                <span>{player}</span>
                            </li>
                        ) : (
                            <li key={player} title={player}>
                                <span>{player}</span>
                            </li>
                        )
                    )
                ) : (
                    <li>
                        {stats?.players?.online == 0
                            ? "Сервер пуст."
                            : "Загрузка..."}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default PlayerList;
