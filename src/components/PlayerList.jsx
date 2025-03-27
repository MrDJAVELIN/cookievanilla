import axios from "axios";
import { Users } from "lucide-react";
import React, { useEffect, useState } from "react";

const PlayerList = () => {
    const [stats, setStats] = useState(null);

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

    return (
        <div className="playerlist thovered">
            <h3>
                Игроки на сервере:
                <span className="playerlist__online">
                    {stats?.players?.online != "" ? stats?.players?.online : 0}/
                    {stats?.players?.max}
                    <Users strokeWidth={2} />
                </span>
            </h3>

            <ul>
                {stats?.players?.list ? (
                    stats?.players?.list.map((player) =>
                        player === "DJAVELIN_" ? (
                            <li
                                key={player}
                                style={{ order: "-1", color: "#fff" }}
                            >
                                {player}
                            </li>
                        ) : (
                            <li key={player}>{player}</li>
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
