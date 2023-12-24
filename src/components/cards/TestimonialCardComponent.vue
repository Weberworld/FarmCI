<template>
    
    <div class="p-3 border border-solid border-gray-200 rounded-2xl">
        <div class="flex space-x-4 items-center">
            <!-- Image -->
            <div class="items-center my-auto">
                <ImageBuilderComponent :imgPath="props.imgPath" class="rounded-full" :height="'h-12'" :width="'w-12'" />
            </div>

            <div class="space-y-3 text-left object-fit w-full">
                <p class=" text-xl font-bold" :class="AppColors.text_primary">{{ props.text }}</p>
                <p class="justif-start text-sm font-semibold" :class="AppColors.text_muted">{{ props.desText }}</p>
            </div>

        </div>

    </div>
</template>

<script setup>
import { defineProps } from "vue"
import AppColors from "@/appDependencies/appColors"
import ImageBuilderComponent from "@/components/utils/ImageBuilderComponent.vue";


const props = defineProps({
    text: String,
    imgPath: String,
    desText: String,
});

</script>