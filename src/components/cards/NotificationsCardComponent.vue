<template>
    <div class="p-3 h-auto w-full flex space-x-3 border border-solid border-gray-200 rounded-lg shadow-md hover:ease-in-out hover:duration-200 hover:bg-gradient-tr hover:from-bg-green-800 hover:to-stone-600">

        <div class="w-16">
            <div class="rounded-md border border-gray-200 p-1">

            <ImageBuilderComponent :imgPath="props.imgPath" class="rounded-full"/>
        </div>
        </div>

        <div class="space-y-2">
            <SmallTextComponent :text="props.title" class="font-bold" />
            <SmallTextComponent :text="props.subTitle" class="pr-3 font-semibold" :color="'primary'"/>
            <!-- <SmallTextComponent :text="props.body" :class="'primary'"/> -->

            <div class="flex justify-between font-semibold space-y-2">
                <SmallTextComponent :text="'Posted on:'" />
                <SmallTextComponent :text="props.date" />

            </div>

        </div>
    </div>
</template>


<script setup>
import { defineProps } from "vue"
import ImageBuilderComponent from "@/components/utils/ImageBuilderComponent.vue"
// import LargeTextComponent from "@/components/texts/LargeTextComponent.vue"
import SmallTextComponent from "@/components/texts/SmallTextComponent.vue"


const props = defineProps({
    imgPath: String,
    title: String,
    subTitle: String,
    body: String,
    date: String,
    read: Boolean,
})
</script>