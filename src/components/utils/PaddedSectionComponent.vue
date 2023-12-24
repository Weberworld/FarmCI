<template>
    <section class="p-8 sm:p-10 sm:px-24 sm:py-12 pb-16 mx-auto text-center space-y-4" :id="props.sectionId" :class="[bg_color, text_color]">
        <HeaderTextComponent :size="'text-3xl sm:text-5xl'" :text="props.headerText" class="underline text-center py-4" :class="text_color"/>

        <slot class="pt-12"></slot>
    </section>
</template>

<script setup>
import { ref, defineProps } from "vue"
import AppColors from "@/appDependencies/appColors"
import HeaderTextComponent from "@/components/texts/HeaderTextComponent.vue";

const props = defineProps({
    sectionId: String,
    headerText: String,
    bgColor: String,
}
)
const bg_color = ref("")
const text_color = ref("")

function checkBgColor() {
    if (props.bgColor == "light") {
        bg_color.value = AppColors.bg_white;
        text_color.value = AppColors.text_primary

    }
    else if (props.bgColor == 'yellow') {
        bg_color.value = AppColors.bg_yellow;
        text_color.value = AppColors.text_primary
    }
    else if (props.bgColor == 'success') {
        bg_color.value = AppColors.bg_success;
        text_color.value = AppColors.text_primary
    }
    else {
        text_color.value = AppColors.text_white;
        bg_color.value = AppColors.bg_primary;
    }
}

checkBgColor();
</script>