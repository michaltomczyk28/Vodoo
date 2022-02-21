<script setup>
    import {defineProps} from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();
    const props = defineProps({
        task: Object
    })

    function toggleTask(){
        store.dispatch('task/toggleTask', props.task.id);
    }

    function removeTask(){
        store.dispatch('task/destroyTask', props.task.id);
    }
</script>

<template>
    <div class="task">
        <label>
            <input type="checkbox" class="filled-in" :checked="task.is_done" @change="toggleTask" />
            <span class="toggle" :class="{'done' : task.is_done}">{{ task.name }}</span>
        </label>
        <div>
            <a href="#">
                Edytuj
            </a>
            <a href="#" class="remove" @click="removeTask">
                Usuń
            </a>
        </div>

    </div>
</template>
