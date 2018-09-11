<template lang="pug">
  .heading.relative-position()
    .row.justify-center(style="padding:10%; padding-top:0%")
      .col-12.headingtextoffset.shadow-4(v-scroll-reveal={ delay: 50 })
        h2 Welcome Texans for Cures!
        p As the leading organization advancing Phase 1 clinical trials for cancer and heart disease, we are thrilled to be working with the Boid team to help us. Boid is cutting edge blockchain technology that allows you to donate your unused computer power to generate crypto currency and get us to our goal. By downloading and installing the Boid application here:
        ul
          li
            a(href="https://github.com/Boid-John/BoidDesktop/releases") Download Boid Apps 
          li
            a(href="https://app.boid.com") Create Account here
        h3 You will be going a long way to helping us reach our fundraising goals. 
        h4 Some basic FAQs:
        h5 Is the Boid application safe or will it harm my computer?
        p Security is absolutely one of our highest priorities and we have an extremely rigorous vetting and testing regimen. At no time is your personal information accessed in anyway and you are incontrol of when you want to run Boid. The Boid application is perfectly safe for any computer. 
        h5 How does this help Texans for Cures” 
        p By running the Boid application you are contributing to a cryptocurrency mining pool on a collective basis. This collective mining effort can be donated to the Texans for Cures.
        h5 Can I use more than one device to help out? 
        p Yes! We currently support iOS and Windows. We have a downloadable application or a web based application. We even plan on supporting mobile phones in the future.
        h5 How can i see how much Im contributing to the project?
        b Your Boid Power is displayed on the app and also on the Boid website via your dashboard. We even have leaderboards so you can see how your production stacks up to everyone else. It's super fun and a really great way to help.
        h5 I love this idea how can I get intouch with Boid to discuss other opportunities to help or learn more?
        p Please send an email to scott@boid.com or just find him at the Regenerative Summit on 9/13/18. You can also visit the website at 
        a(href="https://www.boid.com") www.boid.com
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