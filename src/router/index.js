import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active', /* 设置router-link 激活样式方法1 */
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/products',
      component: require('@/page/products').default
    },
    {
      path: '/contact',
      component: require('@/page/contact').default
    },
    {
      path: '/policy',
      component: require('@/page/policy').default
    },
    {
      path: '/terms',
      component: require('@/page/terms').default
    }
  ]
})
