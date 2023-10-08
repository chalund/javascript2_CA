import { removePost } from "../../posts/delete.mjs";

export async function handleDeleteButtonClick(postData) {
    // Show a confirmation modal using window.confirm
    const confirmation = window.confirm("Are you sure you want to delete this post?");
    if (confirmation) {
      // If user confirms (clicks OK), proceed with deletion
      try {
        // Call the removePost function to delete the post
        const postId = postData.id;
        const deletedPost = await removePost(postId);
  
        // Handle the response, e.g., remove the post element from the UI
        if (deletedPost) {
          // Assuming you have a function to remove the post element
          removePost(postId);
        }

        // Reload the page after successful deletion
        window.location.reload();

      } catch (error) {
        console.log("Error deleting post:", error);
      }
    } else {
      // If the user clicks Cancel, do nothing
    }
  }
  