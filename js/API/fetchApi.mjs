import { API_BASE_URL } from "./constants.mjs";
import { load } from "../storage/index.mjs";

console.log("fetchApi")

/**
 * Makes a generic API call with the given endpoint and data.
 * @param {string} endpoint - The API endpoint.
 * @param {string} method - The HTTP method (e.g., GET, POST).
 * @param {object} data - The data to send in the request body (if applicable).
 * @returns {Promise} A promise that resolves with the API response.
 */
export async function callApi(endpoint, method, data) {
    const apiUrl = `${API_BASE_URL}${endpoint}`;
    const token = load("accessToken");

    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        },
    };

    if (data) {
        requestOptions.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(apiUrl, requestOptions);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// export async function fetchPosts() {
//     const endpoint = "/social/posts/?_author=true";
//     const method = "GET";

//     try {
//         const response = await callApi(endpoint, method);
//         console.log(response);
//         // Use the response data here
//     } catch (error) {
//         console.error("API Error:", error);
//     }
// }

// fetchPosts()

export async function createPost(postData){
    const endpoint = "/social/posts";
    const method = "POST";
  
    try {
        const response = await callApi(endpoint, method, postData) ;
        console.log(response);
        // Use the response data here
    } catch (error) {
        console.error("API Error:", error);
    }
}
createPost()












// const endpoint1 = "/some/endpoint";
// const result1 = await callApi(endpoint1, "GET");
// console.log(result1);


// // Example 2: Making a POST request to a different endpoint with data
// const endpoint2 = "/another/endpoint";
// const postData2 = { key: "value" };
// const result2 = await callApi(endpoint2, "POST", postData);
// console.log(result2);