<template>
    <div class="row products">
        <CardProductItem v-for="(item) in itens"
        :img="item.img"  :name= "item.name" :description = "item.description"/>
    </div>
</template>

<script  lang="ts" setup>
    import data  from "../data";
    import CardProductItem from "./CardProductItem.vue";

    export type CardProductsProps = {
        index: number
    }

    const props = defineProps<CardProductsProps>();

    const itens =  data[props.index];
</script>

<style scoped>
    .products{
        gap: 40px;
        padding: 0 7%;
    }

    @media (max-width: 720px) {
        .products{
            gap: 24px;
        }
    }
</style>
