<template lang="pug">
  .relative-position.bg-green-6(style="padding-bottom:200px")
    svg(id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" style="position:absolute; padding-top:0;  margin-top:0;fill: rgb(76, 175, 80); top:-100px;" viewBox="0 0 100 100" preserveAspectRatio="none")
      path(d="M0 100 C 60 10 90 50 100 100 Z")
    .row.justify-center.gutter-lg
      .col-12
        .row.justify-center
          .col-8
            h3.text-white(style="text-shadow: 0px 1px 0px grey") The Boid app
            h4.text-yellow-8(style="margin-bottom: 0px;") just set it and forget it
      .col-sm-12.col-md-8.col-lg-5.col-xl-4
        img(src="~assets/connectdevices.svg" style="max-width:600px; filter: drop-shadow( 1px 4px 2px grey")
      .col-sm-12.col-md-10.col-lg-5.col-xl-4
        table.full-width
          tr
            td
              q-icon(name="security" size="70px" color="white")
            td(style="padding-top:35px; padding-left:20px")
              h6.bpHeading.text-white Secure 
              h6.bpinfoText.text-white Modern code sandboxing and cryptography ensure personal data security.
          tr
            td
              q-icon(name="check_circle" size="70px" color="white")
            td(style="padding-top:35px; padding-left:20px")
              h6.bpHeading.text-white Simple 
              h6.bpinfoText.text-white All you need to do is install the application and link it to your Boid account.
          tr
            td
              q-icon(name="visibility_off" size="70px" color="white")
            td(style="padding-top:35px; padding-left:20px")
              h6.bpHeading.text-white Seamless 
              h6.bpinfoText.text-white The application intelligently runs in the background to utilize unused resouces. 
      .col-12
        .row.justify-center
          div
            q-btn(@click="openURL('https://app.boid.com')" size="30px" color="blue" rounded push) Get Started
    svg.absolute-bottom(style="width:100%; height:50px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none") 
      // polygon.svg--sm(fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100")
      polygon.svg--lg(fill="rgb(0, 112, 208)" points="0,0 15,100 33,21 45,100 72,20 85,100 95,50 100,80 100,100 0,100")

</template>

<script>
import { openURL } from 'quasar'

export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  methods:{
    openURL
  }
}
</script>

<style>
</style>
