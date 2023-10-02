import { createPost } from "../posts/create.mjs";

export function createPostFormListener() {
    const form = document.querySelector('#createPostForm');

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
        
             //get all teh data from the form
            const form = event.target
            const formData = new FormData(form);
            const postData = Object.fromEntries(formData);

            console.log(postData)
            console.log("createForm works")
        
            //send to API
            createPost(postData)
        });
    }
}




