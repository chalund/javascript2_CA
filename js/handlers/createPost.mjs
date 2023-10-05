import { createPost } from "../posts/create.mjs";

export function createPostFormListener() {
    const form = document.querySelector("#createPostForm");
    form.addEventListener("submit", async(event) =>{
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());
        console.log(post)
        console.log("createPost form works")

        createPost(post)
    });
}