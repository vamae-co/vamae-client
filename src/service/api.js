import axios from "axios";
import config from "../app/app.config";

const http = axios.create(
    {
        baseURL: config.uri,
        headers: {
            'Content-Type': 'application/json',
        },
    }
)

export async function logIn({username, password}) {
    const loginResponse = await http({
        method: "POST",
        url: '/auth/authenticate',
        data: {
            username,
            password
        }
    });
    if(loginResponse.status !== 200 || !loginResponse.data.token) {
        console.error("User login failed!");
        return null;
    }
    return loginResponse?.data?.token;
}

export async function signUp({username, password}) {
    const signUpResponse = await http({
        method: "POST",
        url: '/auth/register',
        data: {
            username,
            password
        }
    });
    if(signUpResponse.status !== 200 || !signUpResponse.data.token) {
        console.error("User sign up failed!");
        return null;
    }
    return signUpResponse?.data?.token;
}

export async function createGame({columns, rows, bet, token}) {
    const createConnect4GameResponse = await http({
        method: "POST",
        url: '/connect4/game/create',
        headers: {
            'Authentication': 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
        data: {
            columns,
            rows,
            bet
        }
    });
    if (createConnect4GameResponse.status !== 200 || !createConnect4GameResponse.data) {
        console.error("Game creating failed!");
        return null;
    }
    return createConnect4GameResponse?.data;
}
