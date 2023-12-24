<template>
    <nav class="relative container mx-auto p-6">
        <div class="flex justify-between">
            <div class="pt-2 text-left">
                <HeaderTextComponent :text="'FarmCI'" :color="'light'" />
            </div>


            <!-- Large Screen Nav items -->
            <div class="hidden sm:flex justify-between ">
                <div class="hidden sm:flex space-x-3">
                    <a v-for="item in nav_item_list" :key="item" :href="item.id"
                        class="text-slate-200 font-semibold py-1 px-3 hover:bg-amber-500 hover:text-white hover:cursor-pointer">
                        {{ item.name }}
                    </a>
                </div>

                <div>
                    <a class="bg-amber-800 text-slate-200 py-2 px-3 rounded-xl shadow-md hover:cursor-pointer">Join Us</a>
                </div>
            </div>


            <!-- Small Screen side bar -->
            <div class="sm:hidden rounded-lg">
                <div class="p-2" :class="AppColors.bg_dark" @click="show_mobile = !show_mobile">
                    <MenuIconComponent :iconPath="AppIcons.nav_icon" class="bg-black" :height="'h-10'" :width="'w-10'" />
                </div>

                <div v-if="show_mobile">
                    <div class="absolute translate-x-30 ease-linear duration-1000 top-20 right-0 rounded-lg w-full h-screen p-8 shadow-inner shadow-green-900"
                        :class="[AppColors.bg_white, AppColors.text_success]">
                        <ul class="absolute list-disc list-inside space-y-6 text-left justify-baseline mt-12 h-auto">
                            <li v-for="item in nav_item_list" :key="item">
                                <a :href="item.id" class="font-bold text-2xl">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>



        </div>
    </nav>
</template>


<script setup>
import { ref } from 'vue';
import AppIcons from "@/appDependencies/appIcons";
import AppColors from "@/appDependencies/appColors";
import HeaderTextComponent from '@/components/texts/HeaderTextComponent.vue';
import MenuIconComponent from "@/components/utils/MenuIconComponent.vue/";



const nav_item_list = ref([
    {
        name: "Home",
        id: "#hero" 
    },
    {
        name: "About",
        id: "#about" 
    },
    {
        name: "Service",
        id: "#services" 
    },
    {
        name: "Features",
        id: "#features" 
    },
    {
        name: "Partners",
        id: "#partners" 
    },
    {
        name: "Contact",
        id: "#contact" 
    },
])
const show_mobile = ref(false);

</script>