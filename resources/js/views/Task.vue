<script setup>
    import Navbar from "../components/navigation/Navbar";
    import Editor from '../components/Editor';
    import Button from '../components/Button'
    import {useStore} from 'vuex';
    import {onMounted, ref} from 'vue';
    import {useRoute, useRouter} from 'vue-router';

    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const description = ref('');
    const task = ref({
        name: '',
        description: ''
    });

    const editTitle = ref(false);
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

    function updateName(event){
        task.value.name = event.target.innerText
    }
</script>

<template>
<!--    <Navbar/>-->
    <div class="task-wrapper">
        <div class="container" v-if="!loading">
            <div class="section">
                <h1 contenteditable @input="updateName">{{ task.name }}</h1>
                <Editor v-model="task.description"/>

                <div class="buttons">
                    <Button @click="router.go(-1)" outline>Return</Button>
                    <Button filled @click="updateTask">Save</Button>
                </div>

            </div>
        </div>
    </div>

</template>


