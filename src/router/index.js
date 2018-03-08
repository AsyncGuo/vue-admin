import Vue from 'vue'
import Router from 'vue-router'
import Config from './config'

Vue.use(Router)

const Manage = () => import('@/components/Manage')
const Login = () => import('@/components/Login')

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'manage',
      component: Manage,
      meta: {
        title: '基于vue的后台管理系统'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

new Config(router).render()

export default router
