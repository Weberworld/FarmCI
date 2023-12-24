import axios from "axios"


const axios_client = axios.create(
    {
        baseURL: "http://127.0.0.1:8000/backend_operations/",
    }
);

function getHeader() {
    const token = localStorage.getItem("farmcitoks");
    return { 
        "Content-Type": "application/json",
        Authorization: 'Token ' + token 
    }
}


export { axios_client, getHeader }