<script setup>
    import {ref, toRef, computed, defineEmits} from 'vue'
    import {Field, ErrorMessage, useFormErrors} from 'vee-validate';

    const props = defineProps({
        name: String,
        label: String,
        type: {
            type: String,
            default: 'text'
        },
        modelValue: {
            type: String
        },
        validationRules: {
            type: [Function, Object,  Boolean],
            default: false
        }
    });

    const data = computed({
        get() {
            return props.modelValue
        },
        set(value) {
            emit('update:modelValue', value);
        }
    });

    function isInvalid(){
        if(!props.validationRules)
            return false;

        const formErrors = useFormErrors();

        return formErrors.value.hasOwnProperty(props.name);
    }

    const isLabelActive = computed(() => data.length > 0)
    const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <div class="field-wrapper" :class="{'is-invalid': isInvalid()}">
        <label :for="name" class="input-label" :class="{'active' : isLabelActive}">{{ label }}</label>

        <input :type="type" :name="name" class="input-field" v-model="data" v-if="!validationRules">
        <template v-else>
            <Field :type="type" :name="name" class="input-field" :rules="validationRules" v-model="data" />
            <ErrorMessage :name="name" as="div" class="error" />
        </template>
    </div>
</template>
