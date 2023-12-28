<template>
    <div class="col div-title">
        <p class="title-second">{{ props.title }}</p>
        <div class="row div-subtitle">
            <img src="../assets/trigo_gradiente.png" alt="Trigo">
            <p class="subtitle-second">{{ props.subtitle }}</p>
            <img src="../assets/trigo_gradiente.png" alt="Trigo">
        </div>
    </div>
</template>

<script lang="ts" setup>

    export type SecondTitleProps = {
        title: string,
        subtitle: string
    }

    const props = defineProps<SecondTitleProps>();

</script>

<style scoped>
    .div-title{
        gap: 0;
    }
    .div-subtitle > img{
        height: 24px;
    }
    .div-subtitle > img:last-child{
        transform: rotate(180deg);
    }


    @media (max-width: 720px) {
        .div-subtitle > img{
            height: 16px;
        }
        .div-subtitle{
            gap: 8px;
            flex-direction: row;
        }
    }
</style>
