import Vue from 'vue'
import Router from 'vue-router'

import CyHome from '../views/CyHome/CyHome.vue'
import CyHomeIndex from '../views/CyHome/CyHomeSubView/CyHomeIndex.vue'
import CyInstrumentType from '../views/CyHome/CyHomeSubView/CyResourceManage/CyInstrumentType.vue'
import CyInstitutionManage from '../views/CyHome/CyHomeSubView/CyResourceManage/CyInstitutionManage.vue'



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
          path: '/resource/type',
          name:'CyInstrumentType',
          component: CyInstrumentType
        },
        {
          path: '/resource/institution',
          name: 'CyInstitutionManage',
          component: CyInstitutionManage
        }
      ]
    }
  ]
})
