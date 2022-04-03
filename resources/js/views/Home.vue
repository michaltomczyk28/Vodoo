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
                    <li class="list-item">Today</li>
                    <li class="list-item">This week</li>
                    <li class="list-item">History</li>
                </ul>
                <div class="folders">
                    <h3>Your folders</h3>
                    <ul class="folder-list">
                        <li class="list-item">Folder 1</li>
                        <li class="list-item">Folder 2</li>
                        <li class="list-item">Very important folder</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
