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
              q-btn(style="z-index:1000" flat color="white" @click="openURL('https://discordapp.com/invite/DCQ6FrC')") 
                img.on-left( style="width: 40px;" src="~assets/discordicon.svg")
                p Join our Discord
      .row.absolute-bottom.justify-center
        svg.headingsvgheight(id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" style="fill: #fff;" viewBox="0 0 100 100" preserveAspectRatio="none")
          path(id="svg_1" d="M0 100 C 60 10 90 50 100 100 Z" fill="#fff")
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