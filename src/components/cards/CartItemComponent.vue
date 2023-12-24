<template>
    <div class="p-3 rounded-lg border border-solid border-gray-200">
        <div class="flex space-x-3 w-full">

            <!-- image -->
            <div class="h-16 w-16 my-auto">
                <img src="@/assets/images/tree_background.png" class="object-cover h-full w-full drop-shadow-lg" />
            </div>

            <!-- Product Details -->
            <div class="w-full">
                <p class="font-bold"> {{ props.item.category }}</p>
                <p>{{ props.item.productName }}</p>
                <div class="flex justify-between items-baseline font-semibold pt-2">
                    <stong><span class="font-bold underline-offset-4">N</span>{{ props.item.price }}</stong>
                    <div class="flex justify-between space-x-7">

                        <div class="flex justify-evenly font-semibold text-sm space-x-3 items-center">
                            <span @click="decreaseQuantity" class="text-lg">-</span>
                            <span>{{ quantity }}</span>
                            <span @click="addQuantity" class="text-lg">+</span>
                        </div>

                        <div class="p-2 rounded-md bg-yellow-500 font-extrabold text-green-900">
                            <MenuIconComponent :iconPath="AppIcons.delete_icon"/>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    </div>
</template>


<script setup>
import { ref, defineProps } from "vue";
import AppIcons from "@/appDependencies/appIcons";
// import AppColors from "@/appDependencies/appColors";
import MenuIconComponent from "@/components/utils/MenuIconComponent.vue"



const props = defineProps({
    item: Array,
}
)
const quantity = ref(props.item.quantity)

function addQuantity(){
    if (quantity.value >= 0)
        quantity.value++;
}
function decreaseQuantity(){
    if (quantity.value > 0)
        quantity.value--;
}
</script>