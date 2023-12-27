<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="img-background">
        <div class="col div-title">
            <p class="title-second">Conheça nossos produtos</p>
            <div class="row div-subtitle">
                <img src="../assets/trigo_gradiente.png" alt="Trigo">
                <p class="subtitle-second">rapaduras</p>
                <img src="../assets/trigo_gradiente.png" alt="Trigo">
            </div>
        </div>
        <div class="row products">
            <div class="card-product">
                <img class="card-product--img" src="../assets/produtos/rapadura_castanha.png" alt="Rapadura de Castanha">
                <div class="card-product--text">
                    <p for="" class="card-product--title">Castanha</p>
                    <p for="" class="card-product--subtitle">leite, açúcar, cravo, erva doce, castanha de caju e conservante.</p>
                </div>
            </div>
            <div class="card-product">
                <img class="card-product--img" src="../assets/produtos/rapadura_leite.png" alt="Rapadura de Leite">
                <div class="card-product--text">
                    <p for="" class="card-product--title">Leite</p>
                    <p for="" class="card-product--subtitle">leite fresco, açúcar cristal e sorbato de potássio.</p>
                </div>
            </div>
            <div class="card-product">
                <img class="card-product--img" src="../assets/produtos/rapadura_coco.png" alt="Rapadura de Coco">
                <div class="card-product--text">
                    <p for="" class="card-product--title">Coco</p>
                    <p for="" class="card-product--subtitle">coco, açúcar e bircabonato de sódio.</p>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .img-background{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8%;
        height: 100vh;
        width: 100%;
        background:
            url("../assets/bg_01.png"), linear-gradient(
                #8F6F46, #8F6F46
            );
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .div-title{
        gap: 0;
    }
    .div-subtitle > img{
        height: 24px;
    }
    .div-subtitle > img:last-child{
        transform: rotate(180deg);
    }
    .products{
        gap: 40px;
        padding: 0 7%;
    }
    .card-product{
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        width: 100%;
        background: var(--yellow-normal-active, #98764A);
    }

    .card-product > .card-product--img{
        width: 100%;
    }
    .card-product > .card-product--text{
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px 24px 32px 24px;
    }
    .card-product > .card-product--text > .card-product--title{
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        color: #FFF;
    }
    .card-product > .card-product--text > .card-product--subtitle{
        color: #E3CAA9;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
    }
</style>
