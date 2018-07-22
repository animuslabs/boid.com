<template lang="pug">
  .heading.relative-position()
    .row.justify-center
      .col-12.headingtextoffset(v-scroll-reveal={ delay: 150 })
        h2.text-center The Social Supercomputer
      .col-auto(v-scroll-reveal={ delay: 250 })
        q-btn.shadow-5(style="z-index:1000" :size="buttonSize" color="green-6" @click="openURL('https://app.boid.com')") Join Us
    .row.justify-center()
      .col-12(v-scroll-reveal={ delay: 350 })
        .row.justify-center
          .col-auto.q-mt-lg
              q-btn.block(style="z-index:1000" flat size="md" color="white" @click="openURL('http://twitter.com/boidcom')") 
                img.on-left(style="width: 40px;" src="~assets/twitterlogo.svg")
                p Follow us @boidcom
              q-btn(style="z-index:1000" flat color="white" @click="openURL('https://discord.gg/52RWWP')") 
                img.on-left( style="width: 40px;" src="https://discordapp.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg")
                p Join our Discord
      .row.absolute-bottom.justify-center
        svg.headingsvgheight(id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" style="fill: #fff;" viewBox="0 0 100 100" preserveAspectRatio="none")
          path(id="svg_1" d="M0 100 C 60 10 90 50 100 100 Z" fill="#fff")
</template>
<style lang="stylus">
.heading 
  background: linear-gradient(to right, rgba(30, 87, 153, 0.7) 0%, rgba(79, 138, 194, 0.65) 52%, rgba(125, 185, 232, 0.7) 100%), url('~assets/header2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // background-attachment: fixed;
  width: 100%;
  height: 100%;
  min-height: 700px;
  @media screen and (max-width: $breakpoint-xl) 
    min-height: 690px
  @media screen and (max-width: $breakpoint-lg) 
    min-height: 690px
  @media screen and (max-width: $breakpoint-md) 
    min-height: 420px
  @media screen and (max-width: $breakpoint-sm) 
    min-height: 410px
.headingtextoffset
  margin-top 150px
  @media screen and (max-width: $breakpoint-md) 
    margin-top: 50px
.headingsvgheight
  height: 150px
  @media screen and (max-width: $breakpoint-md) 
    height 100px
  @media screen and (max-width: $breakpoint-sm) 
    height 80px

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