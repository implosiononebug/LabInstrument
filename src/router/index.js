import Vue from 'vue'
import Router from 'vue-router'

import CyHome from '../views/CyHome/CyHome.vue'
import CyHomeIndex from '../views/CyHome/CyHomeSubView/CyHomeIndex.vue'
import CyResourceSystem from '../components/CyHome/CyResourceManage/CyResourceSystem.vue'
import CyResourceFunction from '../components/CyHome/CyResourceManage/CyResourceFunction.vue'



import CyLogin from '../views/CyLogin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'CyLogin',
      component: CyLogin
    },
    {
      path:'/home',
      name: 'CyHome',
      component: CyHome,
      children: [
        {
          path:'/home/index',
          name:'CyHomeIndex',
          component: CyHomeIndex
        },
        {
          path:'/resource/system',
          name:'CyResourceSystem',
          component:CyResourceSystem
        },
        {
          path:'/resource/function',
          name: 'CyResourceFunction',
          component: CyResourceFunction
        }
      ]
    }
  ]
})
