import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import './styles/index.less'
import SvgIcon from './components/SvgIcon.vue'

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(store)
  .component('svg-icon', SvgIcon)
  .mount('#app')
