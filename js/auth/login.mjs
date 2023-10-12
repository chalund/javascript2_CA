import { API_BASE_URL } from "../constants.mjs";
import * as storage from "../storage/index.mjs"

export async function login(profile) {
    const loginUrl = `${API_BASE_URL}/social/auth/login`;

    try{
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        });

        if (response.ok) {
            const { accessToken, ...user } = await response.json();

            storage.save("accessToken", accessToken);
            storage.save("profile", user);

            window.location.replace("/feed/index.html");
        } else {
            alert("Login failed. Please check your username and password."); 
        }
        
    } catch(error) {
        console.log(error)
    }
}

