import { getPostsWithAuthor } from "../posts/get.mjs";
import { postTemplate } from "../templates/fetchAllPost.mjs";
const filterPostContainer = document.querySelector("#post")

export async function fetchAndFilterPosts() {
  try {
    const posts = await getPostsWithAuthor(); 

    const filterBtn = document.querySelectorAll(".dropdown-item");
    filterBtn.forEach((tab) => {
      tab.addEventListener("click", () => {
        filterBtn.forEach((tab) => {
          tab.classList.remove("active");
        });

        tab.classList.add("active");

        const tabVal = tab.getAttribute("data-filter")
        if (tabVal === "popular") {
            filterPopular(posts);
          } else if (tabVal === "postWithImages") {
            filterPostsWithImages(posts);
          } else if (tabVal === "updatedPosts") {
            filterUpdatedPosts(posts);
          } else if (tabVal === "viewAll") {
            showAllPosts(posts);
          }
      });
    });
    // console.log(posts);
    return posts;

  } catch (error) {
    console.log("Error fetching posts:", error);
    throw error; 
  }
}

export function createTitleElement(title) {
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("card", "text-center", "mb-3", "bg-primary", "text-white");

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  titleDiv.append(titleElement);
  return titleDiv;
}

export function filterPopular(posts) {
  const popular = posts.filter((currentPost) => {
    const hasReactions = currentPost._count.reactions > 0;
    return hasReactions;
  });
// console.log("Liked Posts:", popular);
  filterPostContainer.innerHTML = " ";

  const titleDiv = createTitleElement("Popular");
  filterPostContainer.append(titleDiv);
 
  popular.forEach((post) => {
      const postElement = postTemplate(post);
      filterPostContainer.append(postElement); 
})
}

export function filterPostsWithImages(posts) {
  const postsWithImages = posts.filter((currentPost) => {
    const hasImage = !!currentPost.media;
    return hasImage;
  });
  // console.log("Posts with Images:", postsWithImages);
  filterPostContainer.innerHTML = " ";

  const titleDiv = createTitleElement("Post with Images");
  filterPostContainer.append(titleDiv);
 
  postsWithImages.forEach((post) => {
      const postElement = postTemplate(post);
      filterPostContainer.append(postElement);
})
}

export function filterUpdatedPosts(posts) {
    const updatedPosts = posts.filter((currentPost) => {
        const createdTime = new Date(currentPost.created).getTime();
        const updatedTime = new Date(currentPost.updated).getTime();
        const areTimesDifferent = createdTime !== updatedTime;
        return areTimesDifferent;
  });
// console.log("Post with update", updatedPosts);
  filterPostContainer.innerHTML = " ";

  const titleDiv = createTitleElement("Updated Posts");
  filterPostContainer.append(titleDiv);
 
  updatedPosts.forEach((post) => {
    const postElement = postTemplate(post);
    filterPostContainer.append(postElement);
})
}

export function showAllPosts(posts) {
  console.log("All Posts:", posts);
  filterPostContainer.innerHTML = "";
  posts.forEach((post) => {
    const postElement = postTemplate(post);
    filterPostContainer.append(postElement);
  });
}

fetchAndFilterPosts();