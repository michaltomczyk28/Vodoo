<script setup>
    import {useStore} from 'vuex';
    const store = useStore();

    function logout(){
        store.dispatch('auth/logout');
    }
</script>

<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#">todo.app</a>
            <ul id="nav-mobile" class="right">
                <li><a href="#" @click="logout">Logout</a></li>
            </ul>
        </div>
    </nav>
</template>
