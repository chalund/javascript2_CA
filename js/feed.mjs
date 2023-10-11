
console.log("feed.mjs")

import { getPost, getPostsWithAuthor } from "./posts/get.mjs"; 
import { renderPostTemplates } from "./templates/fetchAllPost.mjs"; 


export async function getPostTemplate() {
    const posts = await getPostsWithAuthor()
    console.log(posts)
    const container = document.querySelector("#post")
    renderPostTemplates(posts,container)
}
getPostTemplate()


import * as postFilters from "./filterPost.mjs"




// import { removePost } from "./posts/index.mjs";
// removePost(2130)

import { fetchAndFilterPosts, filterLikedPosts, filterPostsWithImages, filterUpdatedPosts, showAllPosts } from "./filterPost.mjs"; 








//search function
import { search } from "./search.mjs";

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", (event) => {
    event.preventDefault();
    const value = event.target.value;
    const result = search(value)

    
    console.log({result})

    const searchResult = document.querySelector("#searchResult");
    searchResult.innerHTML = JSON.stringify(result)
})


