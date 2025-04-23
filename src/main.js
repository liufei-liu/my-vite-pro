import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import routers from './router/index.js'
const app = createApp(App)
 
// 2：全局注册组件
app.use(routers)
app.use(ElementPlus)
app.mount('#app')


