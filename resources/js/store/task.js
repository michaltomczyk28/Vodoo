import api from '../api'
import {List} from "../constants";
import dayjs from "dayjs";
import {fixDateIgnoringTimezone} from "../helpers/dateHelper";


function initialState() {
    return {
        tasks: [],
        activeTask: {},
        currentList: List.ALL
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
    SET_ACTIVE_TASK(state, payload) {
        state.activeTask = payload;
    },
    SET_TASKS(state, payload) {
        state.tasks = payload;
    },
    CREATE_TASK(state, payload) {
        state.tasks.unshift(payload);
    },
    TOGGLE_TASK(state, {getters, id}) {
        const index = getters.taskIndex(id);
        state.tasks[index].is_done = !state.tasks[index].is_done;

        state.tasks = [...state.tasks];
    },
    DESTROY_TASK(state, {getters, id}) {
        const index = getters.taskIndex(id);
        state.tasks.splice(index, 1);
    },
    SET_CURRENT_LIST(state, payload) {
        state.currentList = payload;
    },
    RESET(state) {
        Object.assign(state, initialState());
    }
};

const actions = {
    async getTasks({state, commit}) {
        const {currentList} = state;
        let response;

        const todayDate = fixDateIgnoringTimezone(new Date());

        if (currentList === List.ALL) {
            response = await api.get(route('api.tasks.index'));
        } else if (currentList === List.TODAY) {
            const deadline = dayjs(todayDate).format('YYYY-MM-DD');

            response = await api.get(route('api.tasks.index'), {params: {deadline}});
        } else if (currentList === List.THIS_WEEK) {
            const deadlineMin = dayjs(todayDate).day(1).format('YYYY-MM-DD');
            const deadlineMax = dayjs(todayDate).day(7).format('YYYY-MM-DD');

            response = await api.get(route('api.tasks.index'), {params: {deadlineMin, deadlineMax}});
        } else if (currentList === List.HISTORY)
            response = await api.get(route('api.tasks.index'), {params: {is_done: 1}});

        commit('SET_TASKS', response.data.data);
    },
    async getHistoricTasks({commit}) {
        const response = await api.get(route('api.tasks.index'), {params: {is_done: 1}});
        commit('SET_TASKS', response.data.data);
    },
    async createTask({commit, dispatch}, payload) {
        try {
            const response = await api.post(route('api.tasks.store'), payload);
            commit('CREATE_TASK', response.data.data);

            const {message} = response.data;
            dispatch('notification/addNotification', message, {root: true})

            return response;
        } catch (error) {
            const {message} = error.response.data;
            dispatch('notification/addNotification', message, {root: true})
        }
    },
    async toggleTask({commit, getters}, id) {
        const response = await api.post(route('api.tasks.toggle', {task: id}));
        commit('TOGGLE_TASK', {getters, id});

        return response;
    },
    async findTask({commit}, id) {
        const response = await api.get(route('api.tasks.show', {task: id}));

        const deadline = response.data.data.deadline;
        response.data.data.deadline = deadline !== null ? new Date(response.data.data.deadline) : null;

        commit('SET_ACTIVE_TASK', response.data.data);

        return response;
    },
    async updateTask({commit, dispatch}, {id, value}) {
        try {
            const response = await api.put(route('api.tasks.update', {task: id}), value);
            const {message} = response.data;
            dispatch('notification/addNotification', message, {root: true});

            return response;
        } catch (error) {
            const {message} = error.response.data;
            dispatch('notification/addNotification', message, {root: true});
        }
    },
    async destroyTask({commit, getters, dispatch}, id) {
        try {
            const response = await api.delete(route('api.tasks.destroy', {task: id}));
            commit('DESTROY_TASK', {getters, id});

            const {message} = response.data;
            dispatch('notification/addNotification', message, {root: true})

            return response;
        } catch (error) {
            const {message} = error.response.data;
            dispatch('notification/addNotification', message, {root: true})
        }
    },
    changeCurrentList({commit}, payload) {
        const currentList = payload || List.ALL;
        commit('SET_CURRENT_LIST', currentList);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
