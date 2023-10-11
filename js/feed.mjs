
console.log("feed.mjs")
import { logout } from "./handlers/logout.mjs";
logout()

import { getPostsWithAuthor } from "./posts/get.mjs"; 
import { renderPostTemplates } from "./templates/fetchAllPost.mjs"; 


export async function getPostTemplate() {
    const posts = await getPostsWithAuthor()
    console.log(posts)
    const container = document.querySelector("#post")
    renderPostTemplates(posts, container)
}
getPostTemplate()








//search function
// import { search } from "./search.mjs";

// const searchInput = document.querySelector("#searchInput");
// searchInput.addEventListener("input", (event) => {
//     event.preventDefault();
//     const value = event.target.value;
//     const result = search(value)

    
//     console.log({result})

//     const searchResult = document.querySelector("#searchResult");
//     searchResult.innerHTML = JSON.stringify(result)
// })


