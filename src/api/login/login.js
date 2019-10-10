/*
 * @Description: 登录，授权
 * @Author: hjh
 *
 */
import axios from '@/utils/xhr'

/**
 * 用户登录
 * @param {用户名} username
 * @param {密码} password
 */
export function loginByUsername(username, password) {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/user/login',
    url: '/user/login',
    method: 'post',
    data: {
      username, 
      password
    }
  })
}