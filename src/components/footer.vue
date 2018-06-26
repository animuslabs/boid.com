<template lang="pug">
  .row.justify-center.footermaster
    .col-auto.relative-position
      .absolute-cener
        q-btn.footerbtn(size="md" color="green-6" @click="openURL('https://app.boid.com')") Join Us
        q-btn.footerbtn(color="blue" @click="openURL('http://twitter.com/boidcom')") Follow us @boidcom
        q-btn.footerbtn(color="orange" @click="emailUs()") Email us
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
  margin-right 10px
.footermaster
  padding 30px
  height: 200px
  background-color $grey-10
</style>
