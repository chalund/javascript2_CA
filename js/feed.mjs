// fetch post
// import * as postMethods from "./posts/index.mjs";
// import * as templates from "./templates/index.mjs"

// export async function getPostTemplate() {
//     const posts = await postMethods.getPosts()
//     const container = document.querySelector("#post")
//     templates.renderPostTemplates(posts,container)
// }
// getPostTemplate()

import { getPostsWithAuthor } from "./posts/get.mjs"; 
import { renderPostTemplates } from "./templates/fetchAllPost.mjs";  

export async function getPostTemplate() {
    const posts = await getPostsWithAuthor()
    const container = document.querySelector("#post")
    renderPostTemplates(posts,container)
}
getPostTemplate()




// import { toggleFollowButton } from "./followBtn.mjs";
// toggleFollowButton("follow-btn")





// import { removePost } from "./posts/index.mjs";
// removePost(2130)