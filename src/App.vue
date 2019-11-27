<template>
  <div id="app" :class="`${lang.toLowerCase()}${isPC ? ' pc' : ''}`">
    <input type="text" name="username" style="display:none;">
    <input type="checkbox" style="display:none;">
    <input type="password" name="password" style="display:none;">
    <v-header></v-header>
    <router-view class="main-container"/>
    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPC: window.innerWidth > 1200,
      lang: window.localStorage.getItem('lang') || ''
    }
  },
  components: {
    vHeader: resolve => require(['./components/header.vue'], resolve),
    vFooter: resolve => require(['./components/footer.vue'], resolve)
  }
}
</script>

<style lang="less">
@import "assets/css/reset.css";
@import "assets/css/common.less";
#app{
  min-height: 100vh;
  position: relative;
  padding-top: 80px;
  font-size: 16px;
  line-height: 1;
  @media screen and (max-width: 1200px) {
    padding-top: 70px;
  }
}
#nprogress .bar {
  background: #00a99e !important; // 进度条颜色
  z-index: 999999 !important;
}
</style>
