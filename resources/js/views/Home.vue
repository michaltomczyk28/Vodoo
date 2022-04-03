<script setup>
    import Navbar from '../components/navigation/Navbar'
    import TaskList from '../components/task-list/TaskList'
    import ListMenu from '../components/navigation/ListMenu'
</script>

<template>
    <Navbar/>

    <div class="main-wrapper home-wrapper">
        <div class="left-beam">
            <TaskList />
        </div>

        <div class="right-beam">
            <ListMenu/>
        </div>
    </div>
</template>
