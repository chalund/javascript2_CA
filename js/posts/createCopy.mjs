import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs"; 


export async function createPost(postData) {
    const createPostUrl = `${API_BASE_URL}/social/posts`;
    const token = load("accessToken")

    try{
    const response = await fetch(createPostUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
            
        },
        body: JSON.stringify(postData),
    })

    const post = await response.json()
    console.log(post)

    return post;
    
    }catch(error){
        console.log(error)
    }
}



// import { API_BASE_URL } from "../constants.mjs";
// import { load } from "../storage/index.mjs";

// export async function createPost(postData) {
//     // Define the API endpoint URL for creating posts
//     const createPostUrl = `${API_BASE_URL}/social/posts`;

//     // Load the access token from your storage (assuming you have a function for this)
//     const token = load("accessToken");

//     // Create a request body object with the post data
//     const requestBody = {
//         title: postData.title, // Required property
//         body: postData.body,   // Optional property
//         media: postData.media  // Optional property (must be a publicly accessible URL)
//     };

//     try {
//         // Send a POST request to the API
//         const response = await fetch(createPostUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 "Authorization": `Bearer ${token}`
//             },
//             body: JSON.stringify(requestBody)
//         });


//         // Parse the response JSON data (the newly created post)
//         const createdPost = await response.json();
//         return createdPost;
//     } catch (error) {
//         // Handle errors (e.g., network issues or server errors)
//         console.error(error);
//         throw error;
//     }
// }





