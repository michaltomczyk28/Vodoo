<script setup>
    import Button from '../Button'
    import InputField from '../InputField'

    import { reactive } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router'

    const store = useStore();
    const router = useRouter();

    const user = reactive({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    async function register(){
        await store.dispatch('auth/register', { ...user });
        router.push('/');
    }
</script>

<template>
    <form class="auth-form" @submit.prevent="register">
        <InputField name="first_name" label="First name" v-model="user.first_name" />
        <InputField name="last_name" label="Last name" v-model="user.last_name" />

        <InputField name="email" label="E-mail address" type="email" v-model="user.email" />

        <InputField name="password" label="Password" type="password" v-model="user.password" />
        <InputField name="password_confirmation" label="Confirm password" type="password" v-model="user.password_confirmation" />

        <div class="btn-wrapper">
            <Button outline>Sign up</Button>
        </div>
    </form>
</template>


