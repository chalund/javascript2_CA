import { handleDeleteButtonClick } from "../handlers/buttons/deleteBtn.mjs";
import { handleEditButtonClick } from "../handlers/buttons/editBtn.mjs";


export function postTemplate(postData) {

    const postCard = document.createElement("div");
    postCard.classList.add("card", "mt-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const postContentDiv = document.createElement("div");
    postContentDiv.classList.add("pt-4", "mx-4");

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
        imagePost.style.maxWidth = "200px";
        imagePost.style.display = "block";
        imagePost.style.margin = "0 auto";

        cardBody.append(imagePost);
    }

    postContentDiv.append(postTitle);
    postContentDiv.append(postBody);
    postContentDiv.append(postTags);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("d-flex", "justify-content-end", "px-3");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.id = `deleteBtn${postData.id}`;

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-success", "mx-3", "edit-btn");
    editButton.textContent = "Edit";
    editButton.id = `editBtn${postData.id}`

    buttonsDiv.append(editButton);
    buttonsDiv.append(deleteButton);

    deleteButton.addEventListener("click", () => {
      handleDeleteButtonClick(postData);
    });

    editButton.addEventListener("click", () => {
      handleEditButtonClick(postData)
    });

    postCard.append(cardBody);
    postCard.append(postContentDiv);
    postCard.append(postContentDiv);
    postCard.append(buttonsDiv);


    cardBody.addEventListener("click", async () => {
        const postId = postData.id;
   
        window.location.href = `/post/index.html?id=${postId}`;
    });

    return postCard;
}

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate))
}