<script setup>
    import AuthForm from './components/auth/AuthForm'
    import Navbar from './components/Navbar'

    import { onMounted, computed, watchEffect } from 'vue';
    import {useStore} from 'vuex';
    import {useRouter} from 'vue-router'

    const store = useStore();
    const router = useRouter();

    const isLoggedIn = computed(() => store.getters['auth/isLoggedIn']);

    watchEffect(()=>{
        if(isLoggedIn.value)
            router.push('home');
        else
            router.push('auth');
    });

    onMounted(() => {
        if(localStorage.getItem('authToken'))
            store.dispatch('auth/getAuthenticatedUser');
    });
</script>

<template>
    <router-view></router-view>
</template>
