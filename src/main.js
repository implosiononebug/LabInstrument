import Vue from 'vue'
import App from './App.vue'

import '../src/assets/icon/styles.min.css'
import '../src/assets/css/main.css'
import '../src/assets/css/normal.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';

import router from '../src/router/index'
import store from '../src/store/index'


Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
