export default {
  namespaced: true,
  state: {
    historyList: [] // 初始为空的历史记录数组
  },
  mutations: {
    addToHistory(state, film) {
      const isDuplicate = state.historyList.some((item) => item.filmId === film.filmId)
      if (!isDuplicate) {
        state.historyList.push(film)
      }
    }
  },
  getters: {
    getHistoryList(state) {
      return state.historyList
    }
  }
}
