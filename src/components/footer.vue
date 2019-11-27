<template>
  <div class="footer">
    <div class="wrap">
      <div class="share">
        <h3 class="wow fadeInDown">FOLLOW <span class="cyellow">HOUSETOKEN</span> ON</h3>
        <ul>
          <li class="wow zoomIn">
            <a target="_blank" href="https://www.facebook.com/housetoken/"><img src="~@img/common/facebook.png" alt=""></a>
          </li>
          <li class="wow zoomIn" data-wow-delay=".2s">
            <a target="_blank" href="https://www.linkedin.com/company/housetoken"><img src="~@img/common/in.png" alt=""></a>
          </li>
          <li class="wow zoomIn" data-wow-delay=".4s">
            <a target="_blank" href="https://twitter.com/token_house"><img src="~@img/common/twice.png" alt=""></a>
          </li>
          <li class="wow zoomIn" data-wow-delay=".6s">
            <a target="_blank" href="https://www.instagram.com/housetoken/"><img src="~@img/common/inst.png" alt=""></a>
          </li>
        </ul>
      </div>
      <div class="cr">
        <p>© Copyright 2019 - HouseToken | <router-link to="/policy">Privacy policy</router-link>  | <router-link to="/terms">Terms of Use</router-link></p>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
export default {
  mounted () {
    new WOW({live: false}).init()
  }
}
</script>

<style lang="less" scoped>
  .footer{
    background: @green;
    color: #fff;
    font-size: 16px;
    text-align: center;
    .share{
      .allCenter;
      font-size: 24px;
      padding: 50px 0 40px;
      border-bottom: 1px solid #fff;
      ul{
        display: flex;
      }
      li{
        margin-left: 20px;
      }
    }
    .cr{
      padding: 50px 0 70px;
    }
    @media screen and (max-width: 1200px) {
      .share{
        display: block;
        font-size: 16px;
        ul{
          justify-content: center;
          padding-top: 30px;
        }
        li{
          margin: 0 8px;
          img{
            width: 70%;
          }
        }
      }
      .cr{
        padding: 30px 0;
        line-height: 1.3;
      }
    }
  }
</style>
