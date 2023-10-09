

console.log("filter")

import { getPostsWithAuthor } from "./posts/get.mjs"; 

async function filterPosts() {
    try {
        // Fetch the posts.
        const posts = await getPostsWithAuthor();
        console.log("Fetched posts:", posts);

     
        
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
filterPosts()

const filteredPosts = document.querySelector("#filteredPost")


