<template>

    <div class="w-full overflow-x-scroll">
        <ul class="inline-flex space-x-3" >
            <li :v-for="item in props.items" :key="item">
                {{ item }}

            </li>
        </ul>

    </div>
</template>

<script setup>
import {defineProps} from "vue"

const props = defineProps({
    items: Array
})

</script>