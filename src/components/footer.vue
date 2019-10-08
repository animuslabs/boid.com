<template lang="pug">
  .row.justify-center.footermaster
    q-btn.block(style="z-index:1000" flat size="md" color="white" @click="openURL('http://community.boid.com')") 
      img(style="width: 40px;" src="~assets/communityicon.png")
    q-btn.block(style="z-index:1000" flat size="md" color="white" @click="openURL('http://twitter.com/boidcom')") 
      img(style="width: 40px;" src="~assets/twitterlogo.svg")
    q-btn.block(style="z-index:1000" flat color="white" @click="openURL('https://discord.gg/zJnRpVz')") 
      img( style="width: 40px;" src="~assets/discordicon.svg")
    q-btn(style="z-index:1000" flat color="white" @click="openURL('https://t.me/Boidcom_official')") 
      img( style="width: 40px;" src="~assets/telegramlogo.svg")
</template>

<script>
import { openURL } from 'quasar'

export default {
  data () {
    return {

    }
  },
  methods:{
    openURL,
    emailUs(){
      alert('contact@boid.com')
      window.location.href = "mailto:contact@boid.com"
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'
.footerbtn
  margin 10px
.footermaster
  padding 30px
  // height: 200px
  background-color $grey-10
</style>
