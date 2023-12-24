<template>
    <button :class="[AppColors.text_white, bg_color, props.padding?props.padding:'py-1']"
            class="text-semibold text-sm hover:ease-in-out hover:duration-200 drop-shadow-lg rounded-xl px-3"
    >
        <router-link :to="{ name: props.linkTo }">
            <span class="animate-pulse">{{ props.text }} </span>
        </router-link>
    </button>
</template>


<script setup>

import { ref, defineProps } from "vue"
import AppColors from "@/appDependencies/appColors"

const props = defineProps({
    text: String,
    linkTo: String,
    type: String,
    padding: String,
})

const bg_color = ref("");

function checkType() {

    if (props.type == "primary")
        bg_color.value = AppColors.bg_primary;
    else if (props.type == "success")
        bg_color.value = AppColors.bg_success;
    else if (props.type == "danger")
        bg_color.value = AppColors.bg_success;
    else
        bg_color.value = AppColors.bg_yellow;
}

checkType();
</script>