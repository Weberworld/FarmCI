import { createApp } from 'vue'
import "./index.css"

import FarmCIApp from './FarmCIApp.vue'
import router from '@/urls/urlPatterns'
import store from "@/storage/store"

createApp(FarmCIApp)
.use(router)
.use(store)
.mount('#app')
