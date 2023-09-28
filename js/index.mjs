import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";

// login and register form, choose one
const path = location.pathname;

if (path === '/login/login/index.html') {
    loginFormListener()
} else if (path === '/login/register/index.html') {
    registerFormListener()
}

// fetch post
import * as postMethods from "./posts/index.mjs";

import * as templates from "./templates/index.mjs"

export async function getPostTemplate() {
    const posts = await postMethods.getPosts()
    const container = document.querySelector("#post")
    templates.renderPostTemplates(posts,container)
}
getPostTemplate()


// follow/unfollow btn
import { toggleFollowButton } from "./profile.mjs";
toggleFollowButton("follow-btn")