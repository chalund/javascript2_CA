import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";

export async function getProfiles() {
    const getProfileUrl = `${API_BASE_URL}/social/profiles/`;
    const token = load("accessToken");

    try{
    const response = await fetch(getProfileUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
    });
  

    const profile = await response.json()
    // console.log(profile)
   
    return profile;
  
    
    }catch(error){
        console.log(error)
    }
}