import { createPost } from "../../posts/create.mjs";

export function createPostFormListener() {
    const form = document.querySelector("#createPostForm");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formElements = event.target;

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

        createPost(post)
        .then(() => {
            window.location.reload();
        })
        .catch(error => {
            console.log("Error creating post:", error);
        });
    });
}


