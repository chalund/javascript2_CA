import { getPostsWithAuthor } from "./posts/get.mjs";

export async function search(param) {
    try {
        // Fetch the posts.
        const posts = await getPostsWithAuthor();
        console.log("Fetched posts:", posts);

        // Perform the search.
        const filteredPosts = posts.filter((element, index) => {
            // Check if element is not null or undefined before accessing properties.
            return (element?.title?.includes(param) || element?.body?.includes(param));
        });
        
        return filteredPosts; // Return the filteredPosts array.
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}


const searchInput = document.querySelector("#searchInput");
const searchResult = document.querySelector("#searchResult");

searchInput.addEventListener("input", async (event) => {
    event.preventDefault();
    const value = event.target.value;
    
    try {
        const result = await search(value);
        console.log("Search result:", result);

        // Clear the previous search results.
        searchResult.innerHTML = '';

        if (!result.length) {
            searchResult.innerHTML = "No record was found";
        } else {
            // Create HTML elements for each post and append them to the searchResult container.
            result.forEach(({ title, body }) => {
                const postElement = document.createElement("div");
                postElement.classList.add("post", "card", "mt-2");

                const titleElement = document.createElement("h2");
                titleElement.textContent = title;

                const bodyElement = document.createElement("p");
                bodyElement.textContent = body;

                postElement.appendChild(titleElement);
                postElement.appendChild(bodyElement);

                searchResult.appendChild(postElement);
            });
        }
    } catch (error) {
        console.error("Error during search:", error);
    }
});





