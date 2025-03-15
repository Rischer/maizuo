import axios from 'axios'
import { Notify } from 'vant'
import store from '@/store'

// 多实例创建axios请求
const ins = axios.create()

// 响应拦截器
ins.interceptors.response.use(
  res => res.data,
  err => {
    // 请求错误提示
    Notify({ type: 'danger', message: '网络请求异常\n请稍后访问当前页面', duration: 10000 })
    return Promise.reject(err)
  }
)

// 请求拦截器
ins.interceptors.request.use(config => {
  // 请求的超时时长
  config.timeout = 10000
  // 要想让它走代理，则一定开发时不要配置
  // config.baseURL = 'https://api.iynn.cn/film'
  return config
})

ins.interceptors.request.use(config => {
  // 统一处理城市数据
  const cityid = store.state.city.city.id
  config.url = config.url.replace(/(cityId=)\d+/, '$1' + cityid)

  return config
})

/**
 * get请求
 * @param {string} url 请求的url地址
 * @param {object} config 请求的额外头信息
 * @returns Promise<any>
 */
export const get = (url, config = {}) => ins.get(url, config)

/**
 * post请求
 * @param {string} url 请求的url地址
 * @param {json|urlEncoded|formData} data 请求体数据   formData[Content-Type=multipart/form-data]
 * @param {object} config 请求的额外头信息
 * @returns Promise<any>
 */
export const post = (url, data = {}, config = {}) => ins.post(url, data, config)
