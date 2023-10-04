import { loginFormListener } from "./handlers/login.mjs";
import { registerFormListener } from "./handlers/register.mjs";

const path = location.pathname;
if (path === '/index.html') {
    loginFormListener()
} else if (path === '/profile/register/index.html') {
    registerFormListener()
}




console.log("index.mjs MAIN")