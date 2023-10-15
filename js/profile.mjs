import { createPostFormListener } from "./handlers/form/createPost.mjs"; 
import { logout } from "./handlers/logout.mjs";
import { getPostsUser } from "./posts/get.mjs"; 
import { renderPostTemplates } from "./templates/fetchProfilePosts.mjs";


export async function getPostTemplate() {
    const posts = await getPostsUser()
    const container = document.querySelector("#profilePosts")
  // console.log(posts)
    if (posts.length === 0) {
        const messageElement = document.createElement("h3");
        messageElement.classList.add("card", "mt-3", "text-center", "p-5")
        messageElement.textContent = "You have no posts in your profile.";

        container.append(messageElement);
      } else {
        renderPostTemplates(posts, container);
      }
    }
 
getPostTemplate()

logout()
createPostFormListener()









  








