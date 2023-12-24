import  {axios_client, getHeader } from "@/axiosClient"
import router from "@/urls/urlPatterns";

// function removeToken(){
//     localStorage.removeItem("farmcitoks");
// }

export function loginAction({ commit }, credentials) {
    axios_client.post(
        "login",  // Url
        // Post data
        {
            "username": credentials["username"],
            "password": credentials["password"]
        })
        .then(({ data }) => {
            console.log(data);
            commit('setErrorMessage', data)
            
            if (data['success']){
                localStorage.setItem("farmcitoks", (data["token"]));
                // commit('setToken', data)
                router.push({ name: "products" })
                }

        })
        .catch((e) => {
            console.log(e.response.data)
            commit("setErrorMessage", {
                "message": JSON.stringify(e.response.data),
                "loading": false
            })
        })
}


// Get the List of products from server
export function getProductsList({commit}){
    console.log(getHeader());
    const token = localStorage.getItem("farmcitoks");
    const HEADERS = {
        'Authorization': "Token " + token,
        "Content-Type": "application/json"
    }
    axios_client.get("products",{}, {HEADERS})
    .then(({data}) => {
        commit("setProductsList", data)
    })
    .catch((e) => {
        if (e.response.status == 401){
            router.push({name: "login"});
            console.log(e.response);
            // removeToken();
        }
    })
}