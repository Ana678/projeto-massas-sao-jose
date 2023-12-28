<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="img-background">
        <img class="logo-dashboard" src="../assets/logo_empresa.png" alt="">
    </div>
</template>

<style scoped>
    .logo-dashboard{
        height: 120px;
    }
    .img-background{
        background: none;
        min-height: 100vh;
        top: 0;
        right: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background:
            linear-gradient(
             rgba(34, 34, 34, 0.80),rgba(34, 34, 34, 0.80)
            ),
            url("../assets/video_dashboard.gif");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
