import {createStore} from "vuex";
import auth from "./auth";
import task from './task'

const store = createStore({
    actions: {
        resetAll({commit}){
            commit('task/RESET');
        }
    },
    modules: {
        auth,
        task
    }
})

export default store;
