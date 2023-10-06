export function postTemplate(postData) {
    const postCard = document.createElement("div")
    postCard.classList.add("card", "mt-3")

    const titlePost = document.createElement("h2");
    titlePost.classList.add("card-title");
    titlePost.textContent = postData.title;
    postCard.append(titlePost);

    if (postData.media) {
        const imagePost = document.createElement("img");
        imagePost.classList.add("card-img-top");
        imagePost.src = postData.media;
        imagePost.alt = "Post Image";

        // Set a maximum width for the image using CSS
        imagePost.style.maxWidth = "200px";

        // Center-align the image within its container
        imagePost.style.display = "block";
        imagePost.style.margin = "0 auto";

        // Append the image to the card body
        postCard.append(imagePost);
    }
  
    const bodyElement = document.createElement("p");
    bodyElement.classList.add("card-text");
    bodyElement.textContent = postData.body;
    postCard.append(bodyElement);
  
    const tagsElement = document.createElement("p");
    tagsElement.classList.add("card-text");
    tagsElement.textContent = postData.tags;
    postCard.append(tagsElement);

         // Add a click event listener to the post card
    postCard.addEventListener("click", async () => {
        const postId = postData.id;
   
        window.location.href = `/post/index.html?id=${postId}`; // Assuming you have a post details page (e.g., post.html)
    });



    return postCard;
}

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate))
}