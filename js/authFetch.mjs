// import { load } from "./storage/index.mjs";

// export function headers() {
//     const token = load("accessToken");

//     return {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`,
//     }
// }

// export async function authFetch(url, options) {
//     return fetch(url, {
//         ...options,
//         headers: headers()
//     });
// }

// import { API_BASE_URL } from "../constants.mjs"; 
// import { authFetch } from "../authFetch.mjs";



// export async function createPost(postData) {
//     const createPostUrl = `${API_BASE_URL}/social/posts`;
  

//     const response = await authFetch(createPostUrl, {
//         method: "POST",
//         body: JSON.stringify(postData),
//     })
//     const post = await response.json()

//     console.log(post)
  
// }