<script setup>
    import RegisterForm from "../components/RegisterForm";
    import LoginForm from "../components/LoginForm";
    import { ref } from 'vue';

    const activeTab = ref(0);

    function changeTab(tabNum){
        activeTab.value = tabNum;
    }
</script>

<template>
    <div class="auth-form-container">
        <div class="form-wrapper">
            <div class="tab-wrapper">
                <button class="tab" @click="changeTab(0)" :class="{'tab-active' : activeTab === 0}">Log in</button>
                <button class="tab" @click="changeTab(1)" :class="{'tab-active' : activeTab === 1}">Register</button>
            </div>
            <LoginForm v-if="activeTab === 0"/>
            <RegisterForm v-else />
        </div>
    </div>
</template>
