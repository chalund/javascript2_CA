import { register } from "../API/auth/register.mjs"; 

export function registerFormListener() {
    const form = document.querySelector("#registerForm")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
    
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        console.log(profile)
        console.log("profileForm works")
    
        register(profile)
    
    });
}
