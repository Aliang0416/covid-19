import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import "./assets/css/moble.css"
const app = createApp(App)
import Echarts from "../plugins/echarts"
app.use(Echarts)
app.mount('#app')
