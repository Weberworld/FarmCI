<template>
    <div class="justify-center text-center bg-inherit w-full h-full items-center">
            <ImageBuilderComponent :imgPath="props.clientImg" class="rounded-full shadow-md shadow-yellow-500 m-auto w-20 h-20 sm:w-28 sm:h-28"/>

        <h6 class="animate-pulse uppercase text-md sm:text-2xl font-bold py-3 w-full "  :class="AppColors.text_white">{{ props.clientName }}</h6>
    </div>


</template>


<script setup>
import {defineProps} from "vue"
import AppColors from "@/appDependencies/appColors"
import ImageBuilderComponent from "@/components/utils/ImageBuilderComponent.vue"

const props = defineProps({
    clientImg: String,
    clientName: String
})
</script>