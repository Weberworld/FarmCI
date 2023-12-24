<template>
    <a :href="'https://www./' + props.linkTo">
        <slot> </slot>
    </a>
</template>


<script setup>
import { defineProps } from "vue"

const props = defineProps({
    linkTo: String,
})

</script>