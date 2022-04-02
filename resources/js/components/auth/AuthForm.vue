<script setup>
    import RegisterForm from "./RegisterForm";
    import LoginForm from "./LoginForm";
    import {ref} from "vue";
    import Button from '../Button'

    const activeTab = ref(0);

    function changeTab(tabNum){
        activeTab.value = tabNum;
    }
</script>

<template>
    <div class="form-wrapper standard-padding">
        <div class="container">
            <div class="tab-wrapper">
                <Button @click="changeTab(0)" :active="activeTab === 0" :outline="activeTab !== 0">Log in</Button>
                <Button @click="changeTab(1)" :active="activeTab === 1" :outline="activeTab !== 1">Register</Button>
            </div>

            <LoginForm v-if="activeTab === 0"/>
            <RegisterForm v-else />
        </div>

    </div>
</template>

