/*
 * @Description: axios的配置
 * @Author: mengdan
 * @LastEditors: Please set LastEditors
 * @Date: 2019-02-21 19:35:00
 * @LastEditTime: 2019-03-05 14:45:48
 */
import axios from 'axios'
import {Message} from 'element-ui'
// import { Message, MessageBox } from 'element-ui'
// import tip from './exception'
// import { removeToken } from '@/utils/auth'

/* 基本请求包装 */
const xhr = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  withCredentials: true
})

/* 添加响应拦截器，自定义返回状态 */
xhr.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message || '请求异常',
        type: 'error',
        duration: 2 * 1000
      })

      // if (res.code === 99) {
      // // to re-login
      //   MessageBox.confirm('你已经被登出，你可以留在本页面，或请重新登录', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     removeToken()
      //     location.reload()
      //   })
      // }
      return Promise.reject()
    } else {
      return res
    }
  },
  error => {
    tip(error)
    return Promise.reject(error)
  })

export default xhr
