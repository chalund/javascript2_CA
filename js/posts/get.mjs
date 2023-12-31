import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";

async function fetchAPI(endpoint, queryParameters = {}) {
    const token = load("accessToken");
    const queryParams = new URLSearchParams(queryParameters);
    const url = `${API_BASE_URL}/${endpoint}?${queryParams.toString()}`;

    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error(`Failed to fetch data from ${url}`);
            return null;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Function to get all posts
export async function getPosts() {
    return fetchAPI("social/posts");
}

// Function to get posts with author info
export async function getPostsWithAuthor() {
    return fetchAPI("social/posts", { _author: true });
}

// Function to get posts for a specific user
export async function getPostsUser() {
    const username = load("username");

    if (!username) {
        console.error("User profile not found in local storage. Please log in.");
        return null;
    }

    return fetchAPI(`social/profiles/${username}/posts`);
}

// Function to get a specific post by ID
export async function getPost(id) {
    if (!id) {
        throw new Error("Get requires a postID");
    }

    return fetchAPI(`social/posts/${id}`);
}

// Function to get posts with images
export async function getPostWithImages() {
    return fetchAPI("social/posts_media=true");
}