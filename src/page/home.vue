<template>
  <div class="home">
    <div class="banner">
      <div class="wrap down">
        <h3 class="wow fadeInDown" data-wow-delay=".2s">Online Messaging and Collaboration Tool</h3>
        <p class="wow fadeInDown">HouseToken is a unique social and collaboration application that communicate easily and effectively.</p>
        <div class="links wow zoomIn" data-wow-delay=".6s">
          <a href=""><img src="@img/home/andriod.png" alt=""></a>
          <a href=""><img src="@img/home/ios.png" alt=""></a>
        </div>
      </div>
      <div class="show-img wow fadeInUp">
        <img src="@img/home/banner.png" alt="">
      </div>
    </div>
    <div class="section intro">
      <div class="wrap">
        <div class="tit wow zoomIn">
          <h3>Get Talking Securely and Safely</h3>
          <div class="bar"></div>
        </div>
        <div class="content wow fadeInUp">
          <p>HouseToken CHAT pro is one of the first communication apps to offer House tokens (HoT Cryptocurrency) in the ecommerce marketplace, allowing online merchant services to take place and get rewarded for doing so, with generous discounts.</p>
          <p class="cyellow">The benefits include:</p>
        </div>
        <div class="flex">
          <div class="item" v-for="(item, index) in introList" :key="index">
            <img width="20px" :src="require(`@img/home/b${index + 1}.png`)" alt="">
            <p>{{item}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section feature">
      <div class="wrap">
        <div class="tit wow fadeInDown">
          <h3>Features and Benefits of <span class="cyellow">HouseToken</span></h3>
          <div class="bar"></div>
        </div>
        <div class="content">
          <div class="item fadeInUp" :class="{wow: $isPc}" :data-wow-delay="`${index * .1}s`" v-for="(item, index) in featureList" :key="index">
            <div class="img"><img width="29px" :src="require(`@img/home/a${index + 1}.png`)" alt=""></div>
            <div class="line"></div>
            <p>{{item}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section power" style="overflow:hidden">
      <div class="wrap power1">
        <div class="l">
          <div class="tit wow fadeInRight">
            <h3>Store, Spend, Exchange.</h3>
            <div class="bar"></div>
          </div>
          <div class="content wow fadeInLeft">
            <img src="@img/home/p2.png" alt="">
          </div>
          <div class=" wow fadeInRight">
            <p>Our brand new application HouseToken CHAT Pro is a Cryptocurrency based application that allows you to connect with communities, collaborate with colleagues, store digital currencies and make online payments through our certified wallet system.</p>
            <p>Discover and learn with our powerful yet approachable AI technology that has been seamlessly incorporated to enable you to utilise our app efficiently.</p>
          </div>
        </div>
      </div>
      <div class="wrap power2">
        <div class="l">
          <div class="tit wow fadeInUp">
            <h3>Bringing The Power of Artificial Intelligence to Everyone with <br> Housetoken CHAT</h3>
            <div class="bar"></div>
          </div>
          <div class="content wow fadeInDown">
            <img src="@img/home/p1.png" alt="">
          </div>
          <p class="wow fadeInUp">“Robots and intelligent software seem destined to be used in cooperative and collaborative ways with humans” Vint Cerf, vice president, Google</p>
        </div>

      </div>
    </div>
    <div class="section borders">
      <div class="tit wow zoomIn">
        <h3>Everything you need to buy and sell HoT today</h3>
        <div class="bar"></div>
        <p>Property investment made easy, safe and transparent. Start Earning Today.</p>
      </div>
      <div class="wrap">
        <div class="l">
          <div class="content">
            <div class="item wow fadeInRight" :data-wow-delay="`${index * .15}s`" :class="{active: borderIndex === index}" v-for="(item, index) in borderList" @click="borderIndex = index" :key="index">
              <h3>{{item.t1}}</h3>
              <p>{{item.t2}}</p>
            </div>
          </div>
        </div>
        <div class="r zoomIn" :class="{wow: $isPc}" data-wow-delay=".3s"><img src="@img/home/p3.png" alt=""></div>
      </div>
    </div>
    <div class="section contact">
      <div class="wrap">
        <div class="tit wow zoomIn">
          <h3>CONTACT US</h3>
          <div class="bar"></div>
        </div>
        <div class="content wow fadeInUp" v-if="!submitSuccess">
          <div class="input-wrap col-2">
            <input type="text" ref="name" placeholder="Name">
            <input type="text" ref="subject" placeholder="Subject">
          </div>
          <div class="input-wrap">
            <input type="email" ref="email" placeholder="E-mail">
          </div>
          <textarea placeholder="Message" ref="message"></textarea>
          <button class="btn" @click="submit">SUBMIT</button>
        </div>
        <div v-else class="success">Your message has been sent!</div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  data () {
    return {
      submitSuccess: false,
      borderIndex: 0,
      introList: [
        'Enhanced transactional security',
        'Protection from fraud',
        'Centralized System',
        'Low Fees'
      ],
      featureList: [
        'Communicate with other people quickly and securely with our innovative features',
        'Store HOT and earn monthly dividends',
        'Send and make payments safely and quickly',
        'Intregated with AI technology',
        'Store Crypto and fiat currencies securely on the wallet',
        'Make voice and video calls globally'
      ],
      borderList: [
        {
          t1: 'What is HoT?',
          t2: 'HouseToken is a cryptocurrency which uses blockchain to help you invest in London’s leading commercial real estate properties easily and safely. By combining real estate investment with digital currency, HouseToken is more stable than Bitcoin. It’s the smartest investment.',
        },
        {
          t1: 'Financial Security?',
          t2: '100% backed by prime commercial real estate, such as offices in the City of London.',
        },
        {
          t1: 'How?',
          t2: 'By digitalising the real estate portfolio using blockchain technology and distributing 100% of the NET rental income on a MONTHLY base.',
        },
        {
          t1: 'Technology? ',
          t2: 'Encrypted transactions through global crypto exchanges which is easy, safe and cost-efficient',
        }
      ],
    }
  },
  mounted () {
    new WOW({live: false}).init()
  },
  methods: {
    submit () {
      const res = Object.keys(this.$refs).every(item => {
        const el = this.$refs[item]
        if (!el.value) {
          el.classList.add('error')
          return false
        } else {
          el.classList.remove('error')
          el.classList.add('right')
          return true
        }
      })

      if (res) {
        this.submitSuccess = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @green: #00a99d;
  .home{
    .banner{
      background: url(~@img/home/bg.png);
      text-align: center;
      height: 1050px;
      .down{
        padding: 150px 0 108px;
        img{
          margin: 0 20px;
        }
      }
      h3{
        font-size: 38px;
        color: @green;
        font-weight: bold;
      }
      p{
        margin-top: 36px;
        padding: 0 320px;
        line-height: 2;
        font-size: 17px;
      }
      .links{
        padding-top: 60px;

      }
    }
    .intro{
      padding: 300px 0 160px;
      text-align: center;
      .content{
        padding: 40px 130px 0;
        line-height: 2;
      }
      .flex{
        display: flex;
        color: @green;
        font-size: 18px;
        padding-top: 50px;
        line-height: 1;
        justify-content: center;
        >div{
          .vCenter;
          margin: 0 24px;
        }
        img{
          margin-right: 16px;
        }
      }
    }
    .feature{
      background: #effbfb;
      padding: 130px 0 90px;
      text-align: center;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        right: 0;
        top: -126px;
        width: 154px;
        height: 259px;
        background: url(~@img/home/bg1.png) 33px no-repeat;
      }
      &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: -147px;
        width: 107px;
        height: 204px;
        background: url(~@img/home/bg2.png) 0 no-repeat;
      }
      .content{
        padding-top: 90px;
        .allCenter;
        position: relative;
        z-index: 2;
        flex-wrap: wrap;
      }
      .item{
        background: #fff;
        padding: 24px 30px;
        min-height: 230px;
        margin-bottom: 30px;
        width: 380px;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0,0,0,.16);
        line-height: 25px;
        transition: background .5s;
        .img{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #c6edeb;
          .allCenter;
          justify-content: center;
          margin: 0 auto;
        }
        .line{
          background: #ededed;
          width: 80px;
          height: 4px;
          margin: 30px auto;
        }
        &:hover{
          background: @green;
          color: #fff;
          .img,.line{
            background: #fff;
          }
        }
      }
    }
    .power{
      .wrap{
        position: relative;
      }
      padding: 210px 0 270px;
      .l{
        width: 680px;
        padding-top: 32px;
        p{
          padding-top: 58px;
          padding-right: 150px;
          line-height: 2;
        }
        .tit{
          text-align: left;
          font-size: 36px;
          line-height: 60px;
        }
        .bar{
          margin-left: 0;
        }
      }
      .content{
        position: absolute;
        right: 0;
        top: 0;
      }
      .power1 {
        padding-bottom: 240px;
        .content{
          right: auto;
          left: 0;
        }
        .l{
          margin-left: 570px;
        }
        p+p{
          padding-top: 30px;
        }
      }
    }
    .borders{
      padding-bottom: 200px;
      .wrap{
        .hCenter;
        .l{
          width: 610px;
        }
        .r{
          margin-right: -90px;
          img{
            width: 90%;
          }
        }
      }
      .tit{
        font-size: 34px;
        margin-bottom: 56px;
        p{
          font-size: 16px;
          color: #000;
          padding: 40px 0 50px;
        }
      }
      .content{
        .item{
          padding: 17px 24px;
          border-radius: 10px;
          line-height: 1.5;
          transition: background .3s;
          border: 1px dashed @green;
          box-shadow: 4px 4px 10px rgba(28,182,174,.2);
          margin-bottom: 35px;
          h3{
            font-weight: bold;
            font-size: 18px;
            color: @green;
            line-height: 24px;
            cursor: default;
            &:before{
              content: '';
              background: @green;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              margin-right: 20px;
              display: inline-block;
              vertical-align: middle;
              margin-top: -3px;
            }
          }
          p{
            color: #333;
            padding-left: 28px;
            overflow: hidden;
            max-height: 0;
          }
          &:hover,&.active{
            background: linear-gradient(120deg, #43d9d1, #1cb6ae);
            border-color: transparent;
            h3,p{
              color: #fff;
            }
            h3:before{
              background: #fff;
            }
          }
          &.active{
            p{
              transition: .3s;
              padding-top: 20px;
              max-height: 300px;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1200px) {
      .tit{
        font-size: 24px !important;
        line-height: 1.3;
        padding: 0 4%;
      }
      .banner{
        height: auto;
        .down{
          padding: 50px 0 40px;

          img{
            margin: 0 3%;
            width: 36%;
          }
        }
        h3{
          font-size: 24px;
          color: @green;
          font-weight: bold;
          padding: 0 30px;
          line-height: 1.3;
        }
        p{
          margin-top: 20px;
          padding: 0 20px;
          line-height: 1.6;
          font-size: 16px;
        }
        .links{
          padding-top: 40px;
        }
        .show-img{
          .gap;
          padding-bottom: 50px;
        }
      }
      .intro{
        padding: 80px 0 60px;
        text-align: center;
        .content{
          padding: 40px 0;
          line-height: 2;
        }
        .flex{
          display: block;
          padding-top: 0px;
          >div{
            padding-left: 36px;
            margin: 20px;
            border: 1px dashed @green;
            box-shadow: 4px 4px 10px rgba(28,182,174,.2);
            border-radius: 6px;
            padding: 15px 20px;
            text-align: left;
          }
        }
      }
      .feature{
        background: #f3f6f8;
        padding: 80px 0 20px;
        text-align: center;
        position: relative;
        &::before{
          transform: scale(.5);
          transform-origin: right center;
        }
        &::after{
          transform: scale(.5);
          transform-origin: left center;
          bottom: -98px;
        }
        .content{
          padding: 50px 5%;
          display: block;
          position: relative;
          z-index: 2;

        }
        .item{
          background: #fff;
          padding: 24px 30px;
          min-height: 230px;
          width: 100%;
          margin-bottom: 30px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,0,0,.16);
          line-height: 25px;
          transition: background .5s;
          .img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #c6edeb;
            .allCenter;
            justify-content: center;
            margin: 0 auto;
          }
          .line{
            background: #ededed;
            width: 80px;
            height: 4px;
            margin: 30px auto;
          }
          &:hover{
            background: @green;
            color: #fff;
            .img,.line{
              background: #fff;
            }
          }
        }
      }
      .power{
        padding: 80px 0;
        .l{
          width: auto;
          padding-top: 32px;
          p{
            padding: 0;
            line-height: 2;
            text-align: center;
          }
          .tit{
            text-align: center;
            font-size: 24px;
            line-height: 1.3;
          }
          .bar{
            margin-left: auto;
          }
        }
        .content{
          position: static;
          text-align: center;
          padding: 50px 0;
          img{
            width: 60%;
          }
        }
        .power1 {
          .tit{
            padding: 0;
          }
          padding-bottom: 80px;
          .l{
            margin-left: 0;
          }
          p+p{
            padding-top: 30px;
          }
        }
      }
      .borders{
        padding-bottom: 90px;
        .tit{
          margin-bottom: 0;
        }
        .wrap{
          .hCenter;
          flex-direction: column;
          .l{
            width: 100%;
            padding-top: 58px;
            order: 2;
          }
          .r{
            order:1;
            text-align: center;
            margin: 0;
            img{
              width: 70%;
            }
          }
        }
        .content{
          .item{
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }
      }
      .contact{
        &:after{
          display: block;
          transform: scale(.4);
          transform-origin: left center;
          bottom: auto;
          top: -185px;
          z-index: 2;
          background-color: #fff;
        }
      }
    }
  }
</style>
