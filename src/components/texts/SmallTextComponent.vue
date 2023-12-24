<template>

    
        <p class="text-sm" :class="text_color">{{ props.text }}</p>
        
</template>


<script setup>
import {ref, defineProps} from "vue"
import AppColors from "@/appDependencies/appColors"

const text_color = ref("")
const props = defineProps({
    text: String,
    color: String
})

function checkColorType(){
    if (props.color == "primary")
        text_color.value = AppColors.text_success;
    else if (props.color == "light")
        text_color.value = AppColors.text_white;
    else if (props.color == "yellow")
        text_color.value = AppColors.text_yellow;
}

checkColorType()
</script>