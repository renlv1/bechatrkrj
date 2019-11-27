<template>
  <div class="product">
    <div class="bg-wrap">
      <div class="section first">
        <div class="tit wow fadeInDown">Chat Features & Benefits</div>
        <img class=" wow zoomIn" src="@img/prod/p1.png" alt="">
      </div>
      <div class="section feature">
        <div class="wrap">
          <div class="tit">
            <h3><span class="c000">Communicate</span> Anywhere, Anytime</h3>
            <div class="bar"></div>
          </div>
          <div class="content">
            <div class="item fadeInUp" :class="{wow: $isPc}" :data-wow-delay="`${index * .1}s`" v-for="(item, index) in list" :key="index">
              <div class="img"><img width="33%" :src="require(`@img/prod/a${index + 1}.png`)" alt=""></div>
              <h3>{{item.t1}}</h3>
              <p>{{item.t2}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section borders">
        <div class="tit">
          <h3 class="c000">Collaborate without Borders</h3>
          <div class="bar"></div>
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
          <div class="r"><img src="@img/prod/p2.png" alt=""></div>
        </div>
      </div>

      <div class="section dep">
        <div class="wrap">
          <div class="tit wow fadeInDown">
            <h3><span class="c000">Time Tested</span> Technologies Deployed</h3>
            <div class="bar"></div>
          </div>
          <div class="content wow zoomIn">
            <div class="hd">
              <div class="item" :class="{active: depIndex === index}" v-for="(item, index) in depList" @mousemove="depIndex = index" :key="index">
                <h3>{{item.t1}}</h3>
              </div>
            </div>
            <div class="bd">
              <transition-group name="slide2" key="slide">
                <div class="item" v-if="depIndex === index || !$isPc" v-for="(item, index) in depList" :key="index">
                  <div class="img"><img width="70px" :src="require(`@img/prod/b${index + 1}.png`)" alt=""></div>
                  <h3>{{item.t1}}</h3>
                  <p>{{item.t2}}</p>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section down">
      <div class="wrap">
        <h3 class="wow fadeInDown">Download the app for free here</h3>
        <div class="links wow bounceIn">
          <a href=""><img src="@img/home/andriod.png" alt=""></a>
          <a href=""><img src="@img/home/ios.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  data () {
    return {
      list: [
        {
          t1: 'Want to chat to more than one person?',
          t2: 'Create chat groups with any number of members and communicate in real time – unlimited group chatting for you and your friends!',
        },
        {
          t1: 'Are your friends running late?',
          t2: 'Share real-time location details so you know where your friends and family are.',
        },
        {
          t1: 'Text Translator',
          t2: 'Auto-translate all your messages on sending and on receipt, for a seamless chatting experience',
        },
        {
          t1: 'Video calls',
          t2: 'Do you miss seeing your friends and family? You can communicate visually through video calling with HouseToken',
        },
        {
          t1: 'Call your friends',
          t2: 'Speak, record & send your message using the instant messaging app with smooth integration of chat API',
        },
        {
          t1: 'Want to send messages even when you’re offline?',
          t2: 'Be reachable anytime, anywhere with our offline support',
        }
      ],
      borderList: [
        {
          t1: 'Screen Sharing',
          t2: 'Easily share your real time screen to contacts through the chat app so you can show them what you’ve been working on.',
        },
        {
          t1: 'Fully Searchable',
          t2: 'Retrieve any piece of information easily from the repository of chat logs, search for that number you wanted, or that restaurant someone suggested a few weeks ago.',
        },
        {
          t1: 'Share files',
          t2: 'Share any data with multiple file support of any type',
        },
        {
          t1: 'Chat History Archival',
          t2: 'Create repositories of chat logs and retrieve them anytime instantly',
        },
        {
          t1: 'Get notified quickly',
          t2: 'Messages sent to the IM chat notifies you immediately on your android or iOS device',
        }
      ],
      depList: [
        {
          t1: 'Sync and Store',
          t2: 'Communicate with other people quickly and securely with our innovative features',
        },
        {
          t1: 'Two-Step Verification',
          t2: 'Send and make payments safely and quickly',
        },
        {
          t1: 'Lightweight Application',
          t2: 'Store HOT and earn monthly dividends',
        },
        {
          t1: 'End to End Encryption',
          t2: 'We have created fortified walls to ensure safer information exchange.',
        }
      ],
      borderIndex: 0,
      depIndex: 0
    }
  },
  mounted () {
    new WOW({live: false}).init()
  }
}
</script>

