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
    <nav>
        <div class="nav-wrapper orange darken-3">
            <div class="container">
                <router-link :to="{name: 'home'}">
                    Todo.app
                </router-link>
                <ul id="nav-mobile" class="right">
                    <li><a href="#" @click.prevent="logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
