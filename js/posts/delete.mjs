import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";



export async function removePost(id) {
    const updatePostUrl = `${API_BASE_URL}/social/posts/${id}`;
    const token = load("accessToken");

    if (!id) {
        throw new Error("Delete requires a postID");
    }
    
    try{
    const response = await fetch(updatePostUrl, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,  
        },
    })

    const post = await response.json()
    console.log(post)
    console.log("post is deleted")

    return post;
  
    
    }catch(error){
        console.log(error)
    }
}