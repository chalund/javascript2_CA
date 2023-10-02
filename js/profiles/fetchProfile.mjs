import { getProfiles } from "./getProfile.mjs"; 

export async function fetchAndDisplayProfiles() {
    try {
        const profiles = await getProfiles();
        console.log("fetched profiles:", profiles)

        profiles.forEach(profile => {
            console.log("Username:", profile.name);
            console.log("Avatar:", profile.avatar);
            // Add more profile fields as needed
        });

    } catch (error) {
        console.log(error)
    }
}
fetchAndDisplayProfiles()

