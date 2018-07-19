<template lang="pug">
  .row.justify-center.footermaster
    q-btn.footerbtn(size="md" color="green-6" @click="openURL('https://app.boid.com')") Join Us
    q-btn.footerbtn(color="orange" @click="emailUs()") Email us
    q-btn.block(style="z-index:1000" flat size="md" color="white" @click="openURL('http://twitter.com/boidcom')") 
      img.on-left(style="width: 40px;" src="~assets/twitterlogo.svg")
      p Follow us @boidcom
    q-btn(style="z-index:1000" flat color="white" @click="openURL('https://discord.gg/52RWWP')") 
      img.on-left( style="width: 40px;" src="https://discordapp.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg")
      p Join our Discord
</template>

<script>
import { openURL } from 'quasar'

export default {
  // name: 'ComponentName',
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
