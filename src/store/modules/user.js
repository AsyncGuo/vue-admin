import { getToken, setToken, removeToken } from '@/utils/auth'
import * as types from '../mutation-types'

const state = {
  user: '',
  token: getToken(),
  roles: []
}

const mutations = {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_ROLES] (state, roles) {
    state.roles = roles
  }
}

export default {
  state,
  mutations
}
