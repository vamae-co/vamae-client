'use client'
import React, { useEffect, useState } from 'react';
import Connect4GameComponent from "@/app/components/Connect4GameComponent";
import './games.css'
import config from '@/app/app.config';

export default function Connect4GamesPage() {


    const isAuthenticated = () => {
        if (typeof window !== 'undefined') {
            return !!localStorage.getItem('token');
          }
        return false;
    };
    const money = 1000;
    const [loggedIn, setLoggedIn] = useState(isAuthenticated());
    const [bet, setBet] = useState();
    const [token, setToken] = useState("");

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if(storedToken) {
            setToken(storedToken);
        }
    }, []);

    const afterSubmission = () => {
        if(loggedIn) {
            console.log(token);
            fetch(
                config.uri + "/connect4/game/create", {
                    method: "POST",
                    headers: {
                        'Authentication': 'Bearer ' + token,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "columns" : 7,
                        "rows" : 6,
                        bet
                    })
                }
            )
                .then ((response)=>response.json())
                .catch((error)=>console.error(error));
        }
        else {
            console.error("User is not authenticated!");
        }
    }

    return (
        <div className={"connect4-games"}>
            <div className={"creating-game"}>
                <form onSubmit={afterSubmission}>
                    <input name='bet' required type='number' min={10} max={money} defaultValue={10}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Connect4GameComponent/>
        </div>
    )
}