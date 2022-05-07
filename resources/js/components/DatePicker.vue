<script setup>
    import Litepicker from 'litepicker'
    import dayjs from 'dayjs'
    import {onMounted, ref} from 'vue'
    import {fixDateIgnoringTimezone} from "../helpers/dateHelper";

    let picker;

    const props = defineProps({
        modelValue: {
            type: Date,
        }
    })

    const emit = defineEmits(['update:modelValue'])

    function openDatepicker(){
        picker.show();
    }

    function formatDate(date){
        return dayjs(date).format('DD/MM/YYYY');
    }

    onMounted(() => {
        picker = new Litepicker({
            element: document.getElementById('datepicker'),
            parentEl: document.querySelector('.datepicker-container'),
            startDate: props.modelValue,
            resetButton: true,
            setup: (picker) => {
                picker.on('selected', (date) => {
                    const selectedDate = date.dateInstance

                    emit('update:modelValue', fixDateIgnoringTimezone(selectedDate));
                });

                picker.on('clear:selection', () => {
                    emit('update:modelValue', null);
                })
            },
        })
    })

</script>

<template>
    <div class="datepicker-container">
        <div class="controls">
            <button id="datepicker" class="datepicker-btn"><span class="fa-solid fa-calendar-alt"></span></button>
            <div class="datepicker-value" @click="openDatepicker">{{ props.modelValue ? formatDate(props.modelValue) : 'No deadline' }}</div>
        </div>
    </div>
</template>

