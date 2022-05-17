<script setup>
    import AuthForm from '../components/auth/AuthForm'
    import Navbar from '../components/navigation/Navbar'
</script>
<template>
    <Navbar />

    <div class="main-wrapper auth-wrapper">
        <div class="left-beam">
            <AuthForm/>
        </div>

        <div class="right-beam">
            <div class="container">
                <div class="content">
                    Uncover <br>
                    a new <br>
                    level of <br>
                    productivity
                </div>
            </div>
        </div>
    </div>

</template>
