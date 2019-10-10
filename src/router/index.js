/**
 * @Author: hjh
 * @Date:   2019-09-24
 */

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/login'
import Menu from '@/view/Daily/menu'
import homepage from '@/view/Daily/homepage'
import chlesson from '@/view/developing/chlesson'
import finless from '@/view/finless/finless'
import elective from '@/view/teacher/elective/elective'
import news from '@/view/news/news'
import exitmessage from '@/view/exitmessage/exitmessage'
import teaexitless from '@/view/teacher/teaexitless/teaexitless'
import teanews from '@/view/teacher/teanews/teanews'
import teapersonmsg from '@/view/teacher/teapersonmsg/teapersonmsg'
import personmsg from  '@/view/personmsg/personmsg'
import teafinless from  '@/view/teacher/teafinless/teafinless'
import firstpage from '@/view/firstpage/firstpage'
import manless from '@/view/manager/manless/manless'
import startless from '@/view/manager/startless/startless'
 
Vue.use(Router)

/**
* hidden: true                   为true则不会显示在菜单栏
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/

// export const constantRouterMap = [
//   {
//     path: '/login',
//     component: Login,
//     hidden: true,
//   },
//   {
//     path: '/auth-redirect',
//     component: () => import('@/view/login/authredirect'),
//     hidden: true
//   },
//   {
//     path: '/',
//     redirect: '/login'
//   },
//   {
//     path: '/menu',
//     component: Menu,
//     hidden: true,
//   },
// ]

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/homepage',
      name:'homepage',
      component:homepage,
      children:[
        {
          path:'/menu',
          name:'menu',
          component:Menu
        },
        {
          path:'/chlesson',
          name:'chlesson',
          component:chlesson
        },
        {
          path:'/finless',
          name:'finless',
          component:finless
        },
        {
          path:'/elective',
          name:'elective',
          component:elective
        },
        {
          path:'/news',
          name:'news',
          component:news
        },
        {
          path:'/exitmessage',
          name:'exitmessage',
          component:exitmessage
        },
        {
          path:'/personmsg',
          name:'personmsg',
          component:personmsg
        },
        {
          path:'/teaexitless',
          name:'teaexitless',
          component:teaexitless
        },
        {
          path:'/teanews',
          name:'teanews',
          component:teanews
        },
        {
          path:'/teapersonmsg',
          name:'teapersonmsg',
          component:teapersonmsg
        },
        {
          path:'/teafinless',
          name:'teafinless',
          component:teafinless
        },
        {
          path:'/firstpage',
          name:'firstpage',
          component:firstpage
        },
        {
          path:'/manless',
          name:'manless',
          component:manless
        },
        {
          path:'/startless',
          name:'startless',
          component:startless
        },
      ]
      }
    ]
  })