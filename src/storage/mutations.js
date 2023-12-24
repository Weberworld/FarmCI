
export function setErrorMessage(state, new_data){

    state.error_message.message = JSON.stringify(new_data['message']);
    state.error_message.loading = false;

}


export function setToken(state, data){
    localStorage.setItem("farmcitoks", JSON.stringify(data["token"]));
}


export function setProductsList(state, data){
    state.products = data;
}