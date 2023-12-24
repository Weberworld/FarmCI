<template>
    <img :src="img" :alt="props.imgAlt" class="object-contain" :class="[props.height, props.width]" />
</template>

<script setup>

import { ref, defineProps } from "vue"


const props = defineProps({
    imgPath: String,
    imgAlt: String,
    height: String,
    width: String,
    fromOtherSource: Boolean(false)
})
const img = ref("")

function getImage() {

    if (props.fromOtherSource)
        img.value = require(props.imgPath)
    else
        img.value =  require('../../assets/' + props.imgPath);
}
getImage();

</script>