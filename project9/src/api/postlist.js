import axios from "axios";

export const userPost=()=>{
    return axios.get("https://jsonplaceholder.typicode.com/posts");
}

export const userList=(id)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}