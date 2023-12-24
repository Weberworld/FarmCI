<template>
    <!-- Login Form -->

    <div>

        <HeaderTextComponent :text="'Login into Your Account'" :color="'primary'" class="text-center" />

        <!-- Login inputs -->
        <div class="pt-10">

            <!-- Error messages -->
            <template v-if="error_msg">
                <TextErrorMessageComponent :message="error_msg" :success="successful" />
            </template>

            <!-- End of Error message  -->


            <form method="post" class="" @submit.prevent="loginAction">

                <!-- Username Input -->
                <div class="w-full py-3 gap-5">
                    <IconTextInputComponent :label="'Username'" :inputId="'username'" :inputNamae="'username'"
                        :placeholder="'Enter your Username'" @text_input="(msg) => { username_input = msg }"
                        :iconPath="AppIcons.user_icon" />
                </div>

                <!-- Password Input -->
                <div class="w-full py-3 gap-5">
                    <IconTextInputComponent :label="'Password'" :inputType="'password'" :inputId="'password'"
                        :inputNamae="'password'" :placeholder="'Enter your Password'"
                        @text_input="(msg) => { password_input = msg }" :iconPath="AppIcons.password_icon" />
                </div>

                <!-- Forgotten password -->
                <div class="text-right justify-end">
                    <LinkableTextComponent :text="'Forgotten Password?'" :linkTo="'forgot-password'" />
                </div>


                <!-- Login Button -->
                <div class="pt-4 mx-auto w-full text-center">
                    <PrimaryButtonComponent :text="'Login / Sign Up'" :loading="loading" />
                </div>

            </form>
        </div>
    </div>

    <!-- Login Text -->
</template>

<script setup>
import { ref, computed } from "vue"
import PrimaryButtonComponent from "@/components/buttons/PrimaryButtonComponent.vue"
import HeaderTextComponent from "@/components/texts/HeaderTextComponent.vue"
import TextErrorMessageComponent from "@/components/texts/TextErrorMessageComponent.vue"
import LinkableTextComponent from "@/components/texts/LinkableTextComponent.vue"
import IconTextInputComponent from "@/components/forms/IconTextInputComponent.vue"
import AppIcons from "@/appDependencies/appIcons"
import store from "@/storage/store"
// import router from "@/url/urlPatterns"



const error_msg = computed(() => store.state.error_message.message);
const loading = computed(() => store.state.error_message.loading);
// const successful = computed(() => store.state.error_message.success);

const username_input = ref("");
const password_input = ref("");


// Methods
async function loginAction() {
    if (username_input.value && password_input.value) {
        store.state.error_message.message = "";
        store.state.error_message.loading = true;

        await store.dispatch('loginAction', { username: username_input.value, password: password_input.value });

    }




}


// watch(successful, () => {
//     if (successful.value) {
//         router.push({ name: 'dashboard' });

//     }
// })


</script>