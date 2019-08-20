import Vue from 'vue'
import App from './App.vue'

import '../src/assets/icon/styles.min.css'
import '../src/assets/css/main.css'
import '../src/assets/css/normal.css'
import 'element-ui/lib/theme-chalk/index.css'
import { VueEditor } from 'vue2-editor'

import ElementUI from 'element-ui';

import router from '../src/router/index'
import store from '../src/store/index'
import Store from 'store'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component('VueEditor', VueEditor)

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(JSON.parse(localStorage.getItem('islogin'))){ //判断本地是否存在access_token
      next();
    }else {
      next({
        path:'/login'
      })
    }
  }
  else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if(to.fullPath == "/login"){
    if(JSON.parse(localStorage.getItem('islogin'))){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
