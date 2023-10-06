import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";

window.addEventListener('DOMContentLoaded', async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const postId = queryParams.get('id');
    if (postId) {
      await getPost(postId);
    }
  });

export async function getPost(id) {
    const getPostUrl = `${API_BASE_URL}/social/posts/${id}`;
    const token = load("accessToken");

    try{
    const response = await fetch(getPostUrl, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,  
        },
    })

    const postData = await response.json();
    console.log(postData)



    const postDetailsContainer = document.getElementById('post-details');
    postDetailsContainer.innerHTML = `
        <div class="card">
            <h2>${postData.title}</h2>
            ${postData.media ? `<img src="${postData.media}" alt="Post Image">` : ''}
            <p>${postData.body}</p>
            <p>${postData.tags}</p>
        </div>
    `;
  
    
    }catch(error){
        console.log(error)
    }
}


