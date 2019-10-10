/*
 * @Description: 基本的工具
 * @Author: mengdan
 * @LastEditors: Please set LastEditors
 * @Date: 2019-02-22 12:00:08
 * @LastEditTime: 2019-02-27 21:09:29
 */

//  检查URL是否正确
export function isExternal(url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
  }
  
  // 检查密码是否符合规范
  export function vaildPassword(val) {
    return /^(?=.*[0-9])/.test(val)
  }
  
  // 判断两个时间的大小
  export function timeTo(val, valo) {
    return (val < valo)
  }
  
  //判断是否为数字
  export function isNumber(val) {
    return /^[0-9]*$/.test(val)
  }
  