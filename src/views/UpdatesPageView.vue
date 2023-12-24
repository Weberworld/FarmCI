<template>
    <main>

        <PageHeaderTextAndBackNav :text="'Notifications'" />
        <div class="flex font-bold justify-evenly p-1 border border-solid border-gray-200 rounded-lg">
            <div class="border border-solid border-gray-200 rounded-sm p-2 shadow-inner w-full text-center hover:bg-gradient-to-tr from-green-800 to-stone-700 hover:text-white" >
                <SmallTextComponent :text="'All'" />
            </div>

            <div class="border border-solid border-gray-200 rounded-sm p-2 shadow-inner w-full text-center hover:bg-gradient-to-tr from-green-800 to-stone-700 hover:text-white">
                <SmallTextComponent :text="'Unread'" />
            </div>

        </div>
        <div class="space-y-4 w-screen p-5">
            <template v-for="each in notifications" :key="each">
                <NotificationsCardComponent :title="each.title" :subTitle="each.subTitle" :body="each.body"
                    :imgPath="each.imgPath" />

            </template>




        </div>
    </main>
</template>


<script setup>
import { ref } from "vue"
import SmallTextComponent from "@/components/texts/SmallTextComponent.vue"
import PageHeaderTextAndBackNav from "@/components/utils/PageHeaderTextAndBackNavComponent.vue"
import NotificationsCardComponent from "@/components/cards/NotificationsCardComponent.vue";

const notifications = ref([
    {
        imgPath: 'logo.png',
        title: "Era of New Fertilizer",
        subTitle: "Our idealogy about adding fertilizers to farm products",
        body: "Good day ladies and gentlemen panel of judges, accurate time keeper and my co-debators. The personality stanidn beforeyou is Omotoso Boluwatife Emmauel;"
    }
])

</script>