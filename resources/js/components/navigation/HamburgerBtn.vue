<script setup>
    import {computed} from 'vue'

    const props = defineProps({
        modelValue: Boolean
    })

    const emit = defineEmits(['update:modelValue'])

    function toggleExpanded(){
        emit('update:modelValue', !props.modelValue)
    }
</script>

<template>
    <button class="hamburger-btn" :class="{'expanded' : modelValue}" @click="toggleExpanded">
        <span class="inner-bar"></span>
    </button>
</template>
