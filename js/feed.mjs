import { getPostsWithAuthor } from "./posts/get.mjs"; 
import { renderPostTemplates } from "./templates/fetchAllPost.mjs";  

export async function getPostTemplate() {
    const posts = await getPostsWithAuthor()
    const container = document.querySelector("#post")
    renderPostTemplates(posts,container)
}
getPostTemplate()





// import { removePost } from "./posts/index.mjs";
// removePost(2130)