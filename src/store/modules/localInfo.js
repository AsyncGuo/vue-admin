import * as type from '../mutation-types'
import { Storage } from '../../utils'

const state = {
  userInfo: '',
  needLogin: false
}

// mutations
const mutations = {
  [type.SET_NEEDLOGIN] (state, boolean) {
    state.needLogin = boolean
  }
}

export default{ state, mutations }
