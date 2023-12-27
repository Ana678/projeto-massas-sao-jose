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
                <p class="subtitle-second">doces</p>
                <img src="../assets/trigo_gradiente.png" alt="Trigo">
            </div>
        </div>
        <div class="row products">
            <div class="card-product">
                <img class="card-product--img" src="../assets/produtos/doce_leite_com_goiabada.png" alt="Doce de Leite com Goiabada">
                <div class="card-product--text">
                    <p for="" class="card-product--title">Leite com Goiabada</p>
                    <p for="" class="card-product--subtitle">farinha de trigo, leite, açúcar, manteiga e bicarbonato de sódio.</p>
                </div>
            </div>
            <div class="card-product">
                <img class="card-product--img" src="../assets/produtos/doce_especie.png" alt="Doce Espécie">
                <div class="card-product--text">
                    <p for="" class="card-product--title">Espécie</p>
                    <p for="" class="card-product--subtitle">farinha de trigo, rapadura, margarina, bicarbonato de soda e erva-doce.</p>
                </div>
            </div>
            <div class="card-product">
                <img class="card-product--img" src="../assets/produtos/doce_leite_com_ameixa.png" alt="Doce de Leite com Ameixa">
                <div class="card-product--text">
                    <p for="" class="card-product--title">Leite com Ameixa</p>
                    <p for="" class="card-product--subtitle">farinha de trigo, leite, açúcar, manteiga e bicarbonato de sódio.</p>
                </div>
            </div>
            <div class="card-product">
                <img class="card-product--img" src="../assets/produtos/doce_leite_cremoso.png" alt="Doce de Leite Cremoso">
                <div class="card-product--text">
                    <p for="" class="card-product--title">Leite Cremoso</p>
                    <p for="" class="card-product--subtitle">farinha de trigo, leite, açúcar, manteiga e bicarbonato de sódio.</p>
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
