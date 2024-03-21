import React, {useEffect, useState} from "react";
import '../games/connect4/games/games.css';

export default function Connect4GameComponent() {
    const [games, setGames] = useState([]);
    const [gameId, setGameId] = useState([]);
    const [firstPlayerUsername, setFirstPlayerUsername] = useState([]);
    const [bet, setBet] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('Token:', token);
                const response = await fetch(process.env.NEXT_PUBLIC_API_URI + "/connect4/games", {
                    headers: {
                        Authorization: 'Bearer ' + token 
                    }
                });
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