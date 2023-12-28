<script setup>
    import CardProducts from '../components/CardProducts.vue';
    import SecondTitle from '../components/SecondTitle.vue';
</script>

<template>
    <div class="img-background">
        <SecondTitle :title="'Conheça nossos produtos'" :subtitle="'rapaduras'"/>
        <CardProducts :index="2"/>
    </div>
</template>

<style scoped>
    .img-background{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: calc(100vh * 0.08);
        min-height: 100vh;
        width: 100%;
        background:
            url("../assets/bg_01.png"), linear-gradient(
                #8F6F46, #8F6F46
            );
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
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
    }
</style>
