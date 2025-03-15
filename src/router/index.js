import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import films from './routes/films'
import cinemas from './routes/cinemas'
import news from './routes/news'
import center from './routes/center'
import filmDetail from './routes/filmDetail'
import city from './routes/city'
import cinema from './routes/cinema'
import schedule from './routes/schedule'
import user from './routes/user'
import myhistory from './routes/history'

Vue.use(VueRouter)

// 定义路由规则表
const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/films',
    children: [...films, ...cinemas, ...news, ...center]
  },
  ...filmDetail,
  ...cinema,
  ...schedule,
  ...user,
  city,
  myhistory
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  // 只有需要登录才能访问的路由才进行判断
  if (to.meta.login) {
    // 根据vuex中的token值，它是否存在，如果存在，则表示当前用户它已经登录
    // token 登录成功后，后端接口返回的一个加密的后的字符串，它是用来保持用户登录状态字符串
    // token加密方式为可逆加密 nodejs jsonwebtoken
    if (store.getters.token) {
      next()
    } else {
      // 得到它的目标url地址
      const fullPath = to.fullPath
      // 把目标地址记录在vuex中
      store.commit('setUrl', fullPath)

      // 重定向到登录页面  -- 没有登录
      next({ path: '/login', replace: true })
    }
  } else {
    next()
  }
})

export default router
