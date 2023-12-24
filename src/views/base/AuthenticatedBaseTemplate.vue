<template>
    <div>

        <!-- Nav Header -->
        <div class="sticky z-10 flex px-8 sm:px-24 top-0 text-white bg-inhert text-right items-center justify-between w-full"
            :class="AppColors.bg_success">

            <TopNavBarComponent />

        </div>
        <main class=" z-0">
            <router-view />
        </main>
    </div>

    <!-- <BottomNavBarComponent /> -->
</template>

<script setup>
// import {ref} from "vue"
// import BottomNavBarComponent from "@/components/navigations/BottomNavBarComponent.vue";
import AppColors from "@/appDependencies/appColors";
import TopNavBarComponent from "@/components/navigations/TopNavBarComponent.vue";


// function verifyAuth() {

//     if (localStorage.getItem('loggedIn')){
//         show
//     }
    
// }

</script>