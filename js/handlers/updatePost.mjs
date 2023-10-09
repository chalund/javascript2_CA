console.log("update form");

import { updatePost } from "../posts/update.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#updatePostForm');

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const post = {
            title: formData.get("title"),
            body: formData.get("body"),
            media: formData.get("media"),
            tags: formData.get("tags")   
        };
        post.id = id;
     
        console.log(post);
        console.log("updateForm works");
        updatePost(post)
    });
});
