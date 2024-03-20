import React, {useEffect, useState} from "react";
import config from "@/app/app.config";
import '../games/connect4/games/games.css';

export default function Connect4GameComponent() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(config.uri + '/connect4/games');
                if (!response.ok) {
                    console.error('Network response was not ok');
                    return;
                }
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={"connect4-games-list"}>
            {games.map((game) => (
                <div key={game.gameId} className={"game-container"}>
                    <p>Game ID: {game.gameId}</p>
                    <p>Creator: {game.firstPlayerUsername}</p>
                    <p>Bet: {game.bet}</p>
                </div>
            ))}
        </div>
    );
};