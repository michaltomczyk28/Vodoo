<script setup>
    import AuthForm from '../components/auth/AuthForm'
    import Navbar from '../components/Navbar'

    import { onBeforeMount, computed } from 'vue';
    import {useStore} from 'vuex';
    const store = useStore();

    const isLoggedIn = computed(() => store.getters['auth/isLoggedIn']);

    onBeforeMount(() => {
        store.dispatch('auth/getAuthenticatedUser');
    })
</script>

<template>
    <template v-if="isLoggedIn">
        <Navbar />
    </template>
    <AuthForm v-else />

</template>
