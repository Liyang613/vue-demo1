import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Beijing from "../components/beijing"
import Gg from "../components/gg"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
        path: '/beijing',
        name: 'Beijing',
        component:Beijing
      },
      {
        path: '/gg',
        name: 'Gg',
        component:Gg
      }
  ]
})
