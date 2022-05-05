<script setup>
    import {ref, computed, defineEmits} from 'vue'

    const props = defineProps({
        name: String,
        label: String,
        type: {
            type: String,
            default: 'text'
        },
        modelValue: {
            type: String
        }
    })

    const data = computed({
        get() {
            return props.modelValue
        },
        set(value) {
            emit('update:modelValue', value);
        }
    })

    const isLabelActive = computed(() => data.length > 0)
    const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <div class="field-wrapper">
        <label :for="name" class="input-label" :class="{'active' : isLabelActive}">{{ label }}</label>
        <input :type="type" class="input-field" v-model="data">
    </div>
</template>
