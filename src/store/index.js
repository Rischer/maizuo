import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

// 持久化插件
// npm i -S vuex-persistedstate
import persistedState from 'vuex-persistedstate'

import city from './modules/city'
import user from './modules/user'
import history from './modules/history'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    city,
    user,
    history
  },
  state: {
    url: '/films/nowPlaying'
  },
  mutations: {
    setUrl(state, url) {
      state.url = url
    }
  },
  getters,
  plugins: [
    /*
    key ：存储持久状态的键。（默认：vuex）
    paths ：部分持续状态的任何路径的数组。如果没有路径给出，完整的状态是持久的。（默认：[]）
    reducer ：一个函数，将被调用来基于给定的路径持久化的状态。默认包含这些值。
    subscriber ：一个被调用来设置突变订阅的函数。默认为store => handler => store.subscribe(handler)
    storage ：而不是（或与）getState和setState。默认为localStorage。
    getState ：将被调用以重新水化先前持久状态的函数。默认使用storage。
    setState ：将被调用来保持给定状态的函数。默认使用storage。
    filter ：将被调用来过滤将setState最终触发存储的任何突变的函数。默认为() => true
    */
    // 持久化操作
    persistedState({
      key: 'store',
      storage: window.sessionStorage,
      paths: ['city', 'user']
      // 具体以你需要缓存的数据
      // reducer: state => {
      //   // console.log(state.city...)
      //   return {
      //     a: 1
      //   }
      // }
    })
  ]
})
export default store
