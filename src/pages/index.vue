<template lang="pug">
  q-page
    .heading.relative-position
      .row.justify-center
        .col-12(style="margin-top:300px;")
          h2.text-center The Social Supercomputer
        div
          q-btn.on-left.shadow-5(size="xl" color="green-6") Join Us
          q-btn.shadow-5(size="xl" color="blue") Learn More 
            q-icon.on-right(name="arrow_downward")
      .row.absolute-bottom.justify-center
        // img.transition(src="assets/transition1.svg")
        svg(id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" style="fill: #fff;" viewBox="0 0 100 100" preserveAspectRatio="none")
          path(d="M0 100 C 20 0 50 0 100 100 Z")
    .row.justify-center.gutter-md
      .col-12.relative-position(style="margin-top:100px; margin-bottom:100px;")
        div.absolute-center
          h3 Do something Huge
          h4 boid makes it easy
    .row.justify-center.gutter-sm.q-ma-lg(style="margin-top:120px;")
      .col-lg-3.col-md-12
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="assets/team2.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Join a Team
          p Each team provides unique incentives and competes against other teams.
      .verticalSpacer.lt-lg
      .col-lg-3.col-md-12
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="assets/installBoid.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Connect your Devices
          p Install the Boid app on your computers and phones.
      .verticalSpacer.lt-lg
      .col-lg-3.col-md-12
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="assets/team2.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Contribute to big ideas
          p Your spare computing resouces will make an impact in important science and cryptocurrency projects.
      .verticalSpacer.lt-lg
      .col-lg-3.col-md-12
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="assets/team.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Earn Rewards
          p Earn money for your computing power, or donate your earnings to charity.
    .relative-position
      <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" style="position:absolute; padding-top:0; margin-top:0;fill: #00345b; top:0px;" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 C 60 0 70 20 120 100 Z"></path></svg>
    div(style="background-color: #00345b; height:5000px;")
      .row.justify-center(style="margin-top:124px; margin-bottom:10px;")
        div
          h3.text-white Fight the good fight
          h4 Our communities have real impact
        .col-4
          img.teamicon(src="assets/commoncause.svg")

    
</template>

<style lang="stylus">
@import '~variables'

.verticalSpacer
  height 180px
.heroicon
  padding 50px
  width 400px
.teamicon
  width 600px

.herocard
  border-radius 30px
  z-index 1
  margin-top 130px
  padding 20px
.transition
  width 100%
  height 500px
h2
  color white
  font-family 'Comfortaa'
h3
  color #089cfc
  font-family 'Comfortaa'
  text-transform uppercase
  margin-bottom 0px

h4
  color $green-6
  margin-top 0px
h5
  color $grey-9
  font-size 35px
  margin-top 25px
  margin-bottom 20px
  

.heading 
  background linear-gradient(left, rgba(30,87,153,.5) 0%,rgba(79,138,194,0.45) 52%,rgba(125,185,232,.5) 100%),
  url("/assets/header2.png")
  background-size cover
  background-repeat no-repeat
  background-position top center
  width 100%
  height 100%
  min-height 950px
</style>

<script>
export default {
  data(){
    return {}
  }
}
</script>
