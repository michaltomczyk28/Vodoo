<script setup>
    import TaskListItem from './TaskListItem'
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
    <div class="container">
        <div class="task-list">
<!--            <div class="task" v-for="task in tasks">-->
<!--                <label>-->
<!--                    <input type="checkbox" class="filled-in" :checked="task.is_done" @change="toggleTask(task.id)" />-->
<!--                    <span class="toggle" :class="{'done' : task.is_done}">{{ task.name }}</span>-->
<!--                </label>-->
<!--            </div>-->
            <TaskListItem v-for="task in tasks" :task="task" />
        </div>


        <div class="input-field col s6">
            <input id="task_name" type="text" v-model="taskName" @keyup.enter="addTask">
            <label for="task_name">Dodaj zadanie</label>
        </div>
    </div>

</template>
