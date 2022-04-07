<script setup>
    import ListMenu from './ListMenu'
    import HamburgerBtn from './HamburgerBtn'
    import Button from '../Button'

    import {useStore} from 'vuex';
    import {useRouter} from 'vue-router'
    import {computed, ref} from 'vue'

    const store = useStore();
    const router = useRouter();

    const isLoggedIn = computed(() => store.getters['auth/isLoggedIn'])
    const expanded = ref(false)

    async function logout(){
        await store.dispatch('auth/logout');

        store.dispatch('resetAll');
        router.push('/auth');
    }
</script>

<template>
    <nav class="main-nav" :class="{expanded}">
        <div class="container">
            <div class="nav-wrapper" >
                <router-link :to="{name: 'home'}" >
                    <img src="/images/logo.png" alt="" class="logo">
                </router-link>

                <template v-if="isLoggedIn">
                    <HamburgerBtn v-model="expanded" />
                    <div class="buttons">
                        <Button filled @click="logout">Logout</Button>
                    </div>
                </template>
            </div>
        </div>
        <div class="mobile-menu" v-if="isLoggedIn">
            <div class="container">
                <ListMenu />
                <div class="mobile-buttons">
                    <Button filled @click="logout">Logout</Button>
                </div>
            </div>
        </div>
    </nav>
</template>
