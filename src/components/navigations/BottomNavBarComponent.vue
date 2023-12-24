<template>
    <div class="fixed left-0 bottom-0 w-screen  py-3" :class="[AppColors.bg_success, AppColors.text_yellow]">
        <ul class="flex justify-between px-7 my-auto">

            <NavItemComponent :iconPath="AppIcons.home_icon" :linkTo="'home'"/>
            <NavItemComponent :iconPath="AppIcons.dashboard_icon"/>
            <NavItemComponent :iconPath="AppIcons.nav_icon" :linkTo="'products'"/>
            <NavItemComponent :iconPath="AppIcons.news_icon" :linkTo="'updates'"/>
            <NavItemComponent :iconPath="AppIcons.cart_icon" :linkTo="'carts'"/>
        </ul>

    </div>
</template>

<script setup>
import AppColors from '@/appDependencies/appColors';
import AppIcons from '@/appDependencies/appIcons';
import NavItemComponent from '@/components/navigations/NavItemComponent.vue';

</script>