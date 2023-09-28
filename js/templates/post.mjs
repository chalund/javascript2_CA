

export function postTemplate(postData) {
    // Create a card element for the post
    const postCard = document.createElement("div");
    postCard.classList.add("card", "mb-3");

    // Create a card body for the post content
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create elements for various post content
    const titleElement = document.createElement("h2");
    titleElement.classList.add("card-title");
    titleElement.textContent = postData.title;

    const bodyElement = document.createElement("p");
    bodyElement.classList.add("card-text");
    bodyElement.textContent = postData.body;

    const tagsElement = document.createElement("div");
    tagsElement.classList.add("card-text");
    tagsElement.textContent = postData.tags;

    // Check if an image is provided
    if (postData.media) {
        const imageElement = document.createElement("img");
        imageElement.classList.add("card-img-top");
        imageElement.src = postData.media;
        imageElement.alt = "Post Image";

        // Set a maximum width for the image using CSS
        imageElement.style.maxWidth = "200px";

        // Center-align the image within its container
        imageElement.style.display = "block";
        imageElement.style.margin = "0 auto";

        // Append the image to the card body
        cardBody.appendChild(imageElement);
    }


    // Append content elements to the card body
    cardBody.appendChild(titleElement);
    cardBody.appendChild(bodyElement);
    cardBody.appendChild(tagsElement);

    // Append the card body to the post card
    postCard.appendChild(cardBody);

    return postCard;
}


export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate))
}




