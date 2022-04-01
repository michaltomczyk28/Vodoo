import api from '../api'

const state = {
    user: null
};

const getters = {
    isLoggedIn( state ){
        return state.user !== null;
    }
};

const mutations = {
    SET_USER(state, payload){
        state.user = payload;
    }
};

const actions = {
    getAuthenticatedUser({ commit }){
        return new Promise(async (resolve, reject) => {
            try{
                if(localStorage.getItem('authToken')){
                    const response = await api.get(route('api.auth.user'));
                    const { data : user} = response;

                    commit('SET_USER', user);
                    resolve(response);
                } else {
                    commit('SET_USER', null);
                    resolve();
                }
            } catch(error) {
                localStorage.removeItem('authToken');
                reject(error);
            }
        })
    },
    async register({ commit }, payload) {
        const response = await api.post(route('api.auth.register'), payload);
        const { user, token } = response.data;

        commit('SET_USER', user);
        localStorage.setItem('authToken', token);

        return response;
    },
    async login({ commit }, payload){
        const response = await api.post(route('api.auth.login'), payload);

        const { user, token } = response.data;

        localStorage.setItem('authToken', token)

        return response;
    },
    async logout({ commit }){
        const response = await api.post(route('api.auth.logout'));

        commit('SET_USER', null);
        localStorage.removeItem('authToken');

        return response;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

