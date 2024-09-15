import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/assets/style.css"



const app = createApp(App)
createApp(App).mount('#app')



app.use(ElementPlus)
app.mount('#app')