<script setup>
    import Button from '../Button'
    import InputField from '../InputField'

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

    async function login(){
        await store.dispatch('auth/login', {...user});
        router.push('/');
    }

</script>

<template>
    <form class="auth-form" @submit.prevent="login">
        <InputField name="email" label="E-mail address" type="email" v-model="user.email"/>
        <InputField name="password" label="Password" type="password" v-model="user.password" />

        <div class="btn-wrapper">
            <Button outline>Sign in</Button>
        </div>
    </form>
</template>
