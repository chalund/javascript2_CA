import { callApi } from "../fetchApi.mjs";

export async function login(profile) {
    const loginUrl = "/social/auth/login";
    const method = "POST";

    try {
        const response = await callApi(loginUrl, method, profile);
        console.log(response)
        if (response.ok) {
            // The login was successful
            const { accessToken, ...user } = response;
            
            // Save the access token and user data
            storage.save("accessToken", accessToken);
            storage.save("profile", user);

            // Display a success message to the user
            alert("You are now logged in");

            // Redirect to the user's profile or main app page if needed
            // Example: window.location.href = "/profile";
        } else {
            // Handle the case where the login was unsuccessful
            const errorResponse = await response.json();
            console.error("Login failed:", errorResponse.message);
            alert("Login failed. Please check your credentials.");
        }
    } catch (error) {
        console.error("Login error", error);
        alert( "An unexpected error occurred. Please try again later.")
    }
}
