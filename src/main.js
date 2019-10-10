// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
// import './permission'
import * as filters from './filters/index'
import store from './store/store'
import '@/styles/index.scss'
import $ from 'jquery'
import vueBus from '@/utils/vueBus'
// import './icons'
Vue.use(ElementUI)
Vue.use(vueBus)
Vue.use(Vuex)
// Vue.use($)

/**
 * 全局过滤器
 */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  // components: { App },
  // template: '<App/>',
  // store,
  render: h => h(App)
})

