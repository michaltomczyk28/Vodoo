<script setup>
    import Button from '../Button'
    import InputField from '../InputField'
    import {Form} from 'vee-validate'

    import {computed, reactive} from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router'
    import { useValidation } from '../../composables/formValidation'
    import {string} from "yup";

    const store = useStore();
    const router = useRouter();
    const { emailRules, passwordRules, requiredRule} = useValidation();

    const passwordConfirmationRules = computed(
        () => string()
            .required('This field is required!')
            .oneOf([user.password, null], 'Passwords must match!')
    );

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
    <Form class="auth-form" @submit="register">
        <InputField name="first_name" label="First name" :validation-rules="requiredRule" v-model="user.first_name" />
        <InputField name="last_name" label="Last name" :validation-rules="requiredRule" v-model="user.last_name" />

        <InputField name="email" label="E-mail address" type="email" :validation-rules="emailRules" v-model="user.email" />

        <InputField name="password" label="Password" type="password" :validation-rules="passwordRules" v-model="user.password" />
        <InputField name="password_confirmation" label="Confirm password" type="password" :validation-rules="passwordConfirmationRules" v-model="user.password_confirmation" />

        <div class="btn-wrapper">
            <Button outline>Sign up</Button>
        </div>
    </Form>
</template>


