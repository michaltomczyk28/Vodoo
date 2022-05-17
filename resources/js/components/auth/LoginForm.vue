<script setup>
    import Button from '../Button'
    import InputField from '../InputField'
    import {Form} from 'vee-validate';

    import { reactive} from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    import {useValidation} from '../../composables/formValidation';

    const store = useStore();
    const router = useRouter();

    const {emailRules, passwordRules} = useValidation();

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
    <Form class="auth-form" @submit="login">
        <InputField name="email" label="E-mail address" type="email" :validation-rules="emailRules" v-model="user.email"/>
        <InputField name="password" label="Password" type="password" :validation-rules="passwordRules" v-model="user.password" />

        <div class="btn-wrapper">
            <Button outline>Sign in</Button>
        </div>
    </Form>
</template>
