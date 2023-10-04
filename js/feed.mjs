
console.log("feed mjs")

import { callApi } from "./API/fetchApi.mjs";

async function fetchPost() {
    const endpoint = "/social/posts/?_author=true`t"; // Replace with your actual API endpoint
    const method = "GET";

    try {
        const response = await callApi(endpoint, method);
        console.log("API Response:", response);
        // Use the response data here
    } catch (error) {
        console.error("API Error:", error);
    }
}

fetchPost()


// import { renderPostTemplates } from "./templates/fetchAllPost.mjs";  

// export async function getPostTemplate() {
//     const posts = await fetchPost()
//     const container = document.querySelector("#post")
//     renderPostTemplates(posts,container)
// }
// getPostTemplate()