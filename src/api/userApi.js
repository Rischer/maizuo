import { post } from '@/utils/http'

// 发送短信验证码
export const sendSmsApi = (phone) => {
  return post(`/api/loginsms`, { phone })
}

// 登录操作
export const doLoginApi = (userData) => {
  return post(`/api/login`, userData)
}
