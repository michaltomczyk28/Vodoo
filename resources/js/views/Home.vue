<script setup>
    import Navbar from '../components/Navbar'
    import TaskList from '../components/task-list/TaskList'
</script>

<template>
    <Navbar/>

    <div class="main-wrapper home-wrapper">
        <div class="left-beam">
            <TaskList />
        </div>

        <div class="right-beam">
            <div class="side-menu">
                <ul class="special-list">
                    <li>Today</li>
                    <li>This week</li>
                    <li>History</li>
                </ul>
                <div class="folders">
                    <h3>Your folders</h3>
                    <ul class="folder-list">
                        <li>Folder 1</li>
                        <li>Folder 2</li>
                        <li>Very important folder</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
