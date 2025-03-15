export default {
  namespaced: true,
  state: {
    userinfo: {
      id: 0,
      token: '',
      name: ''
    }
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userinfo = payload
    },
    logout(state) {
      state.userinfo = {
        id: 0,
        token: '',
        name: ''
      }
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userinfo.name
    }
  }
}
