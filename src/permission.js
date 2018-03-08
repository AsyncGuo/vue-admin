import router from './router'
import store from './store'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@utils/auth'
import { Message } from 'element-ui'

function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login']

router.beforeEach((ro, from, next) => {
  Nprogress.start()
  // 判断是否有token
  if (getToken()) {
    if (to.path === '/login') {
      next({path: '/'})
      Nprogress.done()
    } else {
      // 判断当前用户是否已拉取完user_info信息
      if (store.getters.user.roles.length === 0) {
        store.dispatch('getUserInfo').then(res => {
          const roles = res.data.role
          // 生成可访问的路由表
          store.dispatch('generateRoutes', { roles }).then(res => {
            router.addRoutes(store.getters.addRouters)
            next({...to})
          })
          // 生成可访问的路由表
        }).catch(error => {
          store.dispatch('fedLogOut').then(res => {
            Message.error('验证失败,请重新登录')
            next({ path: '/login' })
          })
        })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.role)) {
          next()
        } else {
          next({ path: '/401', query: { noGoBack: true }})
          NProgress.done()
        }
      }
    }
  } else {
    // 在免登录白名单，直接进入
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      Nprogress.done()
    }
  }
})

router.afterEach(() => {
  Nprogress.done()
})
