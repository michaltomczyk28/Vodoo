import api from '../api'

function initialState(){
    return {
        tasks: []
    }
}
const state = initialState();

const getters = {
    tasks: state => state.tasks,
    taskIndex: state => id => state.tasks.findIndex(task => task.id === id),
};

const mutations = {
    SET_TASKS(state, payload){
        state.tasks = payload;
    },
    CREATE_TASK(state, payload){
        state.tasks.unshift(payload);
    },
    TOGGLE_TASK(state, {getters, id}){
        const index = getters.taskIndex(id);
        state.tasks[index].is_done = !state.tasks[index].is_done;

        state.tasks = [...state.tasks];
    },
    DESTROY_TASK(state, {getters, id}){
        const index = getters.taskIndex(id);
        state.tasks.splice(index, 1);
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
    },
    async toggleTask({commit, getters}, id){
        const response = await api.post(route('api.tasks.toggle', {task: id}));
        commit('TOGGLE_TASK', {getters, id});
    },
    async destroyTask({commit, getters}, id){
        const response = await api.delete(route('api.tasks.destroy', {task: id}));
        commit('DESTROY_TASK', {getters, id});
    }
};

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
