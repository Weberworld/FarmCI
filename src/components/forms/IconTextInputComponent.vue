<template>
    <div class=" group justify-start space-y-1">

        <!-- Input Label -->
        <label :for="props.inputId" class="font-semibold text-lg text-neutral-700">
            {{ props.label }}

        </label>

        <div class="group flex border-2 border-solid px-3 py-2 rounded-2xl justify-between">

            

            <div class="px-2 my-auto w-full">
                <input v-model="text_input" :type="props.inputType" :id="props.inputId" :name="props.inputName" :placeholder="props.placeholder"
                    @change="validateInput" required :disabled="props.disabled" :class="AppColors.text_success"
                    class="w-full p-2 rounded-lg outline-none font-semibold peer/input peer-invalid:border-red-600 placeholder:font-normal ">
            </div>

            <div class="justify-end m-auto" >
                <div class="rounded-full p-2 font-bold" :class="[AppColors.bg_yellow, AppColors.text_white]">
                    <MenuIconComponent :iconPath="props.iconPath" :height="'h-5'" :width="'w-5'" class="my-auto" />

                </div>
            </div>

        </div>
    </div>

</template>


<script setup>
import AppColors from "@/appDependencies/appColors"
import { ref, defineProps, defineEmits, watch } from "vue"
import MenuIconComponent from "@/components/utils/MenuIconComponent.vue"

const props = defineProps({
    disabled: Boolean,
    inputValue: String,
    label: String,
    iconPath: String,
    inputType: String,
    inputId: String,
    inputName: String,
    placeholder: String,
})

const text_input = props.inputValue?ref(props.inputValue):ref("");


const emit = defineEmits(['error_message', "text_input"])

watch(text_input, () => { emit("text_input", text_input.value) })

function validateInput() {
    if (!text_input.value) {
        emit("error_message", "${text_input_name.value} cannot be empty")
    }
}



</script>