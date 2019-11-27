/* eslint-disable no-new */
import Vue from 'vue'
import router from './router'
// import axios from 'axios'
import 'babel-polyfill' // 兼容ie
import 'animate.css' // 动画
import App from './App'
// import 'swiper/dist/css/swiper.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import { i18n } from './i18n/config'


// Vue.use(VueAwesomeSwiper)
Vue.prototype.$isPc = window.innerWidth > 1200

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

router.afterEach(() => {
  window.scrollTo(0, 0)
})
