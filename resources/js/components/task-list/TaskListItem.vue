<script setup>
    import TaskListItemCheckbox from './TaskListItemCheckbox'

    import {defineProps, computed} from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();
    const props = defineProps({
        task: Object
    })

    async function toggleTask(){
        await store.dispatch('task/toggleTask', props.task.id);
        await store.dispatch('task/getTasks');
    }

    function removeTask(){
        store.dispatch('task/destroyTask', props.task.id);
    }
</script>

<template>
    <div class="task">
        <div class="task-left">
            <TaskListItemCheckbox :checked="task.is_done" @change="toggleTask" />
            <router-link :to="{name: 'task', params: { taskId: task.id }}" class="task-name">
                {{ task.name }}
            </router-link>
        </div>

        <div class="task-right">
            <a href="#" class="icon-button remove" @click="removeTask">
                <span class="fa-solid fa-trash"></span>
            </a>
        </div>
    </div>
</template>
