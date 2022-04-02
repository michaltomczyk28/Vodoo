<script setup>
    import TaskListItem from './TaskListItem'
    import InputField from '../InputField'

    import {useStore} from 'vuex';
    import {ref, onMounted, computed} from 'vue';

    const store = useStore();
    const tasks = computed(() => store.getters['task/tasks']);

    const taskName = ref('');

    function addTask(){
        store.dispatch('task/createTask', {name: taskName.value});
        taskName.value = '';
    }

    function toggleTask(id){
        store.dispatch('task/toggleTask', id);
    }

    onMounted(()=>{
        store.dispatch('task/getTasksForAuthenticatedUser');
    });
</script>

<template>
    <div class="task-list">
        <div class="container">
            <TaskListItem v-for="task in tasks" :task="task" />
            <div class="task-new">
                <InputField label="New task" v-model="taskName" @keyup.enter="addTask"/>
            </div>
        </div>
    </div>
</template>
