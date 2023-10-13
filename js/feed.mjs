import { fetchAndFilterPosts } from "./handlers/filter.mjs";
import { logout } from "./handlers/logout.mjs";
import { getPostsWithAuthor } from "./posts/get.mjs"; 
import { renderPostTemplates } from "./templates/fetchAllPost.mjs"; 

    async function getPostTemplate() {
        const posts = await getPostsWithAuthor()
        console.log(posts)
        const container = document.querySelector("#post")
        renderPostTemplates(posts, container)
    }
    getPostTemplate()


import { search } from "./handlers/search.mjs";

    const searchInput = document.querySelector("#searchInput");
    searchInput.addEventListener("input", (event) => {
        event.preventDefault();
        const value = event.target.value;
        const result = search(value)    
        // console.log({result})
        const searchResult = document.querySelector("#post");
        searchResult.innerHTML = JSON.stringify(result)
    })

fetchAndFilterPosts();
logout()