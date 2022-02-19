import api from '../api'

function initialState(){
    return {
        tasks: []
    }
}
const state = initialState();

const getters = {
    tasks: state => state.tasks,
};

const mutations = {
    SET_TASKS(state, payload){
        state.tasks = payload;
    },
    CREATE_TASK(state, payload){
        state.tasks.unshift(payload);
    },
    RESET(state){
        Object.assign(state, initialState());
    }
};

const actions = {
    async getTasksForAuthenticatedUser({ commit }){
        const response = await api.get(route('api.tasks.index'));
        commit('SET_TASKS', response.data.data);
    },
    async createTask({commit}, payload){
        const response = await api.post(route('api.tasks.store'), payload);
        commit('CREATE_TASK', response.data.data);
    }
};

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
