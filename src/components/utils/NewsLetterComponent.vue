<template>
    <!-- Newsletter -->
    <form class="group space-y-3">
        <div>
            <IconTextInputComponent :placeholder="'Subscribe to our newsletter'" :iconPath="AppIcons.group_chat_icon" 
            :inputType="'email'" @text_input="(val) => {email = val}" v-bind-required="true"/>
        </div>
        <div class="text-center">
            <!-- <TextButtonComponent :text="'Subscribe'" :type="'yellow'" /> -->
            <PrimaryButtonComponent :text="'Subscribe'" :type="'yellow'"/>

        </div>
    </form>
</template>


<script setup>
import { ref } from "vue"
import AppIcons from "@/appDependencies/appIcons"
// import TextButtonComponent from "@/components/buttons/TextButtonComponent.vue"
import IconTextInputComponent from "@/components/forms/IconTextInputComponent.vue";
import PrimaryButtonComponent from "../buttons/PrimaryButtonComponent.vue";


const email = ref("");

</script>