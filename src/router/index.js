import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Ero from '@/components/Ero'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Ero',
      name: 'Ero',
      component: Ero
    }
  ]
})
