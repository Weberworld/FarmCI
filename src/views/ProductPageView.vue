<template>
    <!-- Page Header -->
    <PageHeaderTextAndBackNavComponent :text="'Top Deals'" :backLink="'home'" />

    <main class="p-5 sm:p-10 pb-10 h-screen">


        <section>


            <!-- Search Input bar -->
            <div class="py-3">
                <IconTextInputComponent :inputType="'search'" :inputId="'searchKey'" :iconPath="AppIcons.chat_icon" />
            </div>


            <!-- Categories -->
            <div class="overflow-auto py-3">
                <ul class="flex space-x-3 text-clip">

                    <li class="w-full block flex-wrap">
                        <TextOnBackgroundComponent :text="'Fertilizers/Chemicals'" :bgColor="'success'" />
                    </li>
                    <li class="w-full block">
                        <TextOnBackgroundComponent :text="'Farm Implementation'" :bgColor="'success'" />
                    </li>
                    <li>
                        <TextOnBackgroundComponent :text="'Farm Implementation'" :bgColor="'success'" />
                    </li>

                </ul>

            </div>


            <!-- Product List -->
            <div class="py-5 overflow-y-scroll">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mx-auto overflow-auto">
                    <div v-for="product in products" :key="product.id">
                        <ProductCardComponent :product="product" />
                    </div>
                    <!-- <ProductCardComponent :productName="'Insecticide'" :imgPath="'@/assets/tree_background.png'"/>
                    <ProductCardComponent :productName="'Insecticide'" :imgPath="'@/assets/tree_background.png'"/>
                    <ProductCardComponent :productName="'Insecticide'" :imgPath="'@/assets/tree_background.png'"/>
                    <ProductCardComponent :productName="'Insecticide'" :imgPath="'@/assets/tree_background.png'"/>
                    <ProductCardComponent :productName="'Insecticide'" :imgPath="'@/assets/tree_background.png'"/>
                    <ProductCardComponent :productName="'Insecticide'" :imgPath="'@/assets/tree_background.png'"/> -->
                </div>

            </div>

        </section>


    </main>
</template>


<script setup>
import AppIcons from "@/appDependencies/appIcons";
import { computed, onMounted } from "vue"
import store from "@/storage/store";
import PageHeaderTextAndBackNavComponent from "@/components/utils/PageHeaderTextAndBackNavComponent.vue"
import IconTextInputComponent from "@/components/forms/IconTextInputComponent.vue"
import ProductCardComponent from "@/components/cards/ProductCardComponent.vue"
import TextOnBackgroundComponent from "@/components/texts/TextOnBackgroundComponent.vue"

const products = computed(() => store.state.products);

async function getProducts() {
    await store.dispatch('getProductsList');
}
onMounted(getProducts)


</script>