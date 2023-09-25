import { API_BASE_URL } from "../constants.mjs";


export async function register(profile) {
    console.log(profile);
    const registerUrl = `${API_BASE_URL}/social/auth/register`;
    console.log(registerUrl)

    try{
        const response = await fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        });
        console.log(response)
        const json = await response.json();
        console.log(json);
        alert("Welcome, your are now registered");
        return json

    } catch(error) {
        console.log(error)
    } 
}
