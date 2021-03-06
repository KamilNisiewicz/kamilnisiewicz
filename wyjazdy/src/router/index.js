import Vue from 'vue'
import Router from 'vue-router'
import Aways from '@/components/Aways'

Vue.use(Router)

export default new Router({
  base: '/wyjazdy',
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Aways',
      component: Aways
    }
  ]
})
