import { asyncRouterMap, constantRouterMap } from '@/router'
import * as types from '../mutation-types'

const state = {
  routers: constantRouterMap,
  addRouters: []
}

const mutations = {
  [types.SET_ROUTERS] (state, routers) {
    state.addRouters = routers
    state.routers = constantRouterMap.concat(routers)
  }
}

export default {
  state,
  mutations
}
