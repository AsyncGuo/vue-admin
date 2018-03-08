import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import localInfo from './modules/localInfo'
import user from './modules/user'
import loading from './modules/loading'
import msgTip from './modules/msgTip'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    loading,
    msgTip,
    user,
    localInfo
  },
  strict: process.env.NODE_ENV === 'dev',
  plugins: process.env.NODE_ENV === 'dev' ? [createLogger()] : []
})
