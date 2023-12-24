<template>
    <div class="p-3 mx-auto">
        <div class=" h-32 w-32">
            <img :src="props.product.product_image" class="h-full w-full object-cover rounded-2xl" />
            <!-- <ImageBuilderComponent :imgPath="props.imgPath" :imgAlt="props.productName + 'image'"
                class="h-full w-full object-cover rounded-2xl" :from/> -->
        </div>


        <div class="py-2 space-y-3 text-center mx-auto">
            <p class="font-bold text-lg" :class="AppColors.text_dark" :alt="props.product.product_name + 'image'">{{ props.product.product_name }}
            </p>
            <div>

                <TextButtonComponent :text="'Add Cart'" @click="addToCart"/>
            </div>

        </div>


    </div>
</template>

<script setup>
import { defineProps } from "vue"
import AppColors from "@/appDependencies/appColors"
import TextButtonComponent from "../buttons/TextButtonComponent.vue";
import axios_client from "@/axiosClient";
// import ImageBuilderComponent from "../utils/ImageBuilderComponent.vue";

const props = defineProps({
    product: Array
})

async function addToCart(){
    await axios_client.post('add-to-carts', {
        product_id: props.product.id
    })
    .then(({data}) => {
        if (data['success'])
            window.alert("Added to Cart");
    })
    .catch((e) => {
        console.log(e);
    })
}


</script>