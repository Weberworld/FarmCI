<template>
    <section :class="AppColors.bg_primary">
        <div class=" py-10 sm:px-2 sm:py-20 max-w-screen min-h-screen">
            <div class="p-5 sm:p-20 mx-auto">
                <div class="grid sm:grid-cols-2 gap-5">

                    <!-- Logo and App Desccription -->
                    <div clas="container mx-auto">
                        <div
                            class="flex space-x-4 sm:space-x-2 sm:pt-48 items-center justify-center sm:items-start sm:justify-start">
                            - <div>

                                <img src="@/assets/logo.png" class="h-16 w-16 rounded-lg" />
                            </div>

                            <!-- App Name -->
                            <router-link :to="{ name: 'home' }">
                                <HeaderTextComponent :text="'FarmCi'" :color="'light'" />
                            </router-link>
                        </div>

                    </div>


                    <div class="max-w-screen rounded-lg" :class="AppColors.bg_white">
                        <main class="container px-5 py-10 sm:p-5">

                            <!-- Child Component -->
                            <router-view />

                        </main>

                        <div class="pt-6">
                            <!-- <CopyrightComponent /> -->
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AppColors from "@/appDependencies/appColors"
import HeaderTextComponent from "@/components/texts/HeaderTextComponent.vue"
// import CopyrightComponent from "@/components/CopyrightComponent.vue"

</script>