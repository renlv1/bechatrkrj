<template>
  <div class="header-wrap" :class="{small: smallNav}">
    <div class="header wrap">
      <router-link tag="div" class="logo-box" to="/home">
        <img src="~@img/common/logo.svg" alt="">
      </router-link>
      <div class="head-nav">
        <li v-for="(item,index) in nav" :key="index">
          <a v-if="item.outside" target="_blank" :href="item.path" class="text"><span class="info-text">{{item.name}}</span></a>
          <router-link v-else excat :to="item.path" class="text"><span class="info-text">{{item.name}}</span></router-link>
        </li>
      </div>
    </div>
    <!-- 移动端-->
    <div class="mobile-header">
      <router-link tag="div" class="logo-box" to="/home">
        <img src="~@img/common/logo.svg" alt="">
      </router-link>
      <div class="right" @click="isShowMenu = !isShowMenu">
        <div class="right-menu" :class="{'close-menu': isShowMenu}"></div>
      </div>
    </div>
    <!-- 菜单-->
    <div class="show-menu" :class="{'menu-active': isShowMenu}">
      <ul class="uls" @click="isShowMenu = false">
        <li v-for="(item,index) in nav" :key="index">
          <img :src="require(`@img/common/h${index + 1}.png`)" alt="">
          <a v-if="item.outside" :href="item.path">{{item.name}}</a>
          <router-link v-else excat :to="item.path" class="text">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="return-top" v-show="smallNav" @click="returnTop"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowMenu: false,
      smallNav: false,
      nav: [
        {name: 'Home', path: '/home'},
        {name: 'Products', path: '/products'},
        {name: 'HouseToken', path: 'http://house-token.org', outside: true},
        {name: 'Contact', path: '/contact'},
      ]
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.scroll)
  },
  methods: {
    getScollTop () {
      return document.documentElement.scrollTop || document.body.scrollTop
    },
    scroll () {
      if (this.getScollTop() < 80) {
        this.smallNav = false
      } else {
        this.smallNav = true
      }
    },
    returnTop () {
      let currentScroll = this.getScollTop()
      if (currentScroll > 0) {
        window.requestAnimationFrame(this.returnTop)
        window.scrollTo(0, currentScroll - (currentScroll / 4))
      }
    },
    switchLang (lang) {
      window.localStorage.setItem('lang', lang)
      window.location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
  .header-wrap{
    font-size: 18px;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background: @green;
    z-index: 98;
    .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      transition: .3s;
      @media screen and (max-width: 1200px) {
        display: none;
      }
      .logo-box{
        margin-left: 20px;
        width: 252px;
        cursor: pointer;
        transition: .3s;
        img{
          vertical-align: top;
        }
      }
      .head-nav{
        height: 100%;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        li{
          transition: .3s;
          cursor: pointer;
          position: relative;
          text-align: center;
          color: #fff;
          margin-left: 20px;
          font-size: 18px;
          .text{
            padding: 0 16px;
            display: block;
            position: relative;
            width: 100%;
            line-height: 80px;
            &:after{
              content: '';
              height: 3px;
              bottom: 0px;
              background: @yellow;
              left: 50%;
              right: 50%;
              transition: .3s;
              position: absolute;
            }
            &.is-active,&:hover{
              color: @yellow;
              background: transparent;
              width: 100%;
              transition: width .4s ease-in-out;
              &:after{
                left: 0;
                right: 0;
              }
            }
            .info-text{
              display: inline-flex;
              line-height: 1.2;
            }
          }
        }
      }
    }
    .nav-mask{
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 999;
    }
    .mobile-header{
      height: 70px;
      position: fixed;
      top: 0;
      width: 100%;
      background: @green;
      box-shadow: 0 0 5px rgba(0,0,0,.2);
      @media screen and (max-width: 1200px) {
        display: block;
      }
      @media screen and (min-width: 1200px) {
        display: none;
      }
      .logo-box{
        height: 46px;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-left: 20px;
        position: absolute;
        left: 0;
        top: 50%;
        width: 160px;
        transform: translateY(-50%);
      }
      .right{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100002;
        padding: 10px 20px 10px 10px;
        cursor: pointer;
        .right-menu{
          width: 24px;
          height: 22px;
          background: url("../assets/images/common/menu.svg") no-repeat center / cover;
          &.close-menu{
            background: url("../assets/images/common/close.svg") no-repeat center / cover;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .show-menu{
      background-color: rgba(0,0,0,.7);
      overflow: hidden;
      max-height: 0;
      transition: max-height .3s linear;
      display: none;
      position: fixed;
      top: 70px;
      width: 100%;
      box-shadow: 0 3px 10px rgba(0,0,0,.15);
      z-index: 98;
      @media screen and (max-width: 1200px) {
        display: block;
      }
      &.menu-active{
        max-height: 100%;
      }
      .uls{
        min-height: 100vh;
        li{
          padding: 3px 5%;
          line-height: 50px;
          background: #fff;
          .vCenter;
          border-bottom: 1px solid #f0f0f0;
        }
        img{
          width: 20px;
          margin-right: 16px;
        }
        a{
          flex: 1;
        }
        .is-active{
          color: @green;
        }
      }
    }
    .lang{
      display: flex;
      align-items: center;
      padding-top: 10px;
      span{
        margin-right: 22px;
      }
      img{
        width: 24px;
        margin-right: 8px;
      }
    }
  }
  .return-top{
    position: fixed;
    width: 50px;
    height: 50px;
    right: 40px;
    bottom: 40px;
    background: @green;
    cursor: pointer;
    opacity: .4;
    transition: .3s;
    &:before{
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-left: 2px solid #fff;
      border-top: 2px solid #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-30%) rotate(45deg);
    }
    &:hover{
      opacity: 1;
    }
    @media screen and (max-width: 1200px) {
      transform: scale(.6);
      transform-origin: right bottom;
      right: 20px;
    }
  }
</style>
