import { getCitiesInfo } from '@/api/cityApi'

export default {
  namespaced: true,
  state: {
    // indexList: [],
    // cities: {}
    city: {
      id: 110100,
      name: '北京'
    },
    cities: null
  },
  getters: {
    indexList: state => (state.cities === null ? [] : Object.keys(state.cities))
  },
  mutations: {
    // setCities(state, [indexList, cities]) {
    setCities(state, payload) {
      // state.indexList = indexList
      state.cities = payload
    },
    setCity(state, payload) {
      state.city = payload
    }
  },
  actions: {
    async getCitiesInfoAction({ commit, state }) {
      // 缓存
      if (state.cities == null) {
        // let [indexList, cities] = await getCitiesInfo()
        let cities = await getCitiesInfo()
        // commit('setCities', [indexList, cities])
        commit('setCities', cities)
      }
    }
  }
}
