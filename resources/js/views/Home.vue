<script setup>
    import Navbar from '../components/navigation/Navbar'
    import TaskList from '../components/task-list/TaskList'
    import Task from './Task'
    import ListMenu from '../components/navigation/ListMenu'

    const props = defineProps({
        component: String
    })
</script>

<template>
    <Navbar/>

    <div class="main-wrapper home-wrapper">
        <div class="left-beam" :class="{'no-padding-bottom': component === 'task-list'}">
            <TaskList v-if="component === 'task-list'" />
            <Task v-else-if="component === 'task'"/>
        </div>

        <div class="right-beam">
            <ListMenu/>
        </div>
    </div>
</template>
