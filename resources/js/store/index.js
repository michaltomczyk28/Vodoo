import {createStore} from "vuex";
import auth from "./auth";
import task from './task'
import notification from "./notification";

const store = createStore({
    actions: {
        resetAll({commit}){
            commit('task/RESET');
        }
    },
    modules: {
        auth,
        task,
        notification
    }
})

export default store;
