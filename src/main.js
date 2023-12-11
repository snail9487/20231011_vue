import './assets/main.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'

import { createPinia} from 'pinia';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

const pinia = createPinia();


app.use(router)
app.use(pinia)

app.mount('#app')
