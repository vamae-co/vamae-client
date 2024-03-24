import React, {useEffect, useState} from "react";
import '../games/connect4/games/games.css';
import {getAllGames} from "@/service/api";

export default function Connect4GameComponent() {
    const [games, setGames] = useState([]);
    const [gameId, setGameId] = useState([]);
    const [firstPlayerUsername, setFirstPlayerUsername] = useState([]);
    const [bet, setBet] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const responseData = await getAllGames({token});

                setGames(responseData);
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