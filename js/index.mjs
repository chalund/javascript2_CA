import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/form/login.mjs";


// login and register form, choose one
const path = location.pathname;

if (path === '/index.html') {
    loginFormListener()
} else if (path === '/profile/register/index.html') {
    registerFormListener()
}