<style lang="less" scoped>
  .product{
    .bg-wrap{
      background: url(~@img/prod/bg1.png) no-repeat center -80px, url(~@img/prod/bg2.png) no-repeat center bottom;
    }
    .tit{
      font-size: 37px;
      font-weight: bold;
    }
    .first{
      padding: 110px 0 240px;
      text-align: center;
      .tit{
        margin-bottom: 60px;
        font-size: 40px;
      }
    }
    .feature{
      position: relative;
      padding-bottom: 180px;
      &::before{
        content: '';
        position: absolute;
        right: 0;
        top: 46px;
        z-index: -1;
        width: 154px;
        height: 259px;
        background: url(~@img/home/bg1.png) 33px no-repeat;
      }
      &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: -319px;
        z-index: -1;
        width: 216px;
        height: 379px;
        background: url(~@img/home/bg4.png) -33px no-repeat;
      }
      .wrap{
        width: 980px;
      }
      .content{
        padding-top: 80px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item{
          padding: 0 22px 22px;
          min-height: 306px;
          width: 300px;
          border: 1px dashed @green;
          background: #fff;
          box-shadow: 4px 4px 10px rgba(28,182,174,.2);
          border-radius: 10px;
          margin-bottom: 40px;
          line-height: 1.5;
          transition: background .35s;
          .img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #c6edeb;
            .allCenter;
            justify-content: center;
            margin-top: 40px;
            margin-bottom: 20px;
            transition: .35s;
          }
          h3{
            font-weight: bold;
            line-height: 24px;
            margin-bottom: 14px;
          }
          p{
            color: #333;
            font-size: 15px;
          }
          &:hover{
            background: @green;
            background: linear-gradient(120deg, #43d9d1, #1cb6ae);
            color: #fff;
            border-color: transparent;
            .img{
              margin-top: 24px;
              background: #fff;
            }
            p{
              color: #fff;
            }
          }
        }
      }
    }
    .borders{
      padding-bottom: 200px;
      .wrap{
        .hCenter;
        .l{
          width: 610px;
          padding-top: 58px;
        }
      }
      .tit{
        margin-bottom: 56px;
      }
      .content{
        .item{
          padding: 20px 24px;
          border-radius: 10px;
          line-height: 1.5;
          transition: background .3s;
          border: 1px dashed transparent;
          margin: 20px 0;
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
            background: #fff;
            border-color: @green;
            box-shadow: 4px 4px 10px rgba(28,182,174,.2);
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
    .dep{
      overflow: hidden;
      .wrap{
        padding-top: 38px;
        width: 860px;
        background: url(~@img/prod/bg3.png) no-repeat left 0;
      }
      .content{
        margin: 90px auto 170px;
        border: 2px solid @green;
        padding: 50px 80px;
        position: relative;
      }
      .hd{
        position: relative;
        width: 380px;
        display: flex;
        flex-wrap: wrap;
        &:before,&:after{
          content: '';
          position: absolute;
          background: @green;
        }
        &:before{
          top: 50%;
          left: 0;
          height: 1px;
          width: 100%;
        }
        &:after{
          left: 50%;
          top: 0;
          width: 1px;
          height: 100%;
        }
        .item{
          width: 190px;
          height: 190px;
          .vCenter;
          justify-content: center;
          padding: 0 8px;
          font-size: 18px;
          color: #333333;
          line-height: 34px;
          transition: .3s;
          cursor: default;
          &.active{
            color: @green;
            background: #caebeb;
          }
          h3{
            font-weight: bold;
            text-align: center;
          }
        }
      }
      .bd{
        position: absolute;
        top: 75px;
        right: -40px;
        width: 300px;
        height: 328px;
        background: @green;
        background: linear-gradient(120deg, #43d9d1, #1cb6ae);
        border-radius: 10px;
        &:after{
          content: '';
          position: absolute;
          background: #d7eff0;
          top: 22px;
          bottom: 22px;
          left: -30px;
          right: 0;
          z-index: -1;
          border-radius: 10px;
        }
        .item{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #fff;
          padding: 30px;
          height: 286px;
          z-index: 2;
          width: 300px;
          .img{
            padding-top: 20px;
          }
          h3{
            font-size: 20px;
            padding: 28px 0 10px;
            font-weight: bold;
            line-height: 26px;
          }
          p{
            line-height: 26px;
          }
        }
      }
    }
    .down{
      color: #fff;
      background: url(~@img/prod/down_bg.png) center;
      padding: 78px;
      text-align: center;
      h3{
        font-size: 38px;
        font-weight: bold;
        &:after{
          content: '';
          display: block;
          width: 100px;
          height: 4px;
          background: #fff;
          margin: 30px auto 0;
          border-radius: 4px;
        }
      }
      .links{
        padding-top: 48px;
      }
      img{
        margin: 0 15px;
      }
    }

    @media screen and (max-width: 1200px){
      .bg-wrap{
        background: none;
      }
      .tit{
        font-size: 24px;
        line-height: 1.3;
        padding: 0 5%;
      }
      .first{
        padding: 80px 0px;
        text-align: center;
        .tit{
          margin-bottom: 40px;
          font-size: 26px;
        }
      }
      .feature{
        padding: 80px 0;
        background: #f0f4f7;
        &::before{
          z-index: 2;
          top: 120px;
          transform: scale(.3);
          transform-origin: right center;
        }
        &::after{
          z-index: 2;
          bottom: 150px;
          transform: scale(.3);
          transform-origin: left center;
        }
        .content{
          position: relative;
          z-index: 5;
          padding: 40px 8% 0;
          display: block;
          .item{
            padding: 0 22px 30px;
            width: auto;
            margin-bottom: 30px;
            text-align: center;
            min-height: auto;
            .img{
              margin-left: auto;
              margin-right: auto;
            }
            h3{
              font-weight: bold;
              line-height: 24px;
              margin-bottom: 14px;
            }
          }
        }
      }
      .borders{
        padding: 80px 0;
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
            img{
              width: 70%;
            }
          }
        }
        .content{
          .item{
            margin: 0;
            h3{
              color: #000;
            }
            &.active h3{
              color: @green;
            }
          }
        }
      }
      .dep{
        position: relative;
        overflow: visible;
        padding: 0;
        &::before{
          content: '';
          position: absolute;
          right: 0;
          top: -146px;
          width: 154px;
          z-index: -1;
          height: 259px;
          background: url(~@img/home/bg1.png) 33px no-repeat;
          transform: scale(.5);
          transform-origin: right center;
        }
        .tit{
          padding: 0 2%;
        }
        .wrap{
          padding-top: 38px;
          background: url(~@img/prod/bg3.png) no-repeat left 0;
        }
        .content{
          margin: 0;
          border: none;
          padding: 80px 0;
          position: relative;
        }
        .hd{
          display: none;
        }
        .bd{
          position: relative;
          right: auto;
          top: auto;
          width: auto;
          margin: 0 26px;
          height: auto;
          background: @green;
          background: linear-gradient(120deg, #43d9d1, #1cb6ae);
          border-radius: 10px;
          &:after{
            content: '';
            position: absolute;
            background: #d7eff0;
            top: 40px;
            bottom: 40px;
            left: -22px;
            right: -22px;
            z-index: -1;
            border-radius: 10px;
          }
          .item{
            position: static;
            padding: 30px;
            height: auto;
            width: auto;
            .img{
              padding-top: 0;
            }
            h3{
              font-size: 20px;
              padding: 28px 0 10px;
              font-weight: bold;
              line-height: 26px;
            }
            p{
              line-height: 26px;
            }
          }
        }
      }
      .down{
        padding: 50px 0 40px;
        h3{
          font-size: 26px;
        }
        img{
          margin: 0 3%;
          width: 36%;
        }
      }
    }

  }

  .slide2-enter-active, .slide2-leave-active {
    transition: .3s;
  }
  .slide2-enter, .slide2-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translate(100%);
    opacity: 0;
    position: absolute !important;
    top: 116px;
  }
</style>
