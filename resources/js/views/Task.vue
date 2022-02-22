<script setup>
    import Navbar from "../components/Navbar";
    import Editor from '../components/Editor';
    import {useStore} from 'vuex';
    import {onMounted, reactive, ref, computed, watchEffect} from 'vue';
    import {useRoute, useRouter} from 'vue-router';

    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const description = ref('');
    const task = ref({
        name: '',
        description: ''
    });

    const loading = ref(true);


    onMounted(async () => {
        await store.dispatch('task/findTask', route.params.taskId);
        task.value = await store.getters['task/activeTask'];
        loading.value = false;
    });

    async function updateTask(){
        await store.dispatch('task/updateTask', {id: route.params.taskId, value:  task.value});
        router.push('/');
    }
</script>

<template>
    <Navbar/>
    <div class="container" v-if="!loading">
        <h1>{{ task.name }}</h1>
        <Editor v-model="task.description"/>
        <button class="btn btn-large btn-submit waves-effect waves-light orange" @click.prevent="updateTask">
            Update
        </button>
    </div>
</template>


