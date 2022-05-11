<script setup>
    import AppNotification from './AppNotification';
    import {computed} from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();
    const notifications = computed(() => store.getters['notification/notifications']);
</script>

<template>
    <div class="notifications-wrapper">
        <app-notification v-for="notification in notifications" :value="notification.value" :type="notification.type"
                          :index="notification.index" :key="notification.index"/>
    </div>
</template>
