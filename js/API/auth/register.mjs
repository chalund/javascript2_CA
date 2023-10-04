import { callApi } from "../fetchApi.mjs";

export async function register(profile) {
    const registerUrl = "/social/auth/register"; // Use the registration URL
    const method = "POST";

    try {
        const response = await callApi(registerUrl, method, profile);
        console.log(response);

        if (response.ok) {
            alert("You are now registered");
        }

    } catch (error) {
        console.error("Registration error", error);
        alert("An unexpected error occurred. Please try again later.");
    }
}