import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";

export async function updatePost(postData) {
    const updatePostUrl = `${API_BASE_URL}/social/posts/${postData.id}`;
    const token = load("accessToken");
    
    try{
    const response = await fetch(updatePostUrl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
            
        },
        body: JSON.stringify(postData),
    })
        if (response.ok) {
            const post = await response.json();
            // console.log(post);
            window.location.replace("/profile/index.html");
            return post;
        } else {
            console.error("Failed to update the post.");
            return null;
        }

    }catch(error){
        console.log(error)
    }
}