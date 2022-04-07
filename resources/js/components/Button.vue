<script setup>
    import {defineEmits} from 'vue'

    const props = defineProps({
        outline : Boolean,
        filled: Boolean,
        active: Boolean,
        type: {
            type: String,
            validator: val => ['button', 'link'].includes(val),
            default: 'button'
        },
        to: [String, Object]
    })

    const emit = defineEmits(['click'])

    function handleClick(){
        emit('click')
    }

</script>

<template>
    <button class="btn" :class="{'btn-outline' : outline, 'btn-filled' : filled, 'btn-active' : active}"
            v-if="type === 'button'" @click="handleClick">
        <slot></slot>
    </button>
    <router-link class="btn" :class="{'btn-outline' : outline, 'btn-filled' : filled, 'btn-active' : active}" :to="to" v-if="type === 'link'">
        <slot></slot>
    </router-link>
</template>

