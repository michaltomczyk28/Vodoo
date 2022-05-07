<script setup>
    import TaskListItem from './TaskListItem'
    import InputField from '../InputField'
    import {List} from '../../constants'

    import {useStore} from 'vuex';
    import {ref, onMounted, computed, watch} from 'vue';
    import {useRoute} from 'vue-router'

    const route = useRoute();

    const store = useStore();
    const tasks = computed(() => store.getters['task/tasks']);
    const currentList = computed(() => store.getters['task/currentList']);

    const showNewTaskInput = computed(() => currentList.value !== List.HISTORY)


    const taskName = ref('');

    function addTask(){
        store.dispatch('task/createTask', {name: taskName.value});
        taskName.value = '';
    }

    function toggleTask(id){
        store.dispatch('task/toggleTask', id);
    }

    watch(
        () => route.params.listName,
        async newListName => {
            await store.dispatch('task/changeCurrentList', newListName);
            await store.dispatch('task/getTasks');
        }
    );

    onMounted(()=>{
        store.dispatch('task/changeCurrentList', route.params.listName);
        store.dispatch('task/getTasks');
    });
</script>

<template>
    <div class="task-list">
        <div class="container">
            <TaskListItem v-for="task in tasks" :task="task" />

            <div class="task-new" v-if="showNewTaskInput">
                <InputField label="New task" v-model="taskName" @keyup.enter="addTask"/>
            </div>
        </div>
    </div>
</template>
