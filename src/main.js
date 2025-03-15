import Vue from 'vue'
import App from './App.vue'

// html的font-size基准值计算
import 'amfe-flexible'

// 路由
import router from './router'
// 过渡动画
import 'animate.css'
// vuex
import store from './store'

// vant组件完整引入
// vant组件库中有很多的组件，但是项目中可能用不全，这样引入就会导致打包体积过大 -- 不推荐
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// 引入vant,按需引入
import './plugins/vant'

// 重置样式
import './style/base.css'

// 全局组件
import './components'
// 全局过滤器
import './filter'
// 全局混入
import './mixins'

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
