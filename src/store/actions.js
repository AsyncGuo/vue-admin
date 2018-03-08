import { loginApi } from '@/api'

import * as types from './mutation-types'

// loading
export const showLoading = ({ commit, state }) => commit(types.SHOW_LOADING)
export const hideLoading = ({ commit, state }) => commit(types.HIDE_LOADING)

// settingLogin
export const setNeedLogin = ({ commit, state }, boolean ) => commit(types.SET_NEEDLOGIN, boolean)

// setMsgTip
export const setMsgTip = ({ commit, state }, msgObj) => {
  let timer = setTimeout(() => {
    commit(types.HIDE_MSGTIP)
  }, 6000)
  msgObj.timer = timer
  commit(types.SET_MSGTIP, msgObj)
}
export const setMsgTipStyle = ({ commit, state }, styleObj) => commit(types.SET_MSGTIPSTYLE, styleObj)

// userInfo
// 用户登录
export const login = ({ commit }, userInfo) => {
  return new Promise((resolve, reject) => {
    loginApi.login(userInfo).then(res => {
      setToken(res.data.token)
      commit(types.SET_TOKEN, res.data.token)
      resolve()
    }).catch(error => {
      reject(error)
    })
  })
}
// 获取用户信息
export const getUserInfo = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    loginApi.getUserInfo(state.token).then(res => {
      commit('SET_ROLES', res.data.role)
      resolve()
    }).catch(error => {
      reject(error)
    })
  })
}
// 用户登出
export const logOut = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    loginApi.logout(state.token).then(res => {
      commit(types.SET_TOKEN, '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    }).catch(error => {
      reject(error)
    })
  })
}
// 前端登出
export const fedLogOut = ({ commit, state }) => {
  return new Promise(resolve => {
    commit(types.SET_TOKEN, '')
    removeToken()
    resolve()
  })
}

// set-router

// 通过meta.role判断是否与当前用户权限匹配
function hasPermission (roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}
// 递归过滤异步路由表，返回符合用户角色权限的路由表
function filterAsyncRouter (asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter (route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

export const generateRoutes = ({ commit }, data) => {
  return new Promise(resolve => {
    const { roles } = data
    let accessedRouters
    if (roles.indexOf('admin') >= 0) {
      accessedRouters = asyncRouterMap
    } else {
      accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
    }
    commit('SET_ROUTERS', accessedRouters)
    resolve()
  })
}
