import { registerFormListener } from "./handlers/form/register.mjs"; 
import { loginFormListener } from "./handlers/form/login.mjs";


const path = location.pathname;
if (path === '/index.html') {
    loginFormListener()
} else if (path === '/profile/register/index.html') {
    registerFormListener()
}