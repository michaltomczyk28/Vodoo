<script setup>
    import {useStore} from 'vuex';
    import {useRouter} from 'vue-router';

    const store = useStore();
    const router = useRouter();

    async function logout(){
        await store.dispatch('auth/logout');

        store.dispatch('resetAll');
        router.push('/auth');
    }
</script>

<template>
    <nav class="main-nav">
        <div class="container">
            <div class="nav-wrapper">
                <router-link :to="{name: 'home'}" >
                    <img src="/images/logo.png" alt="" class="logo">
                </router-link>

                <ul>
<!--                    <li><a href="#" @click.prevent="logout">Logout</a></li>-->
                </ul>
            </div>
        </div>
    </nav>
</template>
