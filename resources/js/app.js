import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import App from './App.vue'

import routes from './routes'
import store from './store';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(''),
    routes
})

const app = Vue.createApp(App)
app.use(store);
app.use(router);

app.mount('#app')

import 'materialize-css/dist/js/materialize';
