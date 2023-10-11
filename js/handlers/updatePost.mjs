console.log("update form");


import { updatePost } from "../posts/update.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#updatePostForm');

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log(event.target)
        const formElements = event.target;
        console.log({formElements})

        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;
        const tags = document.getElementById('tags').value;
        const media = document.getElementById('media').value;

        console.log({title});
        const post = {
            title,
            body,
            tags: [tags],
            media,
        }

        post.id = id;
     
        console.log(post);
        console.log("updateForm works");
        updatePost(post)

    });
});



