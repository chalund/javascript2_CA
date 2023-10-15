import { updatePost } from "../posts/update.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#updatePostForm');

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formElements = event.target;

        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;
        const tags = document.getElementById('tags').value;
        const media = document.getElementById('media').value;

        const post = {
            title,
            body,
            tags: [tags],
            media,
        }
        post.id = id;
        updatePost(post)
    });
});