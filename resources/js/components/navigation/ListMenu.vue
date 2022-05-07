<script setup>
import {List} from "../../constants";
import {useStore} from 'vuex';
import {useRoute} from 'vue-router'

const route = useRoute();

const store = useStore();

</script>

<template>
    <div class="list-menu">
        <ul class="special-list">
            <li class="list-item" >
                <router-link to="/all">All</router-link>
            </li>
            <li class="list-item">
                <router-link to="/today">Today</router-link>
            </li>
            <li class="list-item" >
                <router-link to="/this-week">This week</router-link>
            </li>
            <li class="list-item">
                <router-link to="/history">History</router-link>
            </li>
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
</template>
