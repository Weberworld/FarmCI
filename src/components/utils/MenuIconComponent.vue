<!-- Builds a Menu Icon -->

<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="text-center" :class="[props.height?props.height:'h-4', props.width?props.width:'w-4']">
        <path stroke-linecap="round" stroke-linejoin="round" :d="props.iconPath" />
    </svg>
</template>

<script setup>

import {defineProps} from "vue"


const props = defineProps({
    iconPath: String,
    height: String,
    width: String
})


</script>