import axios from 'axios';

const state = {
    userData: {}
};

const mutations = {
    SET_USER_DATA(state, userData){
        state.userData = userData;
    }
}

const actions = {
    async register({ commit }, userData) {
        const response = await axios.post(route('api.register'), userData);
        const { user, token } = response.data;

        commit('SET_USER_DATA', user);
        localStorage.setItem('authToken', token);
    },

    async login({ commit }, userData){
        const response = await axios.post(route('api.login'), userData);
        const { user, token } = response.data;

        commit('SET_USER_DATA', user);
        localStorage.setItem('authToken', token);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

