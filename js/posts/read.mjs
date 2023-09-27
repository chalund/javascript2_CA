import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";



export async function getPosts() {
    const updatePostUrl = `${API_BASE_URL}/social/posts/`;
    const token = load("accessToken");

    try{
    const response = await fetch(updatePostUrl, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,  
        },
    })

    const post = await response.json()
    console.log(post)
   
    return post;
  
    
    }catch(error){
        console.log(error)
    }
}

export async function getPost(id) {
    const getPostUrl = `${API_BASE_URL}/social/posts/${id}`;
    const token = load("accessToken");

    if (!id) {
        throw new Error("Get requires a postID");
    }

    try{
    const response = await fetch(getPostUrl, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,  
        },
    })

    const post = await response.json()
    console.log(post)
   
    return post;
  
    
    }catch(error){
        console.log(error)
    }
}