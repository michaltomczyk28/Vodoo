<script setup>
    import AuthForm from '../components/auth/AuthForm'
    import Navbar from '../components/Navbar'
</script>
<template>
    <Navbar />

    <div class="main-wrapper auth-wrapper">
        <div class="left-beam standard-padding">
            <AuthForm/>
        </div>

        <div class="right-beam bigger-padding">
            <div class="container">
                <div class="content">
                    Unlock <br>
                    a new <br>
                    world of <br>
                    possibilities
                </div>
            </div>
        </div>
    </div>

</template>
