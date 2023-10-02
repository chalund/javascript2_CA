//follow/unfollow btn
export function toggleFollowButton(buttonId) {
    const followButton = document.getElementById(buttonId);

    if (!followButton) {
        console.error(`Button with ID '${buttonId}' not found.`);
        return;
    }

    followButton.addEventListener("click", function () {
        if (followButton.classList.contains("btn-success")) {
            // If the button has the "btn-success" class, change it to "btn-warning"
            followButton.classList.remove("btn-success");
            followButton.classList.add("btn-danger");
            followButton.textContent = "Unfollow";
        } else {
            // If the button has the "btn-warning" class, change it to "btn-success"
            followButton.classList.remove("btn-danger");
            followButton.classList.add("btn-success");
            followButton.textContent = "Follow";
        }
    });
}
