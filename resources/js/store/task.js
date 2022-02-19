import api from '../api'

const state = {
    tasks: []
};

const getters = {
    tasks: state => state.tasks,
};

const mutations = {
    SET_TASKS(state, payload){
        state.tasks = payload;
    }
};

const actions = {
    async getTasksForAuthenticatedUser({ commit }){
        const response = await api.get(route('api.tasks.index'));
        commit('SET_TASKS', response.data.data);
    }
};

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
