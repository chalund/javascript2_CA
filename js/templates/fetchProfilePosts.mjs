import { handleDeleteButtonClick } from "../handlers/buttons/deleteBtn.mjs";
import { handleEditButtonClick } from "../handlers/buttons/editBtn.mjs";

export function postTemplate(postData) {
    // Create a card element for the post
    const postCard = document.createElement("div");
    postCard.classList.add("card", "mt-3");

    // Create a card body for the post content
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create a div to hold the post content
    const postContentDiv = document.createElement("div");
    postContentDiv.classList.add("pt-4", "mx-4");

    // Create elements for post content
    const postTitle = document.createElement("h5");
    postTitle.classList.add("card-title");
    postTitle.id = "title";
    postTitle.textContent = postData.title;

    const postBody = document.createElement("p");
    postBody.classList.add("card-text");
    postBody.textContent = postData.body;

    const postTags = document.createElement("p");
    postTags.classList.add("card-text");
    postTags.textContent = postData.tags;


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
        cardBody.append(imagePost);
    }

    // Append post content elements to the postContentDiv
    postContentDiv.append(postTitle);
    postContentDiv.append(postBody);
    postContentDiv.append(postTags);


    // Create a div to hold the like and comment buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("d-flex", "justify-content-end", "px-3");


    // Create the like button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.id = `deleteBtn${postData.id}`;

    
  

    // Create the comment button
    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-success", "mx-3", "edit-btn");
    editButton.textContent = "Edit";
    editButton.id = `editBtn${postData.id}`

    
    // Append the like and comment buttons to the buttonsDiv
    buttonsDiv.append(editButton);
    buttonsDiv.append(deleteButton);

  // Add a click event listener to the delete button
  deleteButton.addEventListener("click", () => {
    handleDeleteButtonClick(postData); // Call the function to handle delete
  });

  editButton.addEventListener("click", () => {
    handleEditButtonClick(postData)
  });

    


    // Append the card body to the post card
    postCard.append(cardBody);

        // Append all sections to the card body
        postCard.append(postContentDiv);
        postCard.append(postContentDiv);
        postCard.append(buttonsDiv);

    cardBody.addEventListener("click", async () => {
        const postId = postData.id;
   
        window.location.href = `/post/index.html?id=${postId}`; // Assuming you have a post details page (e.g., post.html)
    });

    return postCard;
}


export function renderPostTemplate(postData, parent) {
    const postElement = postTemplate(postData); // Create the post element
    parent.append(postElement); // Append it to the parent
}

export function renderPostTemplates(postDataList, parent) {
    for (const postData of postDataList) {
        renderPostTemplate(postData, parent); // Render each post
    }
}





