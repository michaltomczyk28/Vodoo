<script setup>
    import {defineProps} from 'vue'

    const props = defineProps({
        outline : Boolean,
        filled: Boolean,
        active: Boolean
    });
</script>

<template>
    <button class="btn" :class="{'btn-outline' : outline, 'btn-filled' : filled, 'btn-active' : active}">
        <slot></slot>
    </button>
</template>

