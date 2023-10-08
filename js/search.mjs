//1. source of posts
//2. param use a a query
//3. make a function



// import { getPostsWithAuthor } from "./posts/get.mjs" 
// //1. posts
// const posts = await getPostsWithAuthor()
// console.log("fetched post",posts)

// //write search function
// export function search(param) {
//     const filteredPosts = posts.filter((element, index) =>{

//     if (element.title.includes(param) || element.body.includes(param))
//     return element

//     })
//     console.log("filtered posts", filteredPosts)
// }





import { getPostsWithAuthor } from "./posts/get.mjs" 

export async function search(param) {
    try {
    // Fetch the posts.
    const posts = await getPostsWithAuthor();
    console.log("Fetched posts:", posts);

    // Perform the search.
    const filteredPosts = posts.filter((element, index) =>{

    if (element.title.includes(param) || element.body.includes(param))
        return element
    })
    console.log("filtered posts", filteredPosts)
   

    } catch(error) {
    console.log("error fetching or searching posts", error)
    }
}