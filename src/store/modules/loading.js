import * as types from '../mutation-types'

// initial state
const state = {
  loadingShow: false
}

// mutations
const mutations = {
  [types.SHOW_LOADING]( state, title ) {
    state.loadingShow = true
  },

  [types.HIDE_LOADING]( state ) {
    state.loadingShow = false
  }
}

export default{
  state,
  mutations
}
