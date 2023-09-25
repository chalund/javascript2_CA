import { API_BASE_URL } from "../constants.mjs";
import * as storage from "../storage/index.mjs"


export async function login(profile) {
    console.log(profile);
    const loginUrl = `${API_BASE_URL}/social/auth/login`;
    console.log(loginUrl)

    try{
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        });
        console.log(response);

        // const json = await response.json();
        // console.log(json);

        // const accessToken = json.accessToken;
        // localStorage.setItem('accessToken', accessToken);
        const { accessToken, ...user } = await response.json()

        storage.save("accessToken", accessToken);

        storage.save("profile", user);

        alert("You are now logged in")
        

    } catch(error) {
        console.log(error)
    }
}