
console.log("feed.mjs")

import { getPostsWithAuthor } from "./posts/get.mjs"; 
import { renderPostTemplates } from "./templates/fetchAllPost.mjs"; 


export async function getPostTemplate() {
    const posts = await getPostsWithAuthor()
    console.log(posts)
    const container = document.querySelector("#post")
    renderPostTemplates(posts,container)
}
getPostTemplate()





// import { removePost } from "./posts/index.mjs";
// removePost(2130)








//search function
import { search } from "./search.mjs";

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", (event) => {
    event.preventDefault();
    const value = event.target.value;
    const result = search(value)

    
    console.log({result})

    const searchResult = document.querySelector("#searchResult");
    searchResult.innerHTML = JSON.stringify(result)
})

    // //display data in the UI//display data in the userImage
    // const searchBox = document.querySelector("#searchResult")
    // searchBox.innerHTML = '';
    // if(!result.length) {
    //     searchBox.innerHTML = 'No record is found'
    // }
    // result.map(({title, body}, index) => {
    //     searchBox.innerHTML = JSON.stringify({title,body })
    // })

