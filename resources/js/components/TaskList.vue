<script setup>
    import {useStore} from 'vuex';
    import {onMounted, computed} from 'vue';

    const store = useStore();
    const tasks = computed(() => store.getters['task/tasks']);

    onMounted(()=>{
        store.dispatch('task/getTasksForAuthenticatedUser');
    });
</script>

<template>
    <div class="container">
        <p v-for="task in tasks">
            <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span>{{ task.name }}</span>
            </label>
        </p>
    </div>

</template>
