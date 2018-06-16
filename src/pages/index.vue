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
        // img.transition(src="~assets/transition1.svg")
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
          img.heroicon.absolute-center(src="~assets/team2.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Join a Team
          p Each team provides unique incentives and competes against other teams.
      .verticalSpacer.lt-lg
      .col-lg-3.col-md-12
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="~assets/installBoid.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Connect your Devices
          p Install the Boid app on your computers and phones.
      .verticalSpacer.lt-lg
      .col-lg-3.col-md-12
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="~assets/team2.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Contribute to big ideas
          p Your spare computing resouces will make an impact in important science and cryptocurrency projects.
      .verticalSpacer.lt-lg
      .col-lg-3.col-md-12
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="~assets/bitcoin.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Earn Rewards
          p Earn money for your computing power, or donate your earnings to charity.
    .relative-position
      <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" style="position:absolute; padding-top:0; margin-top:0;fill: rgb(0, 112, 208); top:0px;" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 C 60 10 90 50 100 100 Z"></path></svg>
    div(style="background-color: rgb(0, 112, 208); border-bottom-left-radius: 60% 5%; border-bottom-right-radius: 50% 5%;")
      .row.justify-center(style="margin-top:124px; margin-bottom:10px;")
        .col-lg-5.col-md-12.layout-padding
          h3.text-white Fight the good fight
          h4.yellowheading Our communities have real impact
          .col-lg-4.col-md-12.lt-md
            q-carousel(ref="teamSlides" infinite no-swipe :autoplay="4000")
              q-carousel-slide
                img.teamicon(src="~assets/commoncause.svg")
              q-carousel-slide
                img.teamicon(src="~assets/boidteams.svg")
              q-carousel-slide
                img.teamicon(src="~assets/winprizes.svg")
              q-carousel-slide
                img.teamicon(src="~assets/teamleader.svg")
          ul(style="max-width:500px;")
            transition-group(appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
              li(key="0" v-bind:class="{activelist:teamActiveItem === 0}").q-pa-sm
                h6 Team Leaders rally users around important causes
              li(key="1" v-bind:class="{activelist:teamActiveItem === 1}").q-pa-sm
                h6 Users contribute their computing resouces on global leaderboards
              li(key="2" v-bind:class="{activelist:teamActiveItem === 2}").q-pa-sm
                h6 Users can win money and prizes for their contributions
              li(key="3" v-bind:class="{activelist:teamActiveItem === 3}").q-pa-sm
                h6 Team leaders can keep or donate commisions earned from their team performance
        .col-lg-6.col-md-12.gt-md
          q-carousel(ref="teamSlides" infinite no-swipe :autoplay="4000")
            q-carousel-slide
              img.teamicon(src="~assets/commoncause.svg")
            q-carousel-slide
              img.teamicon(src="~assets/boidteams.svg")
            q-carousel-slide
              img.teamicon(src="~assets/winprizes.svg")
            q-carousel-slide
              img.teamicon(src="~assets/teamleader.svg")
    .explainer.relative-position.layout-padding(style="margin-top:0px;")
      .row.reverse.justify-center.relative-position
        .col-lg-4.col-xl-2
          div
            h3 Help researchers solve hard problems
        .col-lg-1
        .col-lg-6.col-md-12.col-xl-5.relative-position.gt-sm(style="height:400px;")
          br
          br
          .absolute-center
            .row.justify-center.bg-white.shadow-2(style="width:530px")
              .col-md-12.relative-position.q-ma-lg
                QBtnToggle.absolute-center(@input="clearSciInterval" size="lg" rounded color="white" text-color="grey-8" v-model="activeScienceBtn" toggle-color="orange-6" :options="scienceBtns")
              .col-sm-12.col-md-3.col-lg-4.relative-position(style="height:210px;")
                img.scienceIcons.absolute-center(:src="scienceInfo.img")
              .col-sm-12.col-md-8.col-lg-7.col-xl-6
                div
                  .scienceCard
                    h6.scienceHeader.text-orange-6 {{scienceInfo.headerText}}
                    p  {{scienceInfo.paragraphText}}
        .col-lg-6.col-md-12.col-xl-5.lt-md
          br
          br
          .row.justify-center.bg-white.shadow-2(style="margin-top:0px;")
            .col-md-12.relative-position.q-ma-lg
              // QBtnToggle.absolute-center(@input="clearSciInterval" size="sm" rounded color="white" text-color="grey-8" v-model="activeScienceBtn" toggle-color="orange-6" :options="scienceBtns")
            .col-sm-12.col-md-3.col-lg-4.relative-position(style="height:210px;")
              img.scienceIcons.absolute-center(:src="scienceInfo.img")
            .col-sm-12.col-md-8.col-lg-7.col-xl-6
              div
                .scienceCard(style="height:150px;")
                  h6.scienceHeader.text-orange-6 {{scienceInfo.headerText}}
                  p  {{scienceInfo.paragraphText}}
      .row
        .col-lg-12.layout-padding
          h3 This is How it works
      .row.justify-center.gutter-xl(style="margin-top:180px;")
        .col-lg-5.col-md-12.col-xl-4(style="height:600px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/problem.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 1
                th 
                  p.poverride Researchers need computing power to solve complex problems. 
        .col-lg-5.col-md-12.col-xl-4(style="height:600px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/solution.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 2
                th 
                  p.poverride Complex problems are broken into small tasks that can run on any computer.
        .col-lg-5.col-md-12.col-xl-4(style="height:600px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/distribute.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 3
                th 
                  p.poverride Small tasks are distributed to computers and phones globally.  
        .col-lg-5.col-md-12.col-xl-4(style="height:600px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/process.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 4
                th 
                  p.poverride Tasks are processed, and the result of each computation is returned.   
        .col-lg-5.col-md-12.col-xl-4(style="height:600px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/assemble.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 5
                th 
                  p.poverride Individual results are verified and assembled together into one big solution.
        .col-lg-5.col-md-12.col-xl-4(style="height:600px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/earn.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 6
                th 
                  p.poverride Users generate ⚡Boid Power in exchange for their contributions.
</template>

<style lang="stylus">
@import '~variables'

.poverride
  padding-left 10px

th
  font-weight normal
  text-align left

.verticalSpacer2
  height 250px
.sciExplain
  padding 10px
  width 500px
  height 500px
  background-color $blue-9
  border-radius 100%
  z-index 3
.explaincard
  border-radius 30px
  z-index 5
  margin-top 180px
  padding 30px
  position:relative

.explainer
  background-image url("~assets/hexbg.png")
  background-scale 200%
  height 5000px
.scienceHeader
  margin-bottom 10px

.scienceIcons
  width 180px
  padding 0px
  margin 0 auto
  display: block

.scienceCard
  border-radius 30px
  z-index 1
  margin 20px
  padding 20px
  height 200px

.wave 
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index: 1;

.wave + .wave 
  z-index: 2;

.yellowheading
  color $green-5
  font-weight 400
li
  color $grey-1
  font-size 24px
  padding 10px
.activelist
  background-color $green-5
  color $grey-1
  border-radius 10px
  box-shadow 2 2 10 4 black
.verticalSpacer
  height 180px
.heroicon
  padding 30px
  width 350px
.teamicon
  max-width 600px
  display: block
  margin: 0 auto 
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
p
  font-size 18px
  margin-bottom 0px

h4
  color $green-6
  margin-top 0px
h5
  color $grey-9
  font-size 35px
  margin-top 25px
  margin-bottom 20px
h6
  margin 0px
  
  

.heading 
  background linear-gradient(left, rgba(30,87,153,.5) 0%,rgba(79,138,194,0.45) 52%,rgba(125,185,232,.5) 100%),
  url("~assets/header2.png")
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
    return {
      teamActiveItem:0,
      activeScienceBtn:0,
      sciInterval:'',
      scienceBtns:[
            {label:'Medicine',value:0},
            {label:'Ecology',value:1},
            {label:'Astronomy',value:2},
            {label:'Machine Learning',value:3},{label:'More',value:4}]
    }
  },
  mounted(){
    this.sciInterval = setInterval(()=>{
      if (this.activeScienceBtn>3){
        this.activeScienceBtn = 0
      } else this.activeScienceBtn++
    },1000)
    this.$refs.teamSlides.$on('slide',(i)=>{
      this.teamActiveItem = i
    })
  },
  computed:{
    scienceInfo(){
      if (this.activeScienceBtn === 0){
        return {
          headerText:'Save Lives',
          paragraphText:'Your computer can help scientists simulate and isolate more effictive treatments for cancer, alzheimers, and many other diseases.',
          img:'~assets/scicons/chemistry.svg'
        }
      } else if (this.activeScienceBtn === 1){
        return {
          headerText:'Study Global Warming',
          paragraphText:'Help run climate simulations that predict the effects of climate change on our planet.',
          img:'~assets/scicons/chemistry.svg'
        }
      } else if (this.activeScienceBtn === 2){
        return {
          headerText:'Save Lives',
          paragraphText:'Your computer can help scientists simulate proteins to isolate more effictive treatments for cancer, alzheimers, and many other diseases.',
          img:'~assets/scicons/chemistry.svg'
        }
      } else if (this.activeScienceBtn === 3){
        return {
          headerText:'Save Lives',
          paragraphText:'Your computer can help scientists simulate and isolate more effictive treatments for cancer, alzheimers, and many other diseases.',
          img:'~assets/scicons/chemistry.svg'
        }
      } else if (this.activeScienceBtn === 4){
        return {
          headerText:'Save Lives',
          paragraphText:'Your computer can help scientists simulate and isolate more effictive treatments for cancer, alzheimers, and many other diseases.',
          img:'~assets/scicons/chemistry.svg'
        }
      }
    }
  },
  methods:{
    clearSciInterval(){
      clearInterval(this.sciInterval)
    }
  }
}
</script>
