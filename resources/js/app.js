import * as Vue from 'vue'
import App from './views/App.vue'

import store from './store';

const app = Vue.createApp(App)
app.use(store);
app.mount('#app')

import 'materialize-css/dist/js/materialize';
