import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import svgIcons from '@/components/svgIcons.vue'
import layout from '@/components/layout.vue'
import axios from 'axios'

Vue.use(ElementUI);
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.component('svgIcons',svgIcons)
Vue.component('layout',layout)

Vue.config.productionTip = false

axios.defaults.baseURL = '/api';

new Vue({
  router,
  store,
  render: (h: any) => h(App)
}).$mount('#app')
