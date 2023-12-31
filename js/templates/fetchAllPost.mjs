export function postTemplate(postData) {

const container = document.createElement("div");
container.classList.add("card")

const cardContainer = document.createElement("div");
cardContainer.classList.add("row");

const profileCard = document.createElement("div");
profileCard.classList.add("profile-card", "col-sm-4");

const userDiv = document.createElement("div");
userDiv.classList.add("card-body", "text-center");
profileCard.append(userDiv)

const userImage = document.createElement("img");
userImage.classList.add("rounded-circle");
userImage.alt = "Profile Avatar";
userImage.width = "60";
userDiv.append(userImage);
userImage.height = "60";
   
    if (postData.author.avatar) {
       userImage.src = postData.author.avatar;
    } else {
       userImage.src = "../images/person.png"
    }

const userName = document.createElement("p");
userName.classList.add("card-title", "mt-3");
userName.textContent = postData.author.name;
userDiv.append(userName);
  
const followButton = document.createElement("button");
followButton.classList.add("btn", "btn-success");
followButton.id = "follow-btn";
followButton.textContent = "Follow";
userDiv.append(followButton)

const postCard = document.createElement("div");
postCard.classList.add("post-card", "col-sm-8", "interactive");

const cardBody = document.createElement("div");
cardBody.classList.add("card-body");
postCard.append(cardBody)

    if (postData.media) {
        const imagePost = document.createElement("img");
        imagePost.classList.add("card-img-top");
        imagePost.src = postData.media;
        imagePost.alt = "Post Image";
        imagePost.style.maxWidth = "200px";
        cardBody.append(imagePost);
    }
    
const titlePost = document.createElement("h2");
titlePost.classList.add("card-title");
titlePost.textContent = postData.title;
cardBody.append(titlePost);

const bodyElement = document.createElement("p");
bodyElement.classList.add("card-text");
bodyElement.textContent = postData.body;
cardBody.append(bodyElement);

const tagsElement = document.createElement("p");
tagsElement.classList.add("card-text");
tagsElement.textContent = postData.tags;
cardBody.append(tagsElement);

const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("d-flex", "justify-content-end", "px-3");
postCard.append(buttonsDiv)

const likeButton = document.createElement("button");
likeButton.classList.add("btn", "btn-success");
likeButton.id = "like-btn";
likeButton.textContent = "Like";
buttonsDiv.append(likeButton)

const commentButton = document.createElement("button");
commentButton.classList.add("btn", "btn-success", "ms-2");
commentButton.id = "comment-btn";
commentButton.textContent = "Comment";
buttonsDiv.append(commentButton);

cardContainer.append(profileCard);
cardContainer.append(postCard)

container.append(cardContainer)

    container.addEventListener("click", async () => {
        const postId = postData.id;
        window.location.href = `/post/index.html?id=${postId}`; 
});

return container;
}


export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent){
const postHtmlElement = postDataList.map(postTemplate)
parent.append(...postHtmlElement)
}


