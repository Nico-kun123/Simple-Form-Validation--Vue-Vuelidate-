import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

createApp(App).use(Vuelidate).mount('#app')

// add Vue.config.devtools = true