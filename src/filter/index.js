import Vue from 'vue'

// 对演员数组数据进行字符串处理化
Vue.filter('showActors', value => {
  if (Array.isArray(value)) {
    return value.map(item => item.name).join(' ')
  }
  return ''
})
