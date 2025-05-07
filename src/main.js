import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import routers from './router/index.js'
//消息提示
import msg from '../src/shared/js/msg.js';

// 全局字体引入
import '@/shared/font/font.css'
const app = createApp(App)
app.config.globalProperties.$msg = msg;
// 2：全局注册组件
app.use(routers)
app.use(ElementPlus)
app.mount('#app')


