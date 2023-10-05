import { login } from "../login/login.mjs";

export function loginFormListener() {
    const form = document.querySelector('#loginForm');

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
        
             //get all teh data from the form
            const form = event.target
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData);
            // console.log(profile)
            console.log("login works")
        
            //send to API
            login(profile)
        });
}

