<template>
    <div class="sticky top-0 flex p-3 items-center h-auto w-full z-40" :class="AppColors.bg_light">
        <!-- Back Icon -->
        <router-link :to="{ name: props.backLink }">
            <MenuIconComponent :iconPath="AppIcons.arrow_back_icon"/>
        </router-link>

        <div class="relative mx-auto">
            <HeaderTextComponent :text="props.text"/>
        </div>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
import MenuIconComponent from './MenuIconComponent.vue';
import AppIcons from '@/appDependencies/appIcons';
import HeaderTextComponent from '../texts/HeaderTextComponent.vue';
import AppColors from '@/appDependencies/appColors';
const props = defineProps({
    text: String,
    backLink: String,
})
</script>