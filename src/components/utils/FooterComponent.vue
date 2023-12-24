<template>
    <div class="justify-left text-left space-y-5">

        <div class="space-y-2 mx-auto">
            <!-- Site Name -->
            <HeaderTextComponent :text="'FarmCI'" :type="'light'" />
            <p>Farm Central Intelligence</p>

            <!-- Contact Details -->
            <div class="space-y-1">
                <p class="space-x-3 font-bold">Phone: <span class="font-semibold text-sm text-gray-300">+234 903 3020
                        30203.
                        +234 912 0303 6335 6432</span></p>
                <p class="space-x-3 font-bold">Email: <span
                        class="font-semibold text-sm text-gray-300">support@farmci.com</span></p>
            </div>
        </div>


        <div class="sm:grid sm:grid-cols-2 sm:items-center space-y-7 w-full">

            <!-- Newsletter -->
            <NewsLetterComponent/>


            <!-- Useful Links -->
            <div class="sm:mx-auto">
                <HeaderTextComponent :text="'Useful Links'" :type="'light'" />

                <ul class="list-disc space-y-3 px-7 py-3 ">
                    <li>
                        <LinkToExternalServerComp>
                            <LinkableTextComponent :text="'Home'" />
                        </LinkToExternalServerComp>
                    </li>

                    <li>
                        <LinkToExternalServerComp :linkTo="'#about'">
                            <LinkableTextComponent :text="'About Us'" />
                        </LinkToExternalServerComp>
                    </li>

                    <li>
                        <LinkToExternalServerComp :linkTo="''">
                            <LinkableTextComponent :text="'Our Aims'" />
                        </LinkToExternalServerComp>
                    </li>

                    <li>
                        <LinkToExternalServerComp :linkTo="''">
                            <LinkableTextComponent :text="'Services'" />
                        </LinkToExternalServerComp>
                    </li>

                    <li>
                        <LinkToExternalServerComp :linkTo="''">
                            <LinkableTextComponent :text="'Contact Us'" />
                        </LinkToExternalServerComp>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Line Divider -->
        <hr class="px-8 mt-3 mx-auto text-center">



        <div class="mx-auto text-center justify-center pt-3 sm:flex sm:justify-between sm:text-right w-full">
            <p>
                Farmci.com
            </p>

            <!-- Social Media Icons -->
            <ul class="w-full pt-3 inline-flex space-x-4 mx-auto justify-center sm:justify-end">
                <LinkToExternalServerComp :linkTo="'google.com'">
                    <ImageBuilderComponent :imgPath="'images/social/facebook.jpg'" class="rounded-full"
                        :width="'w-6 sm:w-8'" :height="'h-6 sm:h-8'" />
                </LinkToExternalServerComp>
                <LinkToExternalServerComp :linkTo="'google.com'">
                    <ImageBuilderComponent :imgPath="'images/social/whatsapp.jpg'" class="rounded-full"
                        :width="'w-6 sm:w-8'" :height="'h-6 sm:h-8'" />
                </LinkToExternalServerComp>
                <LinkToExternalServerComp :linkTo="'google.com'">
                    <ImageBuilderComponent :imgPath="'images/social/twitter.png'" class="rounded-full" :width="'w-6 sm:w-8'"
                        :height="'h-6 sm:h-8'" />
                </LinkToExternalServerComp>
                <LinkToExternalServerComp :linkTo="'google.com'">
                    <ImageBuilderComponent :imgPath="'images/social/instagram.jpg'" class="rounded-full"
                        :width="'w-6 sm:w-8'" :height="'h-6 sm:h-8'" />
                </LinkToExternalServerComp>
            </ul>
        </div>
    </div>
</template>


<script setup>
import HeaderTextComponent from "@/components/texts/HeaderTextComponent.vue"
import LinkableTextComponent from "@/components/texts/LinkableTextComponent.vue";
import ImageBuilderComponent from "@/components/utils/ImageBuilderComponent.vue"
import LinkToExternalServerComp from "@/components/external_links/LinkToExternalServerComp.vue"
import NewsLetterComponent from "@/components/utils/NewsLetterComponent.vue"

</script>