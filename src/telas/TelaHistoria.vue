<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="col img-background">
        <div class="row div-title">
            <img src="../assets/logo_empresa.png" alt="Logo" height="80">
            <p class="title-second">Conheça nossa história</p>
        </div>
        <div class="col text">
            <p> Há 25 anos atrás, o nosso fundador <b>José Araújo</b> começou a construir seu
                sonho em uma pequena cozinha da sua casa, dedicando-se à qualidade
                e autenticidade do seu produto. </p>
            <p>     Aos poucos seu sonho foi se tornando realidade e hoje podemos
                contar uma história de sucesso, onde a paixão e a dedicação
                transformaram um sonho modesto em uma empresa respeitada e admirada no seridó. </p>
            <p>     A dedicação se propagou para seus filhos e hoje temos seu filho
                <b>Alef Júnior</b> como principal representante de vendas da empresa. Eles,
                juntamente com seus funcionários, fazem essa hitória acontecer diariamente. </p>
        </div>
    </div>
</template>

<style scoped>
    .div-title{
        gap: 80px;
        justify-content: flex-start;
        width: 100%;
    }
    .img-background{
        min-height: 100vh;
        gap: calc(100vh * 0.16);
        background:
            url("../assets/bg_represents.png"), linear-gradient(
                #8F6F46, #8F6F46
            );
        background-position: top right;
        background-repeat: no-repeat;
        background-size: cover;
        padding-left: 7%;
    }
    .text{
        gap: 24px;
        width: 100%;
        align-items: baseline;
    }
    .text > p {
        color: var(--brown-light-hover, #F5EFE7);
        font-size: 24px;
        font-weight: 275;
        width: 40%;
    }
    .text > p:nth-child(1) {
        width: 50%;
    }
    .text > p:nth-child(2) {
        width: 45%;
    }

    @media (max-width: 720px) {
        .img-background{
            padding: 32px 0px;
            gap: 56px;
            background: url("../assets/group_of_sheet.png"), linear-gradient(
                #8F6F46, #8F6F46
            );
            background-position: top left;
            background-repeat: no-repeat;
            background-size: contain;
        }
        .text > p,
        .text > p:nth-child(1),
        .text > p:nth-child(2)
         {
            font-size: 16px;
            width: auto;
            padding: 0px 7%;
        }
    }

</style>
