import { createPost } from "./posts/create.mjs";
import { updatePost } from "./posts/index.mjs";
import { removePost } from "./posts/index.mjs";
import { getPosts } from "./posts/index.mjs";
import { getPost } from "./posts/index.mjs";
// all added in this file
import * as postMethods from "./posts/index.mjs";


createPost({
    title: "this new post",
    body: "body is new post"
})

updatePost({
    id: 1789,
    title: "UPDATE this new post",
    body: "body is UPDATED new post"
})

removePost(1788);


getPosts()
getPost(1664)