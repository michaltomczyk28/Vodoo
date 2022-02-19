<script setup>
    import { reactive } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const user = reactive({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    function register(){
        store.dispatch('auth/register', { ...user });
    }
</script>

<template>
    <form class="form">
        <div class="input-field half-width">
            <input id="first_name" type="text" class="validate" v-model="user.first_name">
            <label for="first_name">First Name</label>
        </div>

        <div class="input-field half-width">
            <input id="last_name" type="text" class="validate" v-model="user.last_name">
            <label for="last_name">Last Name</label>
        </div>

        <div class="input-field">
            <input id="email" type="email" class="validate" v-model="user.email">
            <label for="email">Email</label>
        </div>

        <div class="input-field ">
            <input id="password" type="password" class="validate" v-model="user.password">
            <label for="password">Password</label>
        </div>

        <div class="input-field ">
            <input id="password_confirmation" type="password" class="validate" v-model="user.password_confirmation">
            <label for="password_confirmation">Confirm password</label>
        </div>
        <div>
            <button class="btn btn-large btn-submit waves-effect waves-light orange" type="submit" name="action" @click.prevent="register">
                Register
            </button>
        </div>
    </form>
</template>


