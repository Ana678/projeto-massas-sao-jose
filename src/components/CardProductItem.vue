<template>
    <div class="card-product">
        <img class="card-product--img" :src="'/src/assets/produtos/'+props.img" :alt="props.name">
        <div class="card-product--text">
            <p for="" class="card-product--title">{{ props.name }}</p>
            <p for="" class="card-product--subtitle">{{ props.description }}</p>
        </div>
    </div>
</template>

<script  lang="ts" setup>

export type CardProductItemProps = {
    img: string,
    name: string,
    description: string
}

const props = defineProps<CardProductItemProps>();

</script>

<style scoped>
    .card-product{
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        width: 100%;
        background: var(--yellow-normal-active, #98764A);
        height: 100%;
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

    @media (max-width: 720px) {
        .card-product > .card-product--text > .card-product--title{
            font-size: 18px;
        }
        .card-product > .card-product--text > .card-product--subtitle{
            font-size: 10px;
        }
    }
</style>
