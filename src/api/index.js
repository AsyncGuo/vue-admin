import service from './fetch'

// 登录部分
const loginApi = {
  login (params) {
    return service({
      url: '',
      method: 'post',
      params
    })
  },
  getUserInfo (params) {
    return service({
      url: '',
      method: 'post',
      params
    })
  },
  logout (params) {
    return service({
      url: '',
      method: 'post',
      params
    })
  }
}

export {
  loginApi
}
