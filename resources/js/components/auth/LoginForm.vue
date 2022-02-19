<script setup>
    import { reactive } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import axios from 'axios';

    const store = useStore();
    const router = useRouter();

    const user = reactive({
        email: '',
        password: ''
    });

    function login(){
        store.dispatch('auth/login', {...user});
    }

</script>

<template>
    <form class="form">
        <div class="input-field">
            <input id="email" type="email" class="validate" v-model="user.email">
            <label for="email">Email</label>
        </div>

        <div class="input-field ">
            <input id="password" type="password" class="validate" v-model="user.password">
            <label for="password">Password</label>
        </div>

        <div>
            <button class="btn btn-large btn-submit waves-effect waves-light orange" type="submit" name="action" @click.prevent="login">
                Log in
            </button>
        </div>
    </form>
</template>
