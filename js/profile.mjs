import { createPostFormListener } from "./handlers/createPost.mjs";
createPostFormListener()


// import { removePost } from "./posts/delete.mjs";
// removePost(2877)


import { getPostsUser } from "./posts/get.mjs"; 
import { renderPostTemplates } from "./templates/fetchProfilePosts.mjs"; 

export async function getPostTemplate() {
    const posts = await getPostsUser()
    const container = document.querySelector("#profilePosts")
    renderPostTemplates(posts, container)
}
getPostTemplate()











