import { getPostsWithAuthor } from "../posts/get.mjs";
import { postTemplate } from "../templates/fetchAllPost.mjs";

export async function search(param) {
    try {
        const posts = await getPostsWithAuthor();
        const filteredPosts = posts.filter((element, index) => {
            const lowercaseParam = param.toLowerCase(); 
            
            const lowercaseTitle = element?.title?.toLowerCase(); 
            const lowercaseBody = element?.body?.toLowerCase(); 

            return (lowercaseTitle.includes(lowercaseParam) || lowercaseBody.includes(lowercaseParam));
        });

        return filteredPosts; 

    } catch (error) {
        console.log("Error fetching posts:", error);
        throw error;
    }
}

const searchInput = document.querySelector("#searchInput");
const searchResult = document.querySelector("#post");

searchInput.addEventListener("input", async (event) => {
    event.preventDefault();
    const value = event.target.value;

    try {
        const result = await search(value);
        // console.log("Search result:", result);
        searchResult.innerHTML = '';

        if (!result.length) {
            searchResult.innerHTML = `<div class="card text-center p-3">Sorry, no record was found</div>`
        } else {
            result.forEach((postData) => {
                const postCard = postTemplate(postData);
                searchResult.appendChild(postCard);
            });
        }
    } catch (error) {
        console.log("Error during search:", error);
    }
});