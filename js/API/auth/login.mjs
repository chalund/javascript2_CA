import { callApi } from "../fetchApi.mjs";
import * as storage from "../../storage/index.mjs"

export async function login(profile) {
    const loginUrl = "/social/auth/login";
    const method = "POST";

    try {
        const response = await callApi(loginUrl, method, profile);
        console.log(response);

        if (response.ok) { // Check if the response status is in the success range
            const { accessToken, ...user } = await response.json();

            storage.save("accessToken", accessToken);
            storage.save("profile", user);

            alert("You are now logged in"); // Display the alert upon successful login

            // Redirect to the feed page
            window.location.href = "/feed/index.html";
     
        } else {
            // Handle other error cases
            alert("An unexpected error occurred. Please try again later.");
        }

    } catch (error) {
        console.log(error);
    }
}



