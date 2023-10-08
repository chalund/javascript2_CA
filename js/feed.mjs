
console.log("feed.mjs")

import { getPostsWithAuthor } from "./posts/get.mjs"; 
import { renderPostTemplates } from "./templates/fetchAllPost.mjs"; 


export async function getPostTemplate() {
    const posts = await getPostsWithAuthor()
    console.log(posts)
    const container = document.querySelector("#post")
    renderPostTemplates(posts,container)
}
getPostTemplate()





// import { removePost } from "./posts/index.mjs";
// removePost(2130)








//search function

// import { search } from "./search.mjs"

// const searchResult = search('post')
// console.log(searchResult)


