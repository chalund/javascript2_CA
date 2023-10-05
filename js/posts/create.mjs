import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs"; 

export async function createPost(postData) {
    console.log(postData)
    const createPostUrl = `${API_BASE_URL}/social/posts`;
    const token = load("accessToken")
    console.log(createPostUrl)


    try{
    const response = await fetch(createPostUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
            
        },
        body: JSON.stringify(postData),
    })
    console.log(response)


    const post = await response.json()
    console.log(post)

    
    }catch(error){
        console.log(error)
    }
}
