import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";

import * as posts from "./posts/index.mjs";

import { createPost } from "./posts/create.mjs";
import { updatePost } from "./posts/index.mjs";
import { removePost } from "./posts/index.mjs";
import { getPosts } from "./posts/index.mjs";
import { getPost } from "./posts/index.mjs";




const path = location.pathname;

if (path === '/login/login/index.html') {
    loginFormListener()
} else if (path === '/login/register/index.html') {
    registerFormListener()
}




// createPost({
//     title: "this new post",
//     body: "body is new post"
// })

// updatePost({
//     id: 1789,
//     title: "UPDATE this new post",
//     body: "body is UPDATED new post"
// })

// removePost(1788);


// getPosts()
// getPost(1664)

