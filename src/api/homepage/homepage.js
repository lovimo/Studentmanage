/*
 * @Description: 角色菜单分配
 * @Author: hjh
 *
 */
import axios from '@/utils/xhr'

/**
 * 用户菜单查询
 */
export function userShowMenu() {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/user/generateMenu',
    url: '/user/generateMenu',
    method: 'get',
  })
  }

  /**
 * 用户退出登录
 */
export function logoutUser() {
  return axios({
    // url: 'http://s2668g1023.zicp.vip/user/logout',
    url: '/user/logout',
    method: 'get',
  })
  }
 