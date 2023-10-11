import { createPost } from "../posts/create.mjs";

export function createPostFormListener() {
    const form = document.querySelector("#createPostForm");
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




        // const form = event.target;
        // const formData = new FormData(form);
        // const post = {
        //     title: formData.get("title"),
        //     body: formData.get("body"),
        //     media: formData.get("media"),
        //     //tags
         
             
        // };

        console.log(post);
        console.log("createPost form works");

        createPost(post);
    });
}


