import { getPostsWithAuthor } from "./posts/get.mjs";
import { postTemplate } from "./templates/fetchAllPost.mjs";
const filterPostContainer = document.querySelector("#filterPost")



// Function to fetch and filter posts
export async function fetchAndFilterPosts() {
  try {
    const posts = await getPostsWithAuthor(); // Fetch posts

    // Event listener for the tabs
    const tabs = document.querySelectorAll(".dropdown-item");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove the "active" class from all tabs
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });

        // Add the "active" class to the clicked tab
        tab.classList.add("active");

        // Get the data-filter attribute of the clicked tab
        const tabVal = tab.getAttribute("data-filter");

        // Call the corresponding filtering function based on the data-filter value
        if (tabVal === "likedPost") {
            filterLikedPosts(posts);
          } else if (tabVal === "postWithImages") {
            filterPostsWithImages(posts);
          } else if (tabVal === "updatedPosts") {
            filterUpdatedPosts(posts);
          } else if (tabVal === "viewAll") {
            showAllPosts(posts);
          }
      });
    });

    // Handle the fetched posts here
    console.log(posts);
    // Call the functions to filter and display posts
    return posts; // You can return the posts if needed
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; // Rethrow the error if needed
  }
}

// Function to filter and display liked posts
export function filterLikedPosts(posts) {
  const likedPosts = posts.filter((currentPost) => {
    const hasReactions = currentPost._count.reactions > 0;
    return hasReactions;
});

console.log("Liked Posts:", likedPosts);

  filterPostContainer.innerHTML = " ";
 
    // Append the liked posts to the filterpostContainer
    likedPosts.forEach((post) => {
        const postElement = postTemplate(post);
        filterPostContainer.append(postElement);
    
  // Implement logic to display liked posts as needed

})
}

// Function to filter and display posts with images
export function filterPostsWithImages(posts) {
  const postsWithImages = posts.filter((currentPost) => {
    const hasImage = !!currentPost.media;
    return hasImage;
  });
  console.log("Posts with Images:", postsWithImages);
  filterPostContainer.innerHTML = " ";
 
  // Append the liked posts to the filterpostContainer
  postsWithImages.forEach((post) => {
      const postElement = postTemplate(post);
      filterPostContainer.append(postElement);
  // Implement logic to display posts with images as needed
})
}

export function filterUpdatedPosts(posts) {
    const updatedPosts = posts.filter((currentPost) => {
        const createdTime = new Date(currentPost.created).getTime();
        const updatedTime = new Date(currentPost.updated).getTime();
        const areTimesDifferent = createdTime !== updatedTime;
        return areTimesDifferent;
});
console.log("Post with update", updatedPosts);
filterPostContainer.innerHTML = " ";
 
// Append the liked posts to the filterpostContainer
updatedPosts.forEach((post) => {
    const postElement = postTemplate(post);
    filterPostContainer.append(postElement);

// Implement logic to display liked posts as needed

})
}


// Function to show all posts
export function showAllPosts(posts) {
    console.log("All Posts:", posts);
    // Implement logic to display all posts as needed
    
    // Clear the existing content in the filterpostContainer
    filterPostContainer.innerHTML = "";
  
    // Append all posts to the filterpostContainer
    posts.forEach((post) => {
      const postElement = postTemplate(post);
      filterPostContainer.append(postElement);
    });
  }

// Call the fetchAndFilterPosts function to start the process
fetchAndFilterPosts();