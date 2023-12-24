<template>
    <router-link :to="{name: props.linkTo}" class="relative hover:bg-white my-auto hover:-translate-y-8 duration-300 p-2 rounded-full bg-green-950">
        <MenuIconComponent :iconPath="props.iconPath" :height="'h-6'" :width="'w-6'" />

    </router-link>
</template>


<script setup>
import { defineProps } from 'vue';
import MenuIconComponent from '@/components/utils/MenuIconComponent.vue';



const props = defineProps({
    name: String,
    iconPath: String,
    linkTo: String
})

</script>