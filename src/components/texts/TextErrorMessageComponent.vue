<template>
    <template v-if="!success">
        <div class="w-full rounded-xl border-none bg-red-700 p-3">
            <p class="text-white">{{ props.message }}</p>
            </div>
    </template>

    <template v-else>
        <div class="w-full rounded-xl border-none bg-green-700 p-3">
            <p class="text-white">{{ props.message }}</p>
            </div>
    </template>
        



</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        message: String,
        success: Boolean
    })

    
</script>