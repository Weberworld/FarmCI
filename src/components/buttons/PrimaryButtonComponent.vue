<template>
    <button class="p-3 text-semibold text-sm hover:ease-in-out hover:duration-200 drop-shadow-lg rounded-xl px-3 disabled:bg-gray-100 border disabled:text-gray-800 disabled:font-bold enabled:text-white mx-auto" :class="[bg_color, border_color]" :disabled="props.loading">

        <div class="flex space-x-3 text-center justify-center">
            <template v-if="props.loading">
                 <LoadingEffectComponent />
            </template>


            <!-- Text  -->

            <span class="font-normal"> {{ props.text }} </span>

        </div>

    </button>
</template>





<script setup>
import { ref, defineProps } from "vue"
import AppColors from "@/appDependencies/appColors"
import LoadingEffectComponent from "@/components/utils/LoadingEffectComponent.vue"

const bg_color = ref("");
const border_color = ref("");
const props = defineProps(
    {
        text: String,
        loading: Boolean,
        type: String,
    }
)

function checkType() {

    
    if (props.type == "light") {
        bg_color.value = AppColors.bg_light;
        border_color.value = AppColors.border_primary;
    }
    else if (props.type == 'yellow'){
        bg_color.value = AppColors.bg_yellow;

    }
    else {
        bg_color.value = AppColors.bg_primary;
        border_color.value = AppColors.border_primary;
    }

}

checkType();





</script>