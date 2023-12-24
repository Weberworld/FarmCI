<template>
    <section>

        <!-- Header Text -->
        <HeaderTextComponent :text="'Forgotten Password'"/>

        <div class="pt-5">

            <p class="text-center font-semibold text-md ">Enter your registered Email</p>

            <!-- Error messages -->
            <template v-if="error_msg">
                <TextErrorMessageComponent :message="error_msg" :success="successful"/>
            </template>

            <!-- End of Error message  -->
            <form method="post" @submit.prevent="resetAction">
                <!-- Email Input -->
                <div class="w-full py-6 gap-5">
                    <IconTextInputComponent :inputType="'email'" :label="'Email'" :placeholder="'Enter Your Email Address'"
                        :iconPath="AppIcons.user_icon"
                        @text_input="(msg) => { email_input = msg }" />
                </div>

                <!-- Login Button -->
                <div class="pt-4 text-center">
                    <PrimaryButtonComponent :text="'Reset'" :loading=" loading " />
                </div>


                <div class="pt-5">
                    <!-- Back to Login  -->
                    <LinkableTextComponent :text="'Back to Login'" :linkTo="'login'" />


                </div>
            </form>

        </div>
    </section>
</template>

<script setup>
import { ref } from "vue"
// import store from "@/storage/store"
import HeaderTextComponent from "@/components/texts/HeaderTextComponent.vue"
import IconTextInputComponent from "@/components/forms/IconTextInputComponent.vue"
import PrimaryButtonComponent from "@/components/buttons/PrimaryButtonComponent.vue"
import LinkableTextComponent from "@/components/texts/LinkableTextComponent.vue"
import TextErrorMessageComponent from "@/components/texts/TextErrorMessageComponent.vue"
import AppIcons from "@/appDependencies/appIcons"
// import router from "@/paths/url_patterns"


const email_input = ref("")
// const loading = computed(() => store.state.error_message.loading);
// const error_msg = computed(() => store.state.error_message.message);
// const successful = computed(() => store.state.error_message.success)

// Methods
async function resetAction() {
    // if (email_input.value) {
    //     store.state.error_message.message = "";    
    //     store.state.error_message.loading = true;
    //     await store.dispatch("requestForgottenPassword", {email: email_input.value})
    //     router.push({name: 'login'})
        
    // }
    // else {
    //     error_msg.value = "Invalid Credentials";
    //     loading.value = false
    // }

}

</script>