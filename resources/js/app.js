import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import App from './App.vue'

import routes from './routes'
import store from './store';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(''),
    routes
});


router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        await store.dispatch('auth/getAuthenticatedUser');

        if (!store.getters['auth/isLoggedIn']) {
            next({ name: 'auth' })
        } else {
            next()
        }
    } else {
        next()
    }
});

const app = Vue.createApp(App)
app.use(store);
app.use(router);

app.mount('#app')

import 'materialize-css/dist/js/materialize';
