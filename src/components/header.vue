<template lang="pug">
.heading.relative-position
  .row.justify-center
    .col-12.headingtextoffset()
      h2.text-center The Social Supercomputer
    .col-auto
      // q-btn.shadow-5(style="z-index:1000" :size="buttonSize" color="green-6" @click="openURL('https://app.boid.com')") Join Us
  .row.justify-center
    // q-btn.shadow-5(style="z-index:1000" size="md" color="blue-6" @click="openURL('https://github.com/boid-com/BoidDesktop/releases')") Download Now
  .row.justify-center
    .row.justify-center.full-width
      .col-12(style="height:300px;").relative-position
        .row.justify-center.full-width
          .col-xs-12.col-md-7
            iframe(class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/3iAh/On1" style="height:500px; top:300px;").full-width
    //- .col-12
    //-   .row.justify-center.q-pt-lg

    //-     div
    //-     q-btn.block(style="z-index:1000" flat size="md" color="white" @click="openURL('http://community.boid.com')")
    //-       img(style="width: 40px;" src="~assets/communityicon.png")
    //-     q-btn.block(style="z-index:1000" flat size="md" color="white" @click="openURL('http://twitter.com/boidcom')")
    //-       img(style="width: 40px;" src="~assets/twitterlogo.svg")
    //-     q-btn.block(style="z-index:1000" flat color="white" @click="openURL('https://discord.gg/zJnRpVz')")
    //-       img(style="width: 40px;" src="~assets/discordicon.svg")
    //-     q-btn(style="z-index:1000" flat color="white" @click="openURL('https://t.me/Boidcom_official')")
    //-       img(style="width: 40px;" src="~assets/telegramlogo.svg")
    //- .row.absolute-bottom.justify-center
    //-   svg#curveDownColor.headingsvgheight(xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" style="fill: #fff;" viewBox="0 0 100 100" preserveAspectRatio="none")
    //-     path#svg_1(d="M0 100 C 60 10 90 50 100 100 Z" fill="#fff")
</template>
<style lang="stylus" scoped>


</style>
<script>
  import {openURL} from 'quasar'
  export default {
    data(){
      return{

      }
    },
    methods:{
      openURL
    },
    props:[
      'buttonSize'
    ]
  }
</script>
