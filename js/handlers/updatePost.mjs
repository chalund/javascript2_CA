//not in use yet

import { updatePost } from "../posts/update.mjs"; 

export function createPostFormListener() {
    const form = document.querySelector('#updatePostForm');

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
        
             //get all teh data from the form
            const form = event.target
            const formData = new FormData(form);
            const updatePost = Object.fromEntries(formData);
            updatePost.id = id;


            console.log(updatePost)
            console.log("updateForm works")
        
            //send to API
            updatePost(updatePost)
        });
    }
}