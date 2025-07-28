"use client";

import axios from "axios";
import { Users } from "lucide-react";
import React, { useEffect, useState } from "react";

export interface ServerStats {
    max: number;
    players: Player[];
}

export interface Player {
    world: string;
    armor: number;
    name: string;
    x: number;
    y: number;
    health: number;
    z: number;
    uuid: string;
    yaw: number;
}

const PlayerList = () => {
    const [stats, setStats] = useState<ServerStats | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get(
                    "https://map.cookiev.cv/tiles/players.json"
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
                {stats?.players?.length ?? 0}/2025
                <Users strokeWidth={2} />
            </span>

            <ul>
                {stats?.players?.length ? (
                    stats.players.map((player) => (
                        <li
                            key={player.uuid}
                            title={player.name}
                            style={
                                player.name === "DJAVELIN_"
                                    ? { order: "-1", color: "#fff" }
                                    : {}
                            }
                        >
                            <span>{player.name}</span>
                        </li>
                    ))
                ) : (
                    <li className="playerlist__n">
                        <span>
                            {stats?.players?.length === 0
                                ? "Сервер пуст."
                                : "Загрузка..."}
                        </span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default PlayerList;
