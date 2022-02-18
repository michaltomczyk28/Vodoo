<script setup>
    import AuthForm from '../components/auth/AuthForm'
    import Navbar from '../components/Navbar'

    import { onBeforeMount, computed, watchEffect } from 'vue';
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
    })
    onBeforeMount(() => {
        if(localStorage.getItem('authToken'))
            store.dispatch('auth/getAuthenticatedUser');

        console.log(isLoggedIn.value);
    })
</script>

<template>
<!--    <template v-if="isLoggedIn">-->
<!--        <Navbar />-->
<!--    </template>-->
<!--    <AuthForm v-else />-->
    <router-view></router-view>
</template>
