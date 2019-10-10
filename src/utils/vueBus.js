/*
* @Author: qigemingzhihaonana
* @Date:   2019-05-26 13:20:52
* @Last Modified by:   qigemingzhihaonana
* @Last Modified time: 2019-05-26 13:33:24
*/
const install = (Vue) => {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args)
      },
      on(event, callback) {
        this.$on(event, callback)
      },
      off(event, callback) {
        this.$off(event, callback)
      }
    }
  })

  Vue.prototype.$bus = Bus
}

export default install
