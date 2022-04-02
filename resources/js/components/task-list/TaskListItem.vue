<script setup>
    import TaskListItemCheckbox from './TaskListItemCheckbox'

    import {defineProps, computed} from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();
    const props = defineProps({
        task: Object
    })

    function toggleTask(){
        console.log('test')
        store.dispatch('task/toggleTask', props.task.id);
    }

    function removeTask(){
        store.dispatch('task/destroyTask', props.task.id);
    }
</script>

<template>
    <div class="task">
<!--        <label>-->
<!--            <input type="checkbox" class="filled-in" :checked="task.is_done" @change="toggleTask" />-->
<!--            <span class="toggle" :class="{'done' : task.is_done}">{{ task.name }}</span>-->
<!--        </label>-->
        <div class="task-left">
            <TaskListItemCheckbox :checked="task.is_done" @change="toggleTask" />
            <div class="task-name">{{ task.name }}</div>
        </div>

        <div class="task-right">
            <a href="#" class="icon-button remove" @click="removeTask">
                <span class="fa-solid fa-trash"></span>
            </a>
        </div>

        <!--        <div>-->
<!--            <router-link :to="{name: 'task', params: { taskId: task.id }}" class="icon-button">-->
<!--                <span class="fa-solid fa-pen"></span>-->
<!--            </router-link>-->
<!--            <a href="#" class="icon-button remove" @click="removeTask">-->
<!--                <span class="fa-solid fa-trash"></span>-->
<!--            </a>-->
<!--        </div>-->

    </div>
</template>
