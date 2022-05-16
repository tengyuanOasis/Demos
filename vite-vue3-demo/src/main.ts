import { createApp } from 'vue'
import App from './App.vue'

// Todo: element按需引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
