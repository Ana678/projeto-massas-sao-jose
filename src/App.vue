<script setup>
    import TelaInicial from './telas/TelaInicial.vue';
    import TelaProdutos from './telas/TelaProdutos.vue';
    import TelaProdutosDoces from './telas/TelaProdutosDoces.vue';
    import TelaProdutosRapaduras from './telas/TelaProdutosRapaduras.vue';
    import TelaVideo from './telas/TelaVideo.vue';
    import TelaHistoria from './telas/TelaHistoria.vue';
    import { onMounted } from 'vue';

    const scrollAutomatic = () => {
        setTimeout(() => {
            if (window.scrollY == 0) {
                window.scroll({
                    top: (window.innerHeight - 50),
                    behavior: "smooth",
                });
            }
        }, 15000);
    };

    onMounted(() => {
        scrollAutomatic();
    });

</script>

<template>
    <TelaVideo/>
    <TelaInicial/>
    <TelaProdutos/>
    <TelaProdutosDoces/>
    <TelaProdutosRapaduras/>
    <TelaHistoria/>
</template>

<style scoped>
</style>
