import axios from 'axios'
import NProgress from 'nprogress'
import { Message } from 'iview'
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: '/tims/api/',
  timeout: 15000 // 请求超时时间
})

service.interceptors.request.use(config => {
  NProgress.start()
  // Do something before request is sent
  config.headers['X-Page-Url'] = location.href
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  NProgress.done()
  // Do something with response data
  if (response.data) {
    if (response.data.code === 200) {
      let resData = response.data.data || {}
      if (resData.errorCode === 500 || resData.success === false) {
        Message({
          message: resData.message || ('请求失败，错误码：' + resData.errorCode),
          type: 'error',
          duration: 1000
        })
        return Promise.reject(response.data)
      }
      return Promise.resolve(response.data)
    } else if (response.data.errorCode === 302) {
      let url = response.data.data
      window.location.href = url
    } else {
      Message({
        message: response.data.msg || ('请求失败，错误码：' + response.data.code),
        type: 'error',
        duration: 2000
      })
      return Promise.reject(response)
    }
  } else {
    return Promise.reject(response)
  }
}, error => {
  NProgress.done()
  // Do something with response error
  console.error(error.message)
  let resData = error.response.data || {}
  Message({
    message: resData.message || error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
