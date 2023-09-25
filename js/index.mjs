import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";




const path = location.pathname;

if (path === '/login/login/index.html') {
    loginFormListener()
} else if (path === '/login/register/index.html') {
    registerFormListener()
}
