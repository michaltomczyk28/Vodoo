import api from '../api'

const state = {
    notifications: []
};

const getters = {
    notifications: state => state.notifications,
};

const mutations = {
    ADD_NOTIFICATION(state, payload) {
        payload.index = state.notifications.length;
        state.notifications = [...state.notifications, payload];
    },
    REMOVE_NOTIFICATION(state, index) {
        const arrayIndex = state.notifications.findIndex(el => el.index === index);
        state.notifications.splice(arrayIndex, 1)
    }
};

const actions = {
    addNotification({commit}, payload) {
        commit('ADD_NOTIFICATION', payload);
    },
    removeNotification({commit}, index) {
        commit('REMOVE_NOTIFICATION', index);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
