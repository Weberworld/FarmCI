<template>
    <div class="p-2 rounded-xl min-w-max" :class="[bg_color, text_color]">
        <span class="font-semibold text-center">{{ props.text }}</span>
        </div>

</template>



<script setup>
 import { ref, defineProps } from 'vue';
 import AppColors from "@/appDependencies/appColors"

const bg_color = ref("")
const text_color = ref(AppColors.text_white);
 const props = defineProps({
    text: String,
    bgColor: String,
 })


 function checkBgColor(){
    if (props.bgColor == "dark")
        bg_color.value = AppColors.bg_dark;
    else if(props.bgColor == 'light'){
        bg_color.value = AppColors.bg_light;
        text_color.value = AppColors.text_primary;
    }
    else if (props.bgcolor == "success")
        bg_color.value == AppColors.bg_success;
    else{
        bg_color.value =AppColors.bg_primary;
    }
 }

 checkBgColor();


</script>