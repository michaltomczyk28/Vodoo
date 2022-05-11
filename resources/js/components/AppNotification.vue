<script setup>
    import {useStore} from 'vuex';
    import {onMounted, ref, computed} from 'vue';

    const store = useStore();
    const fadeOut = ref(false);

    function removeNotification() {
        fadeOut.value = true;
        setTimeout(() => {
            store.dispatch('notification/removeNotification', props.index)
        }, 500)
    }

    onMounted(() => {
        setTimeout(removeNotification, 2000);
    })

    const props = defineProps({
        value: {
            type: String
        },
        type: {
            type: String,
            default: 'success',
        },
        index: {
            type: Number
        }
    })
</script>

<template>
    <div class="notification" :class="[type, {'fade-out' : fadeOut}]">
        <button class="close-btn" @click="removeNotification">x</button>
        <div class="inner-text">{{ value }}</div>
    </div>
</template>
