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


