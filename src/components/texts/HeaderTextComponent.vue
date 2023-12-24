<template>
    <div class="">

        <h3 class="font-bold" :class="[text_color, props.size?props.size:'text-xl sm:text-2xl']">{{ props.text }}</h3>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue"
import AppColors from "@/appDependencies/appColors"

const props = defineProps({
    text: String,
    color: String,
    size: String,
})
const text_color = ref('')

function checkColorType() {
    if (props.color == "success")
        text_color.value = AppColors.text_success;

    else if (props.color == "light")
        text_color.value = AppColors.text_white;

    else if (props.color == "dark")
        text_color.value = AppColors.text_dark;
    else 
        text_color.value = AppColors.text_primary;


}

checkColorType();


</script>