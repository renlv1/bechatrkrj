<template>
  <div class="home">
    <div class="section contact">
      <div class="wrap">
        <div class="tit">
          <h3>CONTACT US</h3>
          <div class="bar"></div>
        </div>
        <div class="content" v-if="!submitSuccess">
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
export default {
  data () {
    return {
      submitSuccess: false
    }
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
body{
  display: none;
}
#app {
  .contact{
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
  }
}
</style>
