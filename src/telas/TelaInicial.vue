<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="img-background">
        <div class="div-title">
            <p class="subtitle">Diretamente de</p>
            <p class="title">Ipueira</p>
            <p class="subtitle right">para sua mesa</p>
        </div>
    </div>
</template>

<style scoped>
    .div-title{
        display: flex;
        flex-direction: column;
        gap: -60px;
    }
    .img-background{
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
            url("../assets/bg_02.JPG");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

</style>
