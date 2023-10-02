// fetch post
// import * as postMethods from "./posts/index.mjs";
// import * as templates from "./templates/index.mjs"

// export async function getPostTemplate() {
//     const posts = await postMethods.getPosts()
//     const container = document.querySelector("#post")
//     templates.renderPostTemplates(posts,container)
// }
// getPostTemplate()

import { getPosts } from "./posts/read.mjs";
import { renderPostTemplates } from "./templates/fetchPost.mjs";  

export async function getPostTemplate() {
    const posts = await getPosts()
    const container = document.querySelector("#post")
    renderPostTemplates(posts,container)
}
getPostTemplate()




import { toggleFollowButton } from "./followBtn.mjs";
toggleFollowButton("follow-btn")

// import { getProfiles } from "./profiles/getProfile.mjs";
// import { renderProfileCards } from "./templates/fetchProfile.mjs";

// export async function getProfileCard() {
//     const postProfile = await getProfiles();
//     console.log(postProfile)
//     const container = document.querySelector("#post")
//     renderProfileCards(postProfile, container)
// }
// getProfileCard()


// import { removePost } from "./posts/index.mjs";
// removePost(2130)