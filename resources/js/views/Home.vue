<script setup>
    import Navbar from '../components/Navbar'
    import TaskList from '../components/task-list/TaskList'
</script>

<template>
    <Navbar/>

    <div class="main-wrapper home-wrapper">
        <div class="left-beam standard-padding">
            <TaskList />
        </div>

        <div class="right-beam standard-padding">
            <div class="container">
                Test
            </div>
        </div>
    </div>
</template>
