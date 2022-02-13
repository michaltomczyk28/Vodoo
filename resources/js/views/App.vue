<script setup>
    import AuthForm from '../components/auth/AuthForm'
    import { ref, onMounted, computed } from 'vue';
    import {useStore} from 'vuex';
    const store = useStore();

    const isLoggedIn = computed(() => store.getters['auth/isLoggedIn']);

    function logOut(){
        store.dispatch('auth/logout');
    }

    onMounted(() => {
        store.dispatch('auth/getAuthenticatedUser');
    })
</script>

<template>
    <AuthForm v-if="!isLoggedIn"/>
    <div v-else>
        Witamy
        <button @click="logOut">Wyloguj</button>
    </div>
</template>
