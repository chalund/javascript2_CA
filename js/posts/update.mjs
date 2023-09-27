import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";



export async function updatePost(postData) {
    const updatePostUrl = `${API_BASE_URL}/social/posts/${postData.id}`;
    const token = load("accessToken");

    if (!postData.id) {
        throw new Error("Update requires a postID");
    }
    
    try{
    const response = await fetch(updatePostUrl, {
        method: "PUT",
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