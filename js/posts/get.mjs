import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";



export async function getPosts() {
    const updatePostUrl = `${API_BASE_URL}/social/posts`;
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

export async function getPostsWithAuthor() {
    const updatePostUrl = `${API_BASE_URL}/social/posts/?_author=true`;
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

//need to change /cha to user

export async function getPostsUser() {
    const postUserUrl = `${API_BASE_URL}/social/profiles/cha/posts`;
    const token = load("accessToken");

    try{
    const response = await fetch(postUserUrl, {
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

// export async function getPostsByUser(username) {
//     const postUserUrl = `${API_BASE_URL}/social/profiles/${username}/posts`;
//     const token = load("accessToken");

//     try {
//         const response = await fetch(postUserUrl, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 "Authorization": `Bearer ${token}`,
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch user posts');
//         }

//         const posts = await response.json();
//         console.log(posts);

//         return posts;
//     } catch (error) {
//         console.error(error);
//         throw error; // Re-throw the error for handling at a higher level
//     }
// }













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