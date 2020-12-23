import axios from "axios";

export const getAlbums=()=>{
    return axios.get("https://jsonplaceholder.typicode.com/albums");
}

export const getPhotos=(id)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
}