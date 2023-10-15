import { API_BASE_URL } from "../constants.mjs";

export async function register(profile) {
    const registerUrl = `${API_BASE_URL}/social/auth/register`;

    try{
        const response = await fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        });

        if (response.status === 200 || response.status === 201) {
            const json = await response.json();
            alert("Welcome, you are now registered");
            window.location.replace("/index.html");
            return json;
        } else if (response.status === 400) {
            alert("User already exists try a different username or email");

            clearRegistrationForm()

            window.location.replace("/profile/register/index.html");
        }
    } catch(error) {
        console.log(error)
    } 
}

function clearRegistrationForm() {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (usernameInput) {
        usernameInput.value = "";
    }

    if (emailInput) {
        emailInput.value = "";
    }

    if (passwordInput) {
        passwordInput.value = "";
    }
}