<template>
    <!-- Page Header -->
    <PageHeaderTextAndBackNavComponent :text="'Carts'" :backLink="'products'" />

    <main class="p-5">

        <!-- For available cart items -->
        <section v-if="cart_items.length >= 1">



            <div class="py-5">
                <ul class="space-y-4 grid grid-cols-1 sm:grid-cols-2">
                    <!-- Display each cart item -->
                    <li v-for="item in cart_items" :key="item">
                        <CartItemComponent :item="item" />
                    </li>
                </ul>
            </div>


            <!-- Checkout Button -->
            <div class="pt-8">
                <div class="flex space-x-3 font-bold">
                    <p>Total: </p>
                    <p class="space-x-1"><span class="underline">N</span>{{ totalPrice }}</p>
                </div>
                <PrimaryButtonComponent :text="'Checkout'" class="my-2" />

            </div>



        </section>


        <!-- When user has not ordered for an item -->
        <div v-else>
            <div class="border border-solid border-gray-200 rounded-lg p-4 w-full text-center space-y-4">

                <p class="font-semibold text-lg ">No ordered Products yet!!</p>
                <div>
                    <TextButtonComponent :text="'View Product'" :linkTo="'products'"/>

                </div>
                

            </div>
        </div>


    </main>
</template>

<script setup>
import { ref } from 'vue';
import CartItemComponent from '@/components/cards/CartItemComponent.vue';
import PrimaryButtonComponent from "@/components/buttons/PrimaryButtonComponent.vue"
import TextButtonComponent from "@/components/buttons/TextButtonComponent.vue"

import PageHeaderTextAndBackNavComponent from "@/components/utils/PageHeaderTextAndBackNavComponent.vue"
const totalPrice = ref(200000);
const cart_items = ref([
    {
        category: "Farm Implementation",
        productName: "NPK Fertlizer",
        price: 30000,
        quantity: 2
    },
    {
        category: "Farm Implementation",
        productName: "NPK Fertlizer",
        price: 30000,
        quantity: 2
    },
    {
        category: "Farm Implementation",
        productName: "NPK Fertlizer",
        price: 30000,
        quantity: 2
    },
])

</script>