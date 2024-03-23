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