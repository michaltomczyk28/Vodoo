<script setup>
import {ref} from 'vue'

const emit = defineEmits(['change'])

function handleChange(){
    emit('change');
}

defineProps({
    checked: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <input type="checkbox" class="task-checkbox" :checked="checked" @change="handleChange">
</template>
