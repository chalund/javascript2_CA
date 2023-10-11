import { createPostFormListener } from "./handlers/form/createPost.mjs"; 
createPostFormListener()

import { logout } from "./handlers/logout.mjs";
logout()

// import { removePost } from "./posts/delete.mjs";
// removePost(2877)


import { getPostsUser } from "./posts/get.mjs"; 
import { renderPostTemplates } from "./templates/fetchProfilePosts.mjs";

export async function getPostTemplate() {
    const posts = await getPostsUser()
    const container = document.querySelector("#profilePosts")

    if (posts.length === 0) {
        // If there are no posts, display a message
        const messageElement = document.createElement("h3");
        messageElement.classList.add("card", "mt-3", "text-center", "p-5")
        messageElement.textContent = "You have no posts in your profile.";
    
        // Append the message element to the container
        container.appendChild(messageElement);
      } else {
        // If there are posts, render them
        renderPostTemplates(posts, container);
      }
    }
 
getPostTemplate()









  








