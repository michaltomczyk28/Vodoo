import {createStore} from "vuex";
import auth from "./auth";
import task from './task'

const store = createStore({
    modules: {
        auth,
        task
    }
})

export default store;
