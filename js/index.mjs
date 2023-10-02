import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { createPostFormListener } from "./handlers/createPost.mjs";

// login and register form, choose one
const path = location.pathname;

if (path === '/profile/login/index.html') {
    loginFormListener()
} else if (path === '/profile/register/index.html') {
    registerFormListener()
} else if ( path === '/profile/index.html') {
    createPostFormListener()
 } 







 
