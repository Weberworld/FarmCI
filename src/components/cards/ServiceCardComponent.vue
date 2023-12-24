<template>
    <div
        class="p-7 space-y-3 border border-solid border-gray-200 shadow-lg rounded-lg hover:bg-gradient-to-b hover:from-green-950 hover:to-yellow-800 hover:text-gray-100 hover:ease-in-out duration-500">

        <!-- Image -->
        <div class="space-y-3 justify-center text-center mx-auto font-serif">
            <!-- Service Image -->
            <ImageBuilderComponent :imgPath="props.serviceImg" :width="'w-24'" :height="'h-24'"
                class="rounded-full mx-auto shadow-xl" />
            <!-- Service Name -->
            <HeaderTextComponent :text="props.serviceName" class="" />
        </div>

        <!-- Service Details -->
        <div class="p-4 border border-solid border-gray-200 shadow-md mx-auto">
            <p class="text-md">{{ props.serviceDetails }}</p>
        </div>
    </div>
</template>

<script setup>

import { defineProps } from "vue"
import HeaderTextComponent from "@/components/texts/HeaderTextComponent.vue"
import ImageBuilderComponent from "@/components/utils/ImageBuilderComponent.vue"


const props = defineProps({
    serviceImg: String,
    serviceName: String,
    serviceDetails: String,
})


</script>