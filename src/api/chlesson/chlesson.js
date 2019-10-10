/*
 * @Description: 学生选课接口
 * @Author: hjh
 *
 */
import axios from '@/utils/xhr'

/**
 * 用户登录
 * @param {用户名} username
 * @param {密码} password
 * @param {验证码} captcha
 */
export function loginByUsername(username, password, captcha) {
  const usrMsg = {
    username,
    password,
    captcha
  }
  console.log(usrMsg)
  return axios({
    url: '',
    method: 'get',
    params: usrMsg
  })
}
