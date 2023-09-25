import { register } from "../login/register.mjs";

export function registerFormListener() {
    const form = document.querySelector('#registerForm');

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
        
             //get all teh data from the form
            const form = event.target
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData);
            // console.log(profile)
            console.log("it works")
        
            //send to API
            register(profile)
        });
    }
}

