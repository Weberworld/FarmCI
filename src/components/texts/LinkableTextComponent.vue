<template>
    <router-link :to="{name: props.linkTo}" :class="text_color" class="font-semibold text-sm">
        {{ props.text }}
</router-link>


</template>
<script setup>

import { ref, defineProps } from 'vue';
import AppColors from "@/appDependencies/appColors"


const props = defineProps({
    text: String,
    linkTo: String,
    type: String,
})

const text_color = ref("");


function checkType() {

if (props.type == "yellow")
    text_color.value = AppColors.text_yellow;
else if (props.type == "success")
    text_color.value = AppColors.text_success;
else if (props.type == "danger")
    text_color.value = AppColors.text_danger;
else
    text_color.value = AppColors.text_primary;
}

checkType();
</script>