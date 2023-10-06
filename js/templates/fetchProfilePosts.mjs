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

    const postMedia = document.createElement("img");
            // Check if an image is provided
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
    postContentDiv.append(postMedia);

    // Create a div to hold the like and comment buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("d-flex", "justify-content-end", "px-3");


    // Create the like button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.id = "deleteBtn";
    deleteButton.textContent = "Delete";
    deleteButton.id = `deleteBtn${postData.id}`;
  

    // Create the comment button
    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-success", "mx-3");
    editButton.id = "editBtn";
    editButton.textContent = "Edit";
    editButton.id = `editBtn${postData.id}`

        // Add click event listeners for edit and delete buttons
        editButton.addEventListener('click', () => {
            // Handle edit action
            console.log('Edit button clicked for post ID:', post.id);
        });
    
        deleteButton.addEventListener('click', () => {
            // Handle delete action
            console.log('Delete button clicked for post ID:', post.id);
        });



    // Append the like and comment buttons to the buttonsDiv
    buttonsDiv.append(editButton);
    buttonsDiv.append(deleteButton);

    // Append all sections to the card body
    cardBody.append(postContentDiv);
    cardBody.append(buttonsDiv);

    // Append the card body to the post card
    postCard.append(cardBody);

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





