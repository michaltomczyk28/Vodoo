import axios from 'axios';

axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("authToken");

const state = {
    user: null
};

const mutations = {
    SET_USER(state, payload){
        state.user = payload;
    }
}

const getters = {
    isLoggedIn( state ){
        return state.user !== null;
    }
}

const actions = {
    async getAuthenticatedUser({ commit }){
        try{
            const response = await axios.get(route('api.auth.user'));
            const { data : user} = response;

            commit('SET_USER', user);
        } catch {
            localStorage.removeItem('authToken');
        }
    },
    async register({ commit }, payload) {
        const response = await axios.post(route('api.auth.register'), payload);
        const { user, token } = response.data;

        commit('SET_USER', user);
        localStorage.setItem('authToken', token);
    },

    async login({ commit }, payload){
        const response = await axios.post(route('api.auth.login'), payload);
        const { user, token } = response.data;

        commit('SET_USER', user);
        localStorage.setItem('authToken', token);
    },
    async logout({ commit }){
        const response = await axios.post(route('api.auth.logout'));

        commit('SET_USER', null);
        localStorage.removeItem('authToken');
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

