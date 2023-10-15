import { updatePost } from "../../posts/update.mjs"; 

export async function handleEditButtonClick(postData) {
    const confirmation = window.confirm("Are you sure you want to edit this post?");
    
    if (confirmation) {
      try { 
        const postId = postData.id;

        window.location.href = `/profile/edit/index.html?id=${postId}`;

        const editedPost = await updatePost(postData); 

        if (editedPost) {
          updatePostInUI(editedPost);
        }
    
        window.location.reload();
      } catch (error) {
        console.log("Error editing post:", error);
      }
    } else {
      // If the user clicks Cancel, do nothing
    }
  }
  
  function updatePostInUI(updatedPost) {
    console.log("Updated post in UI:", updatedPost);
  }



