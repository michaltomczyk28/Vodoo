import api from '../api'
import {List} from "../constants";


function initialState(){
    return {
        tasks: [],
        activeTask: {},
        currentList: List.TODAY
    }
}

const state = initialState();

const getters = {
    tasks: state => state.tasks,
    taskIndex: state => id => state.tasks.findIndex(task => task.id === id),
    activeTask: state => state.activeTask,
    currentList: state => state.currentList
};

const mutations = {
    SET_ACTIVE_TASK(state, payload){
        state.activeTask = payload;
    },
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
    SET_CURRENT_LIST(state, payload){
        state.currentList = payload;
    },
    RESET(state){
        Object.assign(state, initialState());
    }
};

const actions = {
    async getTasks({ state, commit }){
        const {currentList} = state;
        let response;

        if(currentList === List.TODAY)
            response = await api.get(route('api.tasks.index'));
        else if(currentList === List.HISTORY)
            response = await api.get(route('api.tasks.index'), {params: {is_done: 1}});

        commit('SET_TASKS', response.data.data);
    },
    async getHistoricTasks({ commit }){
        const response = await api.get(route('api.tasks.index'), { params: {is_done: 1}});
        commit('SET_TASKS', response.data.data);
    },
    async createTask({commit}, payload){
        const response = await api.post(route('api.tasks.store'), payload);
        commit('CREATE_TASK', response.data.data);

        return response;
    },
    async toggleTask({commit, getters}, id){
        const response = await api.post(route('api.tasks.toggle', {task: id}));
        commit('TOGGLE_TASK', {getters, id});

        return response;
    },
    async findTask({commit}, id){
          const response = await api.get(route('api.tasks.show', {task: id}));
          commit('SET_ACTIVE_TASK', response.data.data);

          return response;
    },
    async updateTask({commit}, {id, value}){
        return await api.put(route('api.tasks.update', {task: id}), value);
    },
    async destroyTask({commit, getters}, id){
        const response = await api.delete(route('api.tasks.destroy', {task: id}));
        commit('DESTROY_TASK', {getters, id});

        return response;
    },
    changeCurrentList({commit}, payload){
        const currentList = payload || List.TODAY;
        commit('SET_CURRENT_LIST', currentList);
    }
};

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
