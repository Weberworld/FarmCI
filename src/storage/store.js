import { createStore } from "vuex";
import { loginAction, getProductsList } from "./actions";
import state from "./states";
import { setErrorMessage, setToken, setProductsList } from "./mutations";



const store = createStore({
    state: state,
    mutations: {setErrorMessage, setToken, setProductsList},
    actions: {loginAction, getProductsList},

});

export default store