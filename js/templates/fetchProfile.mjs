
// Function to create a card with profile information
export function createProfileCard(profile) {
    // Create a card element for the profile
    const profileCard = document.createElement("div");
    profileCard.classList.add("card", "mb-3");

    // Create a card body for the profile content
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create elements for profile data
    const nameElement = document.createElement("h3");
    nameElement.classList.add("card-title");
    nameElement.textContent = profile.name;

    // Assuming the profile.avatar is an image URL
    if (profile.avatar) {
        const avatarElement = document.createElement("img");
        avatarElement.classList.add("rounded-circle");
        avatarElement.width = 70;
        avatarElement.height = 70;
        avatarElement.src = profile.avatar;
        avatarElement.alt = "Profile Avatar";
        cardBody.append(avatarElement);
    }

    // Append the name to the card body
    cardBody.append(nameElement);

    // Append the card body to the profile card
    profileCard.append(cardBody);

    return profileCard;
}

export function renderProfileCard(profile, parent) {
    parent.append(createProfileCard(profile))
}

export function renderProfileCards(profileList, parent){
    parent.append(...profileList.map(createProfileCard))
}
